
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden mb-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
            alt="Capacitación en línea"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-10">

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
      
      <section className="my-16 bg-secondary p-6 md:p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <h2 className="font-headline text-2xl md:text-3xl font-bold">{t.readyToStart}</h2>
                <p className="mt-4 text-muted-foreground">{t.readySubtitle}</p>
                <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start'>
                    <Button asChild className="w-full sm:w-auto">
                        <Link href="/academic-programs">{t.viewAllPrograms}</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                        <Link href="/contact">{t.requestInfo}</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden order-first md:order-last">
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
    </div>
  );
}
