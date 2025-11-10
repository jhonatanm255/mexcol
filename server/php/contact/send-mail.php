<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido. Usa POST.',
    ]);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    // Fallback: intentar leer formulario tradicional (application/x-www-form-urlencoded)
    $payload = filter_input_array(INPUT_POST, FILTER_SANITIZE_SPECIAL_CHARS);
}

$requiredFields = ['name', 'email', 'phone', 'country', 'message', 'language'];
$missing = [];

foreach ($requiredFields as $field) {
    if (empty($payload[$field])) {
        $missing[] = $field;
    }
}

if (!empty($missing)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Campos obligatorios faltantes: ' . implode(', ', $missing),
    ]);
    exit;
}

$name = trim((string) $payload['name']);
$email = trim((string) $payload['email']);
$country = trim((string) $payload['country']);
$phone = trim((string) $payload['phone']);
$message = trim((string) $payload['message']);
$language = $payload['language'] === 'es' ? 'es' : 'en';

try {
    $mailer = new PHPMailer(true);

    $mailer->isSMTP();
    $mailer->Host = 'smtp.gmail.com';
    $mailer->SMTPAuth = true;
    $mailer->Username = 'jhonm21@gmail.com';
    $mailer->Password = 'isa04052015';
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mailer->Port = 587;
    $mailer->CharSet = 'UTF-8';

    $mailer->setFrom('jhonm21@gmail.com', 'Formulario de Contacto MexCol');
    $mailer->addAddress('jhonm21@gmail.com', 'MexCol Contact Form');
    $mailer->addReplyTo($email, $name);

$subject = $language === 'es'
        ? 'Nuevo mensaje desde el formulario de contacto'
        : 'New message from contact form';

    $mailer->Subject = $subject;

    $sanitizedMessage = nl2br(htmlentities($message, ENT_QUOTES, 'UTF-8'));

    $body = <<<HTML
    <h2>{$subject}</h2>
    <p><strong>Nombre:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>País:</strong> {$country}</p>
    <p><strong>Teléfono:</strong> {$phone}</p>
    <p><strong>Mensaje:</strong><br />{$sanitizedMessage}</p>
HTML;

    $mailer->isHTML(true);
    $mailer->Body = $body;
    $mailer->AltBody = strip_tags(str_replace('<br />', PHP_EOL, $body));

    $mailer->send();

    echo json_encode([
        'success' => true,
        'message' => $language === 'es'
            ? 'Tu mensaje fue enviado correctamente.'
            : 'Your message has been sent successfully.',
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $language === 'es'
            ? 'No pudimos enviar tu mensaje. Intenta más tarde.'
            : 'We could not send your message. Please try again later.',
        'error' => $e->getMessage(),
    ]);
}

