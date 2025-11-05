
import type { Metadata } from 'next';
import { AuthProvider } from '@/components/auth-provider';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import WhatsAppFloatButton from '@/components/shared/WhatsAppFloatButton';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { inter } from '@/app/fonts';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { headers } from 'next/headers';
import RouteProgress from '@/components/shared/RouteProgress';

export async function generateMetadata(): Promise<Metadata> {
  const heads = await headers();
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
      <body className={cn('font-body', inter.variable)} suppressHydrationWarning>
        <LanguageProvider>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <RouteProgress />
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <WhatsAppFloatButton />
            </div>
            <Toaster />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
