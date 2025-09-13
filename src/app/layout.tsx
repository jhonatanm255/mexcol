
import type { Metadata } from 'next';
import { AuthProvider } from '@/components/auth-provider';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { ptSans } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { headers } from 'next/headers';

export function generateMetadata(): Metadata {
  const heads = headers();
  const lang = heads.get('accept-language')?.startsWith('es') ? 'es' : 'en';
  const t = translations[lang];

  return {
    title: t.metadata.title,
    description: t.metadata.description,
  }
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-body', ptSans.variable)}>
        <LanguageProvider>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
