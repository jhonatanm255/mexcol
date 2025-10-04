
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function AcademicProgramsPage() {
  const { language } = useLanguage();
  const t = translations[language].academicPrograms;

  const countries = [
    { key: 'usa' as const, label: t.tabs.usa, image: 'https://picsum.photos/1200/400?random=21', ai: 'USA flag' },
    { key: 'mexico' as const, label: t.tabs.mexico, image: 'https://picsum.photos/1200/400?random=22', ai: 'Mexico landmark' },
    { key: 'colombia' as const, label: t.tabs.colombia, image: 'https://picsum.photos/1200/400?random=23', ai: 'Colombia landscape' },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <section className="mb-10">
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
          <Image
            src="https://picsum.photos/1600/500?random=20"
            alt="Academic Programs hero"
            data-ai-hint="Programs hero image"
            width={1600}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-headline text-white text-3xl md:text-4xl font-bold tracking-tight">{t.heroHeadline}</h1>
            <p className="mt-3 max-w-3xl text-white/90">{t.heroSubheadline}</p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl mx-auto text-center text-muted-foreground">{t.description}</p>
      </section>

      <Tabs defaultValue={countries[0].key} className="w-full">
        <div className="flex justify-center">
          <TabsList>
            {countries.map((c) => (
              <TabsTrigger key={c.key} value={c.key}>{c.label}</TabsTrigger>
            ))}
          </TabsList>
        </div>

        {countries.map((c) => {
          const list = (t.countries as any)[c.key].courses as Array<{ title: string; description?: string }>; 
          return (
            <TabsContent key={c.key} value={c.key} className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((course) => (
                  <Card key={course.title} className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-headline">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      {course.description && (
                        <p className="text-muted-foreground mb-4">{course.description}</p>
                      )}
                      <div className="mt-auto">
                        <Button className="w-full btn-modern">{t.cta}</Button>
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
  );
}
