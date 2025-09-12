
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function AcademicProgramsPage() {
  const { language } = useLanguage();
  const t = translations[language].academicPrograms;

  const programs = [
    {
      name: t.programs[0].name,
      description: t.programs[0].description,
      image: 'https://picsum.photos/600/400?random=1',
      dataAiHint: "USA flag",
      href: '/academic-programs/usa',
    },
    {
      name: t.programs[1].name,
      description: t.programs[1].description,
      image: 'https://picsum.photos/600/400?random=2',
      dataAiHint: "Mexico landmark",
      href: '/academic-programs/mexico',
    },
    {
      name: t.programs[2].name,
      description: t.programs[2].description,
      image: 'https://picsum.photos/600/400?random=3',
      dataAiHint: "Colombia landscape",
      href: '/academic-programs/colombia',
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.name} className="overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={program.image}
                    alt={`Image for ${program.name} program`}
                    data-ai-hint={program.dataAiHint}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{program.name}</CardTitle>
                <p className="mt-2 text-muted-foreground">{program.description}</p>
                <Button asChild className="mt-4">
                  <Link href={program.href}>
                    {t.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
