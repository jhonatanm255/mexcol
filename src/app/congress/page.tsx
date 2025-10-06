'use client';

import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import PrefetchLink from '@/components/shared/PrefetchLink';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  Gift, 
  BookOpen, 
  Building, 
  Camera,
  Star,
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Presentation className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              {t.subtitle}
            </p>
            <Button asChild size="lg" className="btn-modern bg-white text-white hover:bg-white/90 px-8 py-4 text-lg">
              <PrefetchLink href="/contact">{t.registerNow}</PrefetchLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-6 text-foreground">
                {t.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t.description}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.mission}
              </p>
            </div>
            <div className="space-y-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Target className="h-5 w-5" />
                    {t.targetAudience.split(':')[0]}:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.targetAudience.split(':')[1]}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Heart className="h-5 w-5" />
                    {t.commitment.split(':')[0]}:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.commitment.split(':')[1]}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Presentation className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t.presentations}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.presentationsList.map((presentation, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-full flex-shrink-0 mt-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-green-100 rounded-full">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-foreground">
                  {t.benefits}
                </h2>
              </div>
              
              <div className="space-y-4">
                {t.benefitsList.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Endorsements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="font-headline text-3xl font-bold text-foreground">
                  {t.endorsements}
                </h2>
              </div>
              
              <div className="space-y-4">
                {t.endorsementsList.map((endorsement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{endorsement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raffle Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/20 rounded-full">
                <Gift className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t.raffle}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {t.raffleItems.map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
                <CardContent className="p-6">
                  <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Congress Workshops */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-teal-100 rounded-full">
                <BookOpen className="h-8 w-8 text-teal-600" />
              </div>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t.preCongress}
            </h2>
          </div>
          
          <div className="space-y-4">
            {t.preCongressWorkshops.map((workshop, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-teal-200 hover:border-teal-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-teal-100 rounded-full flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-teal-600" />
                    </div>
                    <p className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">
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
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-lime-100 rounded-full">
                <MapPin className="h-8 w-8 text-lime-600" />
              </div>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t.location}
            </h2>
          </div>
          
          <Card className="border-lime-200 bg-lime-50/50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-lime-100 rounded-full flex-shrink-0">
                  <Building className="h-6 w-6 text-lime-600" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold mb-2 text-foreground">
                    {t.hotelName}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t.hotelAddress}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-cyan-100 rounded-full">
                <Camera className="h-8 w-8 text-cyan-600" />
              </div>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t.tourism}
            </h2>
          </div>
          
          <Card className="border-cyan-200 bg-cyan-50/50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-100 rounded-full flex-shrink-0">
                  <Camera className="h-6 w-6 text-cyan-600" />
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