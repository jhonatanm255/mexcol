
'use client';
import Image from 'next/image';
import Link from 'next/link';
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
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

const CouponForm = dynamic(() => import('@/components/home/CouponForm'), {
  ssr: false,
  loading: () => <Skeleton className="h-10 w-full" />,
});


export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  
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
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/academic-programs">{t.hero.explorePrograms}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t.hero.contactUs}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
             {t.whyChooseUs.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.whyChooseUs.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center transition-transform hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="coupon" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              {t.coupon.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
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
