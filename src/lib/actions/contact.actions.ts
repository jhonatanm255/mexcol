
"use server";

import { z } from "zod";
import { translations } from "@/lib/i18n";
import { sendContactEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  phone: z.string().min(6),
  message: z.string().min(10),
  language: z.enum(["en", "es"]),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const lang = formData.get("language") === "es" ? "es" : "en";

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    country: formData.get("country"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    language: lang,
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message:
        lang === "es"
          ? "Por favor, completa todos los campos correctamente."
          : "Please fill all fields correctly.",
    };
  }

  try {
    // Enviar el correo directamente usando la función de email
    await sendContactEmail(validatedFields.data);

    return {
      errors: {},
      message:
        lang === "es"
          ? "Tu mensaje fue enviado correctamente."
          : "Your message has been sent successfully.",
      success: true,
    };
  } catch (error) {
    console.error("Error enviando formulario de contacto:", error);
    
    let errorMessage: string;
    
    if (error instanceof Error && error.message) {
      errorMessage = error.message;
    } else {
      errorMessage = lang === "es"
        ? "No pudimos enviar tu mensaje en este momento. Intenta más tarde."
        : "We could not send your message right now. Please try again later.";
    }

    return {
      errors: {},
      message: errorMessage,
    };
  }
}
