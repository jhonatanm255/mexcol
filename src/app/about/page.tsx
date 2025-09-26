
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          {t.subtitle}
        </p>
      </section>

      <section className="my-16">
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://picsum.photos/seed/about-main/1200/400"
            alt="A diverse group of people collaborating"
            data-ai-hint="team collaboration"
            width={1200}
            height={400}
            className="object-cover"
          />
           <div className="absolute inset-0 bg-primary/30" />
        </div>
      </section>
      
      <section className="my-16 text-center" id="team">
        <h2 className="font-headline text-3xl font-bold mb-4">
          {t.teamTitle}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {language === 'es'
            ? 'Conoce a detalle a nuestro equipo directivo y médico en la sección de Staff.'
            : 'Learn more about our leadership and medical staff in the Staff section.'}
        </p>
        <Link
          href="/staff"
          className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-white hover:opacity-90"
        >
          {language === 'es' ? 'Ver Directores y Staff' : 'View Directors & Staff'}
        </Link>
      </section>
    </div>
  );
}
