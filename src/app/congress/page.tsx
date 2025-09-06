import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CongressPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
        Congreso
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        Information about our upcoming congress, including speakers, schedule, and registration details, will be posted here. Stay tuned for exciting announcements!
      </p>
       <Button asChild className="mt-8" variant="secondary">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
