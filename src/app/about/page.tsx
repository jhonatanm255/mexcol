
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl mb-8">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1600&auto=format&fit=crop"
            alt="Medical professionals in training"
            width={1600}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                {t.hero.subtitle}
              </p>
              <Button asChild size="lg" className="btn-modern">
                <Link href="/academic-programs">
                  {t.hero.cta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid gap-4">
            {t.endorsements.items.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            {t.missionVision.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            {t.finalCta.title}
          </h2>
          <Button asChild size="lg" className="btn-modern">
            <Link href="/academic-programs">
              {t.finalCta.button}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
