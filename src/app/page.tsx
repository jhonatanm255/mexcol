'use client';
import Image from 'next/image';
import Link from 'next/link';
import PrefetchLink from '@/components/shared/PrefetchLink';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraduationCap, BookOpen, Video, Award, Star, Quote, MapPin, Facebook, Ticket } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import BrandMarquee from '@/components/shared/BrandMarquee';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import InicioBanner from '@/assets/portada-medicos-eu.jpg';
import LogoUSAVerde from '@/assets/Logo-USA-Blanco.png';

const CouponForm = dynamic(() => import('@/components/home/CouponForm'), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-full" />,
});


export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const th = t.home;
  
  const features = [
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: t.features.expertInstructors.title,
      description: t.features.expertInstructors.description,
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: t.features.flexibleLearning.title,
      description: t.features.flexibleLearning.description,
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: t.features.interactiveContent.title,
      description: t.features.interactiveContent.description,
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: t.features.valuableCertificates.title,
      description: t.features.valuableCertificates.description,
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] min-h-[600px] w-full section-modern">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src={InicioBanner} 
            alt="Instituto MexCol Banner" 
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full container mx-auto px-4">
          <div className="h-full flex flex-col justify-start py-4">
            {/* Logo - izquierda y arriba */}
            <div className="flex justify-start ml-12">
              <div className="relative w-full max-w-xs h-72">
                <Image 
                  src={LogoUSAVerde} 
                  alt="Instituto MexCol USA Logo" 
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
            
            {/* Contenido de texto - izquierda y abajo */}
            <div className="text-left max-w-2xl mt-6">
              <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white mb-3 drop-shadow-lg">
                {th.hero.main}
              </h1>
              <p className="mt-3 text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md max-w-xl">
                {th.hero.sub}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild size="lg" className="btn-modern px-8 py-4 text-lg">
                  <PrefetchLink href="/academic-programs">{t.hero.explorePrograms}</PrefetchLink>
                </Button>
                <Button asChild size="lg" variant="secondary" className="btn-modern px-8 py-4 text-lg bg-black text-white hover:bg-black/90">
                  <PrefetchLink href="/contact">{t.hero.contactUs}</PrefetchLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="online-training" className="py-20 md:py-28 section-modern gradient-bg">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
              {th.onlineTraining.title}
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">{th.onlineTraining.intro}</p>
            <div className="mt-10">
              <Button asChild size="lg" className="btn-modern px-8 py-4 text-lg">
                <PrefetchLink href="/online-training">{th.onlineTraining.viewRecorded}</PrefetchLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-programs" className="py-20 md:py-28 section-modern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
              {th.featuredPrograms.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {th.featuredPrograms.cards.map((c, i) => (
              <Card key={i} className="modern-card overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={c.image} alt={c.country} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-sm font-medium px-3 py-1">{c.country}</Badge>
                  </div>
                  <CardTitle className="font-headline text-xl leading-tight">{c.course}</CardTitle>
                </CardHeader>
                {/* <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
                </CardContent> */}
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="btn-modern px-8 py-4 text-lg">
              <PrefetchLink href="/academic-programs">{th.featuredPrograms.viewMore}</PrefetchLink>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-28 section-modern gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
              {th.testimonials.title}
            </h2>
            <p className="text-lg text-muted-foreground">{th.testimonials.sub}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:px-16 shadow-lg">
            <Carousel 
              opts={{ align: 'start', loop: true }} 
              plugins={[Autoplay({ delay: 4000 })]}
            >
              <CarouselContent>
                {th.testimonials.items.map((it, idx) => (
                  <CarouselItem key={idx} className="p-2 sm:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300 relative bg-white">
                      {/* Quote icon */}
                      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                      
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <CardTitle className="font-headline text-base text-foreground font-semibold">{it.name} · {it.location}</CardTitle>
                        <CardDescription className="text-xs font-medium text-primary">{it.program}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm leading-relaxed text-muted-foreground italic">{it.text}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="mt-8 text-center mb-4">
              <p className="text-lg font-medium text-primary">
                {th.testimonials.reviewsText}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="sm" variant="outline" className="hover:bg-blue-50 focus-modern border">
                <a href="https://web.facebook.com/profile.php?id=100064823553168&sk=reviews&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Facebook className="h-4 w-4 text-blue-600" />
                  {th.testimonials.facebook}
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="hover:bg-red-50 focus-modern border">
                <a href="https://www.google.com/maps/place/Instituto+MexCol/@19.3953309,-99.1871588,16z/data=!4m8!3m7!1s0x85d1ff6a4e5eaaab:0x6d6262102c03bff3!8m2!3d19.3953309!4d-99.1845839!9m1!1b1!16s%2Fg%2F11flrplb83?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {th.testimonials.googleMx}
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="hover:bg-red-50 focus-modern border">
                <a href="https://www.google.com/maps/place/Instituto+Mexcol+Medicina+Est%C3%A9tica,+Belleza+y+Hol%C3%ADstica/@28.4500233,-81.3990457,17z/data=!4m17!1m10!3m9!1s0x88e77da778543991:0xbaca64c81f95f8b6!2sInstituto+Mexcol+Medicina+Est%C3%A9tica,+Belleza+y+Hol%C3%ADstica!8m2!3d28.4497642!4d-81.399351!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11rvg6gl56!3m5!1s0x88e77da778543991:0xbaca64c81f95f8b6!8m2!3d28.4497642!4d-81.399351!16s%2Fg%2F11rvg6gl56?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {th.testimonials.googleUsa}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="py-20 md:py-28 section-modern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
              {th.brands.title}
            </h2>
            <p className="text-lg text-muted-foreground">{th.brands.optional}</p>
          </div>
          <BrandMarquee />
        </div>
      </section>

      <section id="contact-home" className="py-20 md:py-28 section-modern gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4">
              {th.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{th.contact.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="modern-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-foreground font-semibold">{th.contact.locations.coBogota.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{th.contact.locations.coBogota.address}</p>
              </CardContent>
            </Card>
            <Card className="modern-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-foreground font-semibold">{th.contact.locations.mx.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{th.contact.locations.mx.address}</p>
              </CardContent>
            </Card>
            <Card className="modern-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-foreground font-semibold">{th.contact.locations.usaOrlando.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{th.contact.locations.usaOrlando.address}</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild size="lg" className="btn-modern px-8 py-4 text-lg">
              <PrefetchLink href="/contact">{th.contact.viewLocations}</PrefetchLink>
            </Button>
          </div>
        </div>
      </section>
     {/*<section id="coupon" className="py-20 md:py-28 section-modern relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white">
       <div className="absolute inset-0 bg-black/20"></div>
       <div className="absolute inset-0 overflow-hidden">
         <div className="organic-shape w-96 h-96 top-10 left-10 opacity-10"></div>
         <div className="organic-shape w-80 h-80 bottom-10 right-10 opacity-5"></div>
       </div>
       
       <div className="container mx-auto px-4 relative z-10">
         <div className="mx-auto max-w-3xl text-center">
           <div className="flex justify-center mb-6">
             <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
               <Ticket className="h-12 w-12 text-white" />
             </div>
           </div>
           <h2 className="font-headline text-4xl text-white font-bold tracking-tight sm:text-5xl mb-6">
             {t.coupon.title}
           </h2>
           <p className="mt-6 text-xl text-white/90 leading-relaxed">
             {t.coupon.subtitle}
           </p>
           <div className="mt-10">
             <CouponForm />
           </div>
         </div>
       </div>
     </section>*/}
   </div>
 );
}
