
'use client';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function TermsPage() {
  const { language } = useLanguage();
  const t = translations[language].terms;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto prose">
        <h1 className="font-headline text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t.lastUpdated}</p>
        
        <div className="space-y-6">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
            <p>{t.p5}</p>
            <p>{t.p6}</p>
            <p>{t.p7}</p>
        </div>
      </div>
    </div>
  );
}
