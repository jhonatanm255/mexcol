'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getCouponVideo } from '@/lib/actions/coupon.actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

function VideoPlayer({ videoUrl, videoType }: { videoUrl: string; videoType: 'upload' | 'youtube' }) {
    if (videoType === 'youtube') {
        const videoId = videoUrl.includes('youtu.be') 
          ? videoUrl.split('/').pop()?.split('?')[0]
          : new URL(videoUrl).searchParams.get('v');

        if (!videoId) {
            return <p className="text-destructive">Invalid YouTube URL</p>;
        }

        return (
            <div className="w-full aspect-video">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
    
    if (videoType === 'upload') {
        return (
            <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                <video controls src={videoUrl} className="w-full h-full rounded-lg">
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }

    return null;
}

function SpecialClassContent() {
  const searchParams = useSearchParams();
  const couponCode = searchParams.get('code');
  const [videoInfo, setVideoInfo] = useState<{ videoUrl: string | null; videoType: 'upload' | 'youtube' | null; error?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (couponCode) {
      getCouponVideo(couponCode).then(info => {
        setVideoInfo(info);
        setLoading(false);
      });
    } else {
        setVideoInfo({ videoUrl: null, videoType: null, error: 'No coupon code provided.' });
        setLoading(false);
    }
  }, [couponCode]);

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="max-w-4xl w-full text-center">
        <CardHeader className="items-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="font-headline text-3xl">Access Granted!</CardTitle>
          <CardDescription>Your coupon is valid. Welcome to the special class.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            You have successfully unlocked exclusive content. You can now access the video lecture for this special session.
          </p>

          {loading && (
            <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {!loading && videoInfo?.videoUrl && videoInfo.videoType && (
            <div className="mb-6 w-full">
                <VideoPlayer videoUrl={videoInfo.videoUrl} videoType={videoInfo.videoType} />
            </div>
          )}

          {!loading && videoInfo?.error && (
             <Alert variant="destructive" className="mb-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{videoInfo.error}</AlertDescription>
             </Alert>
          )}

          <Button asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SpecialClassPage() {
    return (
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>}>
            <SpecialClassContent />
        </Suspense>
    )
}
