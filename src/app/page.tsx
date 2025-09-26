
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
import { GraduationCap, BookOpen, Video, Award } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import BrandMarquee from '@/components/shared/BrandMarquee';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

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
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Students learning online"
          data-ai-hint="online education"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground p-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {th.hero.main}
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl">
            {th.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <PrefetchLink href="/academic-programs">{t.hero.explorePrograms}</PrefetchLink>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <PrefetchLink href="/contact">{t.hero.contactUs}</PrefetchLink>
            </Button>
          </div>
        </div>
      </section>

      <section id="online-training" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{th.onlineTraining.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{th.onlineTraining.intro}</p>
            <div className="mt-8">
              <Button asChild size="lg">
                <PrefetchLink href="/online-training">{th.onlineTraining.viewRecorded}</PrefetchLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-programs" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{th.featuredPrograms.title}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {th.featuredPrograms.cards.map((c, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={c.image} alt={c.country} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{c.country}</Badge>
                  </div>
                  <CardTitle className="font-headline text-xl">{c.course}</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <PrefetchLink href="/academic-programs">{th.featuredPrograms.viewMore}</PrefetchLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{th.testimonials.title}</h2>
            <p className="mt-2 text-muted-foreground">{th.testimonials.sub}</p>
          </div>
          <div className="bg-muted rounded-lg p-4 md:px-14">
            <Carousel opts={{ align: 'start', loop: false }}>
              <CarouselContent>
                {th.testimonials.items.map((it, idx) => (
                  <CarouselItem key={idx} className="p-1 sm:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="font-headline text-base">{it.name} · {it.location}</CardTitle>
                        <CardDescription className="text-xs">{it.program}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm leading-relaxed">{it.text}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button asChild size="sm" variant="outline"><PrefetchLink href="#">{th.testimonials.viewAll}</PrefetchLink></Button>
              <Button asChild size="sm" variant="outline"><PrefetchLink href="#">{th.testimonials.leaveReview}</PrefetchLink></Button>
              <Button asChild size="sm" variant="outline"><PrefetchLink href="#">{th.testimonials.facebook}</PrefetchLink></Button>
              <Button asChild size="sm" variant="outline"><PrefetchLink href="#">{th.testimonials.googleMx}</PrefetchLink></Button>
              <Button asChild size="sm" variant="outline"><PrefetchLink href="#">{th.testimonials.googleUsa}</PrefetchLink></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="brands" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{th.brands.title}</h2>
            <p className="mt-2 text-muted-foreground">{th.brands.optional}</p>
          </div>
          <BrandMarquee />
        </div>
      </section>

      <section id="contact-home" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{th.contact.title}</h2>
            <p className="mt-2 text-muted-foreground">{th.contact.intro}</p>
            <div className="mt-6">
              <Button asChild><PrefetchLink href="/contact">{th.contact.viewLocations}</PrefetchLink></Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{th.contact.locations.mx.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{th.contact.locations.mx.address}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{th.contact.locations.usaOrlando.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{th.contact.locations.usaOrlando.address}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{th.contact.locations.usaHouston.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{th.contact.locations.usaHouston.address}</p>
                <p className="mt-2 text-xs text-muted-foreground">{th.contact.locations.usaPresence}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{th.contact.locations.coBogota.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{th.contact.locations.coBogota.address}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="coupon" className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl text-white font-bold tracking-tight sm:text-4xl">
              {t.coupon.title}
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              {t.coupon.subtitle}
            </p>
            <div className="mt-8">
              <CouponForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
