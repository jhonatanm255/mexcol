
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import LogoUSAVerde from '@/assets/Logo-USA-Blanco.png';
import { CheckCircle, Users, Globe, Award, ShieldCheck, GraduationCap, FileCheck, BadgeCheck } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden mb-16"
        style={{ minHeight: '458.14px' }}
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1600&auto=format&fit=crop"
            alt="Medical professionals in training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col">
          <div className="flex justify-center md:justify-end pt-6 md:pt-10 lg:pt-12">
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36">
              <Image
                src={LogoUSAVerde}
                alt="Instituto MexCol USA Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          <div className="mt-auto flex flex-col items-center text-center md:items-start md:text-left text-white gap-4 pb-8 md:pb-14 lg:pb-16 md:pl-12 lg:pl-20">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-base md:text-2xl text-white/90 font-medium md:max-w-3xl">
              {t.hero.subtitle}
            </p>
            <Button asChild size="lg" className="btn-modern bg-white text-white hover:bg-white/90 px-8 py-4 text-lg">
              <Link href="/academic-programs">
                {t.hero.cta}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-16">

      {/* Who We Are Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            {t.whoWeAre.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.whoWeAre.content}
          </p>
        </div>
      </section>

      {/* Endorsements Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">
            {t.endorsements.title}
          </h2>
          
          {/* Primer párrafo descriptivo */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t.endorsements.items[0]}
          </p>

          {/* Cards del medio (índices 1, 2, 3) sin borde izquierdo */}
          <div className="grid gap-4 mb-6">
            {t.endorsements.items.slice(1, 4).map((item, index) => {
              const icons = [Award, Award, Award];
              const Icon = icons[index];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed flex-1">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Último párrafo descriptivo */}
          <p className="text-primary leading-relaxed italic">
            {t.endorsements.items[4]}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            {t.missionVision.title}
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary">
                  {t.missionVision.mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.missionVision.mission.content}
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary">
                  {t.missionVision.vision.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.missionVision.vision.content}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact in Numbers Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            {t.impact.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.impact.metrics.map((metric, index) => (
              <Card key={index} className={`text-center ${index === 1 ? 'bg-primary text-primary-foreground' : ''}`}>
                <CardContent className="p-8">
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${index === 1 ? 'text-primary-foreground' : 'text-primary'}`}>
                    {metric.number}
                  </div>
                  <p className={`text-lg ${index === 1 ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            {t.team.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t.team.content}
          </p>
          <Button asChild size="lg" className="btn-modern">
            <Link href="/staff">
              {t.team.cta}
            </Link>
          </Button>
        </div>
      </section>

        {/* Final CTA Section */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-xl md:text-2xl font-semibold mb-6">
              {t.finalCta.title}
            </h2>
            <Button asChild size="lg" variant="outline">
              <Link href="/academic-programs">
                {t.finalCta.button}
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
