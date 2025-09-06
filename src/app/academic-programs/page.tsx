import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    name: 'USA',
    description: 'Explore our accredited programs available for students in the United States.',
    image: 'https://picsum.photos/600/400?random=1',
    dataAiHint: "USA flag",
    href: '/academic-programs/usa',
  },
  {
    name: 'México',
    description: 'Descubre la oferta académica diseñada específicamente para nuestros estudiantes en México.',
    image: 'https://picsum.photos/600/400?random=2',
    dataAiHint: "Mexico landmark",
    href: '/academic-programs/mexico',
  },
  {
    name: 'Colombia',
    description: 'Conoce los programas y certificaciones que tenemos para profesionales en Colombia.',
    image: 'https://picsum.photos/600/400?random=3',
    dataAiHint: "Colombia landscape",
    href: '/academic-programs/colombia',
  },
];

export default function AcademicProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Programas Académicos
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Choose your region to discover tailored academic programs and certifications designed for your success.
        </p>
      </section>

      <section className="my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.name} className="overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={program.image}
                    alt={`Image for ${program.name} program`}
                    data-ai-hint={program.dataAiHint}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl">{program.name}</CardTitle>
                <p className="mt-2 text-muted-foreground">{program.description}</p>
                <Button asChild className="mt-4">
                  <Link href={program.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
