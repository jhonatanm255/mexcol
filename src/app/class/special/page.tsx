
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getCouponVideo } from '@/lib/actions/coupon.actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

function VideoPlayer({ videoUrl, videoType }: { videoUrl: string; videoType: 'upload' | 'youtube' }) {
    const { language } = useLanguage();
    const t = translations[language].specialClass.error;
    
    if (videoType === 'youtube') {
        const videoId = videoUrl.includes('youtu.be') 
          ? videoUrl.split('/').pop()?.split('?')[0]
          : new URL(videoUrl).searchParams.get('v');

        if (!videoId) {
            return <p className="text-destructive">{t.invalidUrl}</p>;
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
  const { language } = useLanguage();
  const t = translations[language].specialClass;
  const couponCode = searchParams.get('code');
  const [videoInfo, setVideoInfo] = useState<{ videoUrl: string | null; videoType: 'upload' | 'youtube' | null; error?: Awaited<ReturnType<typeof getCouponVideo>>['error'] } | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (couponCode) {
      getCouponVideo(couponCode).then(info => {
        setVideoInfo(info);
        setLoading(false);
      });
    } else {
        setVideoInfo({ videoUrl: null, videoType: null, error: 'no-code' });
        setLoading(false);
    }
  }, [couponCode]);

  const getErrorMessage = () => {
    if (!videoInfo?.error) return null;
    switch (videoInfo.error) {
        case 'no-code': return t.error.noCode;
        case 'not-found': return t.error.notFound;
        case 'failed': return t.error.failed;
        case 'invalid-url': return t.error.invalidUrl;
        default: return translations[language].coupon.errors.unexpected;
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="max-w-4xl w-full text-center">
        <CardHeader className="items-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="font-headline text-3xl">{t.title}</CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            {t.subtitle}
          </p>

          {loading && (
            <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className='ml-2'>{t.loading}</p>
            </div>
          )}

          {!loading && videoInfo?.videoUrl && videoInfo.videoType && (
            <div className="mb-6 w-full">
                <VideoPlayer videoUrl={videoInfo.videoUrl} videoType={videoInfo.videoType} />
            </div>
          )}

          {!loading && videoInfo?.error && (
             <Alert variant="destructive" className="mb-6">
                <AlertTitle>{t.error.title}</AlertTitle>
                <AlertDescription>{getErrorMessage()}</AlertDescription>
             </Alert>
          )}

          <Button asChild>
            <Link href="/">{t.goToHomepage}</Link>
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
