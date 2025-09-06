import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GraduationCap, BookOpen, Video, Award } from 'lucide-react';
import CouponForm from '@/components/home/CouponForm';

export default function Home() {
  const features = [
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: 'Expert Instructors',
      description:
        'Learn from industry leaders and renowned academics in their field.',
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'Flexible Learning',
      description:
        'Access course materials anytime, anywhere, and learn at your own pace.',
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: 'Interactive Content',
      description:
        'Engage with high-quality video lectures, quizzes, and hands-on projects.',
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Valuable Certificates',
      description:
        'Earn certificates to showcase your new skills and advance your career.',
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
            Unlock Your Potential with EduVoucher
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl">
            Discover a world of knowledge with our premium online courses.
            Access exclusive content and start your learning journey today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/academic-programs">Explore Programs</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide a world-class educational experience.
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
              Have a Coupon?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Enter your coupon code below to unlock access to a special class.
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
