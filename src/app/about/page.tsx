
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const teamMembers = t.team;

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
            src="https://picsum.photos/1200/400"
            alt="A diverse group of people collaborating"
            data-ai-hint="team collaboration"
            width={1200}
            height={400}
            className="object-cover"
          />
           <div className="absolute inset-0 bg-primary/30" />
        </div>
      </section>
      
      <section className="my-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-12">
          {t.teamTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader className="items-center">
                <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${member.name}`} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
