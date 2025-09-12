
"use server";

import { z } from "zod";
import { translations } from "@/lib/i18n";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  language: z.enum(['en', 'es']),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const lang = formData.get("language") === 'es' ? 'es' : 'en';
  const t = translations[lang].contact.form;

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    language: lang,
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: t.errorMessage,
    };
  }

  console.log("Contact form submitted:", validatedFields.data);

  return {
    errors: {},
    message: t.successMessage,
    success: true,
  };
}
