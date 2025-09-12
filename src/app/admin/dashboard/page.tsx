
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Loader2, LogOut } from 'lucide-react';
import CouponGenerator from '@/components/admin/CouponGenerator';
import CouponList from '@/components/admin/CouponList';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const { language } = useLanguage();
  const t = translations[language].adminDashboard;
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/admin/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">{t.title}</h1>
          <p className="text-muted-foreground">
            {t.welcome.replace('{email}', user.email || '')}
          </p>
        </div>
        <Button variant="outline" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          {t.logout}
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <CouponGenerator />
        </div>
        <div className="lg:col-span-2">
          <CouponList />
        </div>
      </div>
    </div>
  );
}
