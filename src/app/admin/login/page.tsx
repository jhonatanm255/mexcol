
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Loader2, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { user, loading, login } = useAuth();
  const { language } = useLanguage();
  const t = translations[language].adminLogin;
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!loading && user) {
      router.replace('/admin/dashboard');
    }
  }, [user, loading, router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setError(null);
    try {
      await login(data.email, data.password);
      router.replace('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to log in. Please check your credentials.');
    }
  };

  if (loading || user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-2 text-muted-foreground">{t.redirecting}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary mb-4">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">{t.title}</CardTitle>
          <CardDescription>
            {t.description}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.emailLabel}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.emailPlaceholder}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t.passwordLabel}</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{t.loginFailedTitle}</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.loggingIn}
                </>
              ) : t.loginButton}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
