'use client';

import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PrefetchLink from '@/components/shared/PrefetchLink';
import Image from 'next/image';
import { 
  MapPin, 
  Award, 
  Gift, 
  BookOpen, 
  Camera,
  CheckCircle,
  Presentation,
  Target,
  Heart,
  Sparkles
} from 'lucide-react';

export default function CongressPage() {
  const { language } = useLanguage();
  
  // Verificar que el contexto esté disponible
  if (!language) {
    return null;
  }
  
  const t = translations[language].congress;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
            alt="Congreso Médico"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Presentation className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {t.subtitle}
            </p>
            <Button asChild size="lg" className="btn-modern bg-white text-white hover:bg-white/90 px-8 py-4 text-lg">
              <PrefetchLink href="/contact">{t.registerNow}</PrefetchLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 md:py-28 section-modern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                {t.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t.description}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.mission}
              </p>
            </div>
            <div className="space-y-6">
              <Card className="modern-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    {t.targetAudience.split(':')[0]}:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.targetAudience.split(':')[1]}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="modern-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    {t.commitment.split(':')[0]}:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.commitment.split(':')[1]}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="py-20 md:py-28 section-modern gradient-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t.presentations}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.presentationsList.map((presentation, index) => (
              <Card key={index} className="modern-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0 mt-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {presentation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits and Endorsements */}
      <section className="py-20 md:py-28 section-modern">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                  {t.benefits}
                </h2>
              </div>
              
              <div className="space-y-4">
                {t.benefitsList.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Endorsements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
                  {t.endorsements}
                </h2>
              </div>
              
              <div className="space-y-4">
                {t.endorsementsList.map((endorsement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{endorsement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raffle Section */}
      <section className="py-20 md:py-28 section-modern gradient-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t.raffle}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.raffleItems.map((item, index) => (
              <Card key={index} className="modern-card text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium leading-relaxed">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Congress Workshops */}
      <section className="py-20 md:py-28 section-modern">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t.preCongress}
            </h2>
          </div>
          
          <div className="space-y-4">
            {t.preCongressWorkshops.map((workshop, index) => (
              <Card key={index} className="modern-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {workshop}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-28 section-modern gradient-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t.location}
            </h2>
          </div>
          
          <Card className="modern-card overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold mb-2 text-foreground">
                    {t.hotelName}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t.hotelAddress}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Ciudad de México, CDMX</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tourism Section */}
      <section className="py-20 md:py-28 section-modern">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {t.tourism}
            </h2>
          </div>
          
          <Card className="modern-card">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t.tourismDescription}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            {t.subtitle}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t.description.split('.')[0]}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-modern bg-white text-white hover:bg-white/90 px-8 py-4 text-lg">
              <PrefetchLink href="/contact">{t.registerNow}</PrefetchLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-modern bg-black border-black text-white hover:bg-black/90 px-8 py-4 text-lg">
              <PrefetchLink href="/">{t.backToHome}</PrefetchLink>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}