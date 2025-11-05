
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AcademicProgramsPage() {
  const { language } = useLanguage();
  const t = translations[language].academicPrograms;
  const searchParams = useSearchParams();
  const countryParam = searchParams.get('country');
  
  const [selectedTab, setSelectedTab] = useState<'usa' | 'mexico' | 'colombia'>(
    (countryParam === 'colombia' || countryParam === 'mexico' || countryParam === 'usa') 
      ? countryParam 
      : 'usa'
  );

  useEffect(() => {
    if (countryParam === 'colombia' || countryParam === 'mexico' || countryParam === 'usa') {
      setSelectedTab(countryParam);
    }
  }, [countryParam]);

  const countries = [
    { key: 'usa' as const, label: t.tabs.usa, image: 'https://picsum.photos/1200/400?random=21', ai: 'USA flag' },
    { key: 'mexico' as const, label: t.tabs.mexico, image: 'https://picsum.photos/1200/400?random=22', ai: 'Mexico landmark' },
    { key: 'colombia' as const, label: t.tabs.colombia, image: 'https://picsum.photos/1200/400?random=23', ai: 'Colombia landscape' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden mb-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
            alt="Academic Programs hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {t.heroHeadlineTop}
              <br />
              {t.heroHeadlineBottom}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              {t.heroSubheadline}
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-10">

      <Tabs value={selectedTab} onValueChange={(value) => setSelectedTab(value as 'usa' | 'mexico' | 'colombia')} className="w-full">
        <div className="flex justify-center">
          <TabsList>
            {countries.map((c) => (
              <TabsTrigger key={c.key} value={c.key}>{c.label}</TabsTrigger>
            ))}
          </TabsList>
        </div>

        {countries.map((c) => {
          const list = (t.countries as any)[c.key].courses as Array<{ title: string; description?: string; image?: string; slug?: string }>; 
          return (
            <TabsContent key={c.key} value={c.key} className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((course) => (
                  <Card key={course.title} className="h-full flex flex-col overflow-hidden group">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image 
                        src={course.image || 'https://picsum.photos/400/300'} 
                        alt={course.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle className="font-headline">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      {course.description && (
                        <p className="text-muted-foreground mb-4">{course.description}</p>
                      )}
                      <div className="mt-auto">
                        <Button 
                          className="w-full btn-modern" 
                          asChild
                        >
                          <a href={`/academic-programs/${c.key}/${course.slug || ''}`}>
                            {t.cta}
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
      </div>
    </div>
  );
}
