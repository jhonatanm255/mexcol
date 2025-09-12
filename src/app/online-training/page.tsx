
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, BrainCircuit, HeartPulse, Microscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

const icons = [
    <HeartPulse className="w-10 h-10 text-primary" />,
    <BrainCircuit className="w-10 h-10 text-primary" />,
    <Microscope className="w-10 h-10 text-primary" />,
    <BookOpen className="w-10 h-10 text-primary" />,
];

export default function OnlineTrainingPage() {
  const { language } = useLanguage();
  const t = translations[language].onlineTraining;
  
  const categories = t.categories.map((category, index) => ({
      ...category,
      icon: icons[index]
  }));

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
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                    {category.icon}
                </div>
                <CardTitle className="pt-4">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="my-16 bg-secondary p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="font-headline text-3xl font-bold">{t.readyToStart}</h2>
                <p className="mt-4 text-muted-foreground">{t.readySubtitle}</p>
                <div className='mt-6 flex gap-4'>
                    <Button asChild>
                        <Link href="/academic-programs">{t.viewAllPrograms}</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/contact">{t.requestInfo}</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image 
                    src="https://picsum.photos/600/400?random=15" 
                    alt="Persona estudiando en linea" 
                    data-ai-hint="online learning"
                    width={600}
                    height={400}
                    className="object-cover"
                />
            </div>
        </div>
      </section>

    </div>
  );
}
