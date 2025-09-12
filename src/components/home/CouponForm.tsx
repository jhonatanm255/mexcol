
"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { validateCoupon } from "@/lib/actions/coupon.actions";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/lib/i18n";

function SubmitButton() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();
  const t = translations[language].coupon;

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {t.validating}
        </>
      ) : (
        t.accessClass
      )}
    </Button>
  );
}

export default function CouponForm() {
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language].coupon;

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
          placeholder={t.placeholder}
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
