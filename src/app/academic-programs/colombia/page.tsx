import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'Diplomado en Medicina Estética Avanzada',
    description:
      'Un programa intensivo para médicos que buscan especializarse en las técnicas más innovadoras de la medicina estética.',
    duration: '6 meses',
  },
  {
    title: 'Certificación en Farmacología Clínica',
    description:
      'Desarrolla competencias para la gestión y optimización de tratamientos farmacológicos en el entorno clínico.',
    duration: '4 meses',
  },
  {
    title: 'Curso de Actualización en Pediatría',
    description:
      'Repasa los últimos avances y guías de práctica clínica en la atención pediátrica para el médico general.',
    duration: '8 semanas',
  },
];

export default function ColombiaPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Programas Académicos - Colombia
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Ofrecemos programas de vanguardia diseñados para fortalecer las
          habilidades de los profesionales de la salud en Colombia.
        </p>
      </section>

      <section className="my-16">
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://picsum.photos/1200/400?random=10"
            alt="Paisaje de Colombia"
            data-ai-hint="Colombia landscape"
            width={1200}
            height={400}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/30" />
        </div>
      </section>

      <section className="my-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-12">
          Nuestra Oferta Educativa
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
                  <span>Duración: {course.duration}</span>
                </div>
                <Button className="w-full">Más Información</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="text-center mt-16">
        <Button asChild size="lg">
          <Link href="/academic-programs">Volver a Programas</Link>
        </Button>
      </div>
    </div>
  );
}
