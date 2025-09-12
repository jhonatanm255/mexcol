
'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function CongressPage() {
  const { language } = useLanguage();
  const t = translations[language].congress;
  const speakers = t.speakers;

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
        <Card className="overflow-hidden md:flex">
            <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col justify-center items-center text-center">
                <h3 className="font-headline text-2xl font-bold text-primary">{t.eventDetails}</h3>
                <div className="mt-6 space-y-4 text-left">
                    <div className="flex items-start gap-4">
                        <Calendar className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <p className="font-semibold">{t.date}</p>
                            <p className="text-muted-foreground">{t.dateValue}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                         <div>
                            <p className="font-semibold">{t.location}</p>
                            <p className="text-muted-foreground">{t.locationValue}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Ticket className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <p className="font-semibold">{t.registration}</p>
                            <p className="text-muted-foreground">{t.registrationValue}</p>
                        </div>
                    </div>
                </div>
                 <Button className="mt-8">{t.registerNow}</Button>
            </div>
            <div className="md:w-2/3 p-8">
                 <h3 className="font-headline text-2xl font-bold mb-6">{t.featuredSpeakers}</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {speakers.map((speaker, index) => (
                         <div key={speaker.name} className="flex items-center gap-4">
                             <Avatar className="h-16 w-16 border-2 border-primary/50">
                                 <AvatarImage src={`https://i.pravatar.cc/150?img=${5 + index}`} alt={speaker.name} />
                                 <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                             <div>
                                 <h4 className="font-semibold">{speaker.name}</h4>
                                 <p className="text-sm text-muted-foreground">{speaker.topic}</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </Card>
      </section>

       <div className="text-center">
         <Button asChild className="mt-8" variant="secondary">
            <Link href="/">{t.backToHome}</Link>
         </Button>
       </div>
    </div>
  );
}
