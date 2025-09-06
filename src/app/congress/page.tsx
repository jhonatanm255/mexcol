import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import Link from 'next/link';

const speakers = [
    { name: 'Dr. Ana Torres', topic: 'Innovaciones en Inmunoterapia', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Dr. Ben Carter', topic: 'The Future of AI in Diagnostics', avatar: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Dra. Sofia Reyes', topic: 'Avances en Cirugía Robótica', avatar: 'https://i.pravatar.cc/150?img=7' },
    { name: 'Dr. Kenji Tanaka', topic: 'Genomic Medicine and Patient Care', avatar: 'https://i.pravatar.cc/150?img=8' },
];

export default function CongressPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Congreso Anual de Ciencias Médicas
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Únete a líderes de opinión y profesionales de todo el mundo en nuestro congreso anual. Explora las últimas tendencias y descubrimientos en la ciencia médica.
        </p>
      </section>

      <section className="my-16">
        <Card className="overflow-hidden md:flex">
            <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col justify-center items-center text-center">
                <h3 className="font-headline text-2xl font-bold text-primary">Detalles del Evento</h3>
                <div className="mt-6 space-y-4 text-left">
                    <div className="flex items-start gap-4">
                        <Calendar className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <p className="font-semibold">Fecha</p>
                            <p className="text-muted-foreground">15-17 de Noviembre, 2024</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                         <div>
                            <p className="font-semibold">Lugar</p>
                            <p className="text-muted-foreground">Centro de Convenciones Metropolitano</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Ticket className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <p className="font-semibold">Inscripción</p>
                            <p className="text-muted-foreground">La inscripción ya está abierta</p>
                        </div>
                    </div>
                </div>
                 <Button className="mt-8">Regístrate Ahora</Button>
            </div>
            <div className="md:w-2/3 p-8">
                 <h3 className="font-headline text-2xl font-bold mb-6">Oradores Destacados</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {speakers.map(speaker => (
                         <div key={speaker.name} className="flex items-center gap-4">
                             <Avatar className="h-16 w-16 border-2 border-primary/50">
                                 <AvatarImage src={speaker.avatar} alt={speaker.name} />
                                 <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                             <div>
                                 <h4 className="font-semibold">{speaker.name}</h4>
                                 <p className="text-sm text-muted-foreground">{speaker.topic}</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </Card>
      </section>

       <div className="text-center">
         <Button asChild className="mt-8" variant="secondary">
            <Link href="/">Volver al Inicio</Link>
         </Button>
       </div>
    </div>
  );
}
