import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ColombiaPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
        Programas Académicos - Colombia
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        Los detalles sobre nuestros programas para Colombia estarán disponibles aquí próximamente.
      </p>
      <Button asChild className="mt-8">
        <Link href="/academic-programs">Volver a Programas</Link>
      </Button>
    </div>
  );
}
