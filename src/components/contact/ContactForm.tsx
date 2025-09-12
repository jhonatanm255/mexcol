
"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/actions/contact.actions";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].contact.form;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("language", language);

      const result = await submitContactForm(null, formData);

      if (result.success) {
        toast({
          title: t.successTitle,
          description: result.message,
        });
        form.reset();
      } else if (result.message) {
        toast({
          variant: "destructive",
          title: t.errorTitle,
          description: result.message,
        });
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">{t.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.nameLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.namePlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.emailLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder={t.emailPlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t.messagePlaceholder}
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
               {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.submitting}
                </>
               ) : t.submit}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
