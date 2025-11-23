import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  country: string;
  phone: string;
  message: string;
  language: "es" | "en";
}

export async function sendContactEmail(data: ContactFormData) {
  // Configuración del transporter usando variables de entorno
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.hostinger.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true para 465, false para otros puertos
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Verificar que las credenciales estén configuradas
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    throw new Error(
      data.language === "es"
        ? "El servidor de correo no está configurado. Define las variables SMTP_USER y SMTP_PASSWORD."
        : "The mail server is not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables."
    );
  }

  const isSpanish = data.language === "es";

  // Preparar el asunto del correo
  const subject = isSpanish
    ? "Nuevo mensaje desde el formulario de contacto"
    : "New message from contact form";

  // Preparar el cuerpo del correo en HTML
  const htmlBody = `
    <h2>${subject}</h2>
    <p><strong>${isSpanish ? "Nombre" : "Name"}:</strong> ${data.name}</p>
    <p><strong>${isSpanish ? "Email" : "Email"}:</strong> ${data.email}</p>
    <p><strong>${isSpanish ? "País" : "Country"}:</strong> ${data.country}</p>
    <p><strong>${isSpanish ? "Teléfono" : "Phone"}:</strong> ${data.phone}</p>
    <p><strong>${isSpanish ? "Mensaje" : "Message"}:</strong></p>
    <p>${data.message.replace(/\n/g, "<br />")}</p>
  `;

  // Preparar el cuerpo del correo en texto plano
  const textBody = `
${subject}

${isSpanish ? "Nombre" : "Name"}: ${data.name}
${isSpanish ? "Email" : "Email"}: ${data.email}
${isSpanish ? "País" : "Country"}: ${data.country}
${isSpanish ? "Teléfono" : "Phone"}: ${data.phone}
${isSpanish ? "Mensaje" : "Message"}:
${data.message}
  `;

  // Configurar las opciones del correo
  // IMPORTANTE: El remitente (from) debe ser el email autorizado en SMTP_USER
  // para evitar errores de "Sender address rejected"
  const mailOptions = {
    from: {
      name: process.env.SMTP_FROM_NAME || "Formulario de Contacto",
      address: process.env.SMTP_USER!, // Usar el email autorizado del servidor SMTP
    },
    to: process.env.SMTP_TO || "jhonatan@jhoncode.com",
    replyTo: {
      name: data.name,
      address: data.email, // El email del usuario para poder responderle directamente
    },
    subject: subject,
    text: textBody,
    html: htmlBody,
  };

  try {
    // Verificar la conexión antes de enviar
    await transporter.verify();
    
    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error: any) {
    console.error("Error sending email:", error);
    
    // Manejar errores específicos de autenticación
    if (error.code === "EAUTH" || error.responseCode === 535 || error.message?.includes("Invalid login")) {
      throw new Error(
        data.language === "es"
          ? "Credenciales de correo inválidas. Por favor, verifica tu usuario y contraseña SMTP en el archivo .env"
          : "Invalid email credentials. Please check your SMTP username and password in the .env file"
      );
    }
    
    if (error.code === "ECONNECTION" || error.message?.includes("Connection")) {
      throw new Error(
        data.language === "es"
          ? "No se pudo conectar al servidor de correo. Verifica tu conexión a internet."
          : "Could not connect to the email server. Please check your internet connection."
      );
    }
    
    // Error genérico
    throw new Error(
      data.language === "es"
        ? `Error al enviar el correo: ${error.message || "Error desconocido"}`
        : `Error sending email: ${error.message || "Unknown error"}`
    );
  }
}

