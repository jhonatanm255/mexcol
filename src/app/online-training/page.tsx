import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OnlineTrainingPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
        Formación en línea
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        Our online training catalog is currently being updated. Please check back soon for a list of our comprehensive courses and certifications.
      </p>
      <Button asChild className="mt-8" variant="secondary">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
