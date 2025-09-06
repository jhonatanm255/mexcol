import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SpecialClassPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="max-w-lg text-center">
        <CardHeader className="items-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="font-headline text-3xl">Access Granted!</CardTitle>
          <CardDescription>Your coupon is valid. Welcome to the special class.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            You have successfully unlocked exclusive content. You can now access the video lecture and materials for this special session.
          </p>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
            <p className="text-muted-foreground">Video player would be here.</p>
          </div>
          <Button asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
