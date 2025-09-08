import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'Especialización en Cardiología Intervencionista',
    description: 'Programa de alta especialidad enfocado en procedimientos cardiológicos mínimamente invasivos.',
    duration: '2 años',
  },
  {
    title: 'Gestión de Calidad en Sistemas de Salud',
    description: 'Formación para líderes de la salud en la implementación de modelos de calidad y seguridad del paciente.',
    duration: '1 año',
  },
  {
    title: 'Taller de Suturas y Manejo de Heridas',
    description: 'Curso práctico intensivo para desarrollar destrezas quirúrgicas fundamentales para médicos y residentes.',
    duration: '2 días',
  },
];

export default function MexicoPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Programas Académicos - México
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        Educación médica continua de excelencia para los profesionales de la salud en México, con validez curricular.
        </p>
      </section>

      <section className="my-16">
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://picsum.photos/1200/400?random=11"
            alt="Monumento icónico de México"
            data-ai-hint="Mexico landmark"
            width={1200}
            height={400}
            className="object-cover"
          />
           <div className="absolute inset-0 bg-primary/30" />
        </div>
      </section>

       <section className="my-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-12">
          Cursos y Especialidades Disponibles
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
                <Button className="w-full">Inscribirse Ahora</Button>
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
