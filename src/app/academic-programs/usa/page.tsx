import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function USAPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
        Academic Programs - USA
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        Details about our programs for the USA will be available here soon.
      </p>
      <Button asChild className="mt-8">
        <Link href="/academic-programs">Back to Programs</Link>
      </Button>
    </div>
  );
}
