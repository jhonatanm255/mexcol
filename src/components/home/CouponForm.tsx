"use client";

import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { validateCoupon } from "@/lib/actions/coupon.actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language');
      if (storedLang) {
        setLanguage(storedLang);
      }
    }
  }, []);

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {language === 'es' ? 'Validando...' : 'Validating...'}
        </>
      ) : (
        language === 'es' ? 'Acceder a Clase' : 'Access Class'
      )}
    </Button>
  );
}

export default function CouponForm() {
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language');
      if (storedLang) {
        setLanguage(storedLang);
      }
    }
  }, []);

  const handleSubmit = async (formData: FormData) => {
    const result = await validateCoupon(formData);
    if (result?.error) {
      setError(result.error);
    } else {
      setError(null);
    }
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="text"
          name="coupon"
          placeholder={language === 'es' ? 'Ingresa tu código de cupón' : 'Enter your coupon code'}
          required
          className="flex-grow"
          aria-label="Coupon Code"
        />
        <SubmitButton />
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
