
"use server";

import { z } from "zod";
import { translations } from "@/lib/i18n";

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
  const t = translations[lang].contact.form;

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
      message: t.errorMessage,
    };
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    return {
      errors: {},
      message:
        lang === "es"
          ? "El servidor de correo no está configurado. Define la variable CONTACT_FORM_ENDPOINT."
          : "The mail server is not configured. Please set CONTACT_FORM_ENDPOINT.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...validatedFields.data,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = (await response.json()) as {
      success?: boolean;
      message?: string;
      errors?: Record<string, string>;
    };

    if (data?.success) {
      return {
        errors: {},
        message: data.message ?? t.successMessage,
        success: true,
      };
    }

    return {
      errors: data?.errors ?? {},
      message: data?.message ?? t.errorMessage,
    };
  } catch (error) {
    console.error("Error enviando formulario de contacto:", error);
    return {
      errors: {},
      message:
        lang === "es"
          ? "No pudimos enviar tu mensaje en este momento. Intenta más tarde."
          : "We could not send your message right now. Please try again later.",
    };
  }

}
