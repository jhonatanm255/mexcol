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
import InicioBanner from '@/assets/img-heros/Hero Home.png';
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
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col">
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
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg">
              {th.hero.main}
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md max-w-xl md:max-w-2xl">
              {th.hero.sub}
            </p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="btn-modern px-8 py-4 text-lg">
                <PrefetchLink href="/academic-programs">{t.hero.explorePrograms}</PrefetchLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-4 text-lg borde-none text-[#1f2937] hover:bg-white">
                <PrefetchLink href="/contact">{t.hero.contactUs}</PrefetchLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="online-training" className="py-20 md:py-28" style={{backgroundColor: '#285F65'}}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-6" style={{color: '#FFFFFF'}}>
              {th.onlineTraining.title}
            </h2>
            <p className="mt-6 text-xl leading-relaxed max-w-3xl mx-auto" style={{color: '#FFFFFF'}}>{th.onlineTraining.intro}</p>
            <div className="mt-10">
              <Button asChild size="lg" className="border border-[#ECFDF5] text-[#FFFFFF] bg-transparent hover:text-white px-8 py-4 text-lg">
                <PrefetchLink href="/online-training">{th.onlineTraining.viewRecorded}</PrefetchLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

{/*       <hr className="h-[1px] w-full border-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
 */}
      <section id="featured-programs" className="py-20 md:py-28 section-modern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl mb-4" style={{color: '#285F65'}}>
              {th.featuredPrograms.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {th.featuredPrograms.cards.map((c, i) => (
              <Card key={i} className="modern-card overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={c.image} alt={c.country} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

      <section id="testimonials" className="py-20 md:py-28 section-modern" style={{backgroundColor: 'rgb(236 253 245)'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-[#1F2937] mb-4">
              {th.testimonials.title}
            </h2>
            <p className="text-lg text-[#475569]">{th.testimonials.sub}</p>
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
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-[#285F65] mb-4">
              {th.brands.title}
            </h2>
            <p className="text-lg text-[#475569]">{th.brands.optional}</p>
          </div>
          <BrandMarquee />
        </div>
      </section>

      <section id="contact-home" className="py-20 md:py-28 section-modern" style={{backgroundColor: '#285F65'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-[#FFFFFF] mb-4">
              {th.contact.title}
            </h2>
            <p className="text-lg text-[#FFFFFF] mb-8">{th.contact.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#FFFFFF'}}>
              <CardHeader>
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2" style={{color: '#285F65'}} />
                  <CardTitle className="font-semibold" style={{color: '#1F2937'}}>{th.contact.locations.coBogota.title}</CardTitle>
                  <p className="text-sm mt-1" style={{color: '#475569'}}>{th.contact.locations.coBogota.subtitle}</p>
                </div>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#FFFFFF'}}>
              <CardHeader>
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2" style={{color: '#285F65'}} />
                  <CardTitle className="font-semibold" style={{color: '#1F2937'}}>{th.contact.locations.mx.title}</CardTitle>
                  <p className="text-sm mt-1" style={{color: '#475569'}}>{th.contact.locations.mx.subtitle}</p>
                </div>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300" style={{backgroundColor: '#FFFFFF'}}>
              <CardHeader>
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2" style={{color: '#285F65'}} />
                  <CardTitle className="font-semibold" style={{color: '#1F2937'}}>{th.contact.locations.usaOrlando.title}</CardTitle>
                  <p className="text-sm mt-1" style={{color: '#475569'}}>{th.contact.locations.usaOrlando.subtitle}</p>
                </div>
              </CardHeader>
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
