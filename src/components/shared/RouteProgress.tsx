'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

export default function RouteProgress() {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = React.useState(false);
  const animationRef = React.useRef<number | null>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // When pathname changes, finish the bar
    setProgress(100);
    const finish = window.setTimeout(() => {
      setIsAnimating(false);
      setProgress(0);
    }, 300);
    return () => window.clearTimeout(finish);
  }, [pathname]);

  React.useEffect(() => {
    if (!isAnimating) return;

    const step = () => {
      setProgress((p) => {
        const next = p + Math.max(0.5, (100 - p) * 0.015);
        return Math.min(next, 95);
      });
      animationRef.current = window.requestAnimationFrame(step);
    };
    animationRef.current = window.requestAnimationFrame(step);
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating]);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest('a');
      if (link && link.href && link.origin === window.location.origin) {
        setIsAnimating(true);
        setProgress(8);
      }
    };
    window.addEventListener('click', handleClick, { capture: true });
    return () => window.removeEventListener('click', handleClick, { capture: true } as any);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 2,
        width: `${progress}%`,
        backgroundColor: 'hsl(var(--primary))',
        zIndex: 9999,
        boxShadow: progress > 0 ? '0 0 10px hsla(var(--primary), 0.5)' : 'none',
        transition: 'width 120ms linear',
      }}
    />
  );
}



