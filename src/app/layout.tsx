import type { Metadata } from 'next';
import { AuthProvider } from '@/components/auth-provider';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';


export const metadata: Metadata = {
  title: 'EduVoucher - Professional Online Education',
  description:
    'Unlock your potential with our expert-led online courses. Enter a voucher to access special classes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
