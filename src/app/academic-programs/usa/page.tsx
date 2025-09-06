import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'USMLE Step 1 & 2 CK Prep Course',
    description: 'A comprehensive review course designed to help international medical graduates excel in the USMLE exams.',
    duration: '12 weeks',
  },
  {
    title: 'Fellowship in Anti-Aging and Regenerative Medicine',
    description: 'Advanced training for physicians on the latest in longevity science and regenerative therapies.',
    duration: '18 months',
  },
  {
    title: 'Medical English & Communication Skills',
    description: 'Enhance your ability to communicate effectively in a US healthcare setting, focusing on patient interaction and medical terminology.',
    duration: '6 weeks',
  },
];

export default function USAPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Academic Programs - USA
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Accredited programs and board preparation courses to help you achieve your career goals in the United States.
        </p>
      </section>

       <section className="my-16">
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://picsum.photos/1200/400?random=12"
            alt="USA landmark"
            data-ai-hint="USA landmark"
            layout="fill"
            objectFit="cover"
          />
           <div className="absolute inset-0 bg-primary/30" />
        </div>
      </section>

       <section className="my-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-12">
          Our Featured US Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.title}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{course.description}</p>
                 <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Duration: {course.duration}</span>
                </div>
                <Button className="w-full">Enroll Today</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="text-center mt-16">
        <Button asChild size="lg">
          <Link href="/academic-programs">Back to Programs</Link>
        </Button>
      </div>
    </div>
  );
}
