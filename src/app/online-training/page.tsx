import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, BrainCircuit, HeartPulse, Microscope } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    icon: <HeartPulse className="w-10 h-10 text-primary" />,
    title: 'Cardiología',
    description: 'Cursos sobre las últimas técnicas de diagnóstico y tratamiento cardiovascular.',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: 'Neurología',
    description: 'Actualizaciones en el manejo de enfermedades neurodegenerativas y ACV.',
  },
  {
    icon: <Microscope className="w-10 h-10 text-primary" />,
    title: 'Endocrinología',
    description: 'Programas sobre diabetes, tiroides y otros desórdenes hormonales.',
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: 'Medicina Interna',
    description: 'Revisión integral de los temas más relevantes para el internista.',
  },
];

export default function OnlineTrainingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Formación en Línea (Online Training)
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Accede a nuestra biblioteca de cursos en línea y aprende a tu propio ritmo con contenido de alta calidad creado por expertos.
        </p>
      </section>

      <section className="my-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                    {category.icon}
                </div>
                <CardTitle className="pt-4">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="my-16 bg-secondary p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="font-headline text-3xl font-bold">¿Listo para empezar?</h2>
                <p className="mt-4 text-muted-foreground">Explora nuestro catálogo completo y encuentra el programa perfecto para ti. Nuevos cursos añadidos mensualmente.</p>
                <div className='mt-6 flex gap-4'>
                    <Button asChild>
                        <Link href="/academic-programs">Ver Todos los Programas</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/contact">Solicitar Información</Link>
                    </Button>
                </div>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <Image 
                    src="https://picsum.photos/600/400?random=15" 
                    alt="Persona estudiando en linea" 
                    data-ai-hint="online learning"
                    width={600}
                    height={400}
                    className="object-cover"
                />
            </div>
        </div>
      </section>

    </div>
  );
}
