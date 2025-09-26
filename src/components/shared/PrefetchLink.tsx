'use client';

import * as React from 'react';
import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

type PrefetchLinkProps = React.PropsWithChildren<
  LinkProps & {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  }
>;

export default function PrefetchLink(props: PrefetchLinkProps) {
  const router = useRouter();
  const { children, onMouseEnter, onClick, href, ...rest } = props;

  const prefetchHref = React.useCallback(() => {
    const url = typeof href === 'string' ? href : href.toString();
    // Avoid prefetching same route
    if (url && typeof window !== 'undefined' && url !== window.location.pathname) {
      try {
        router.prefetch(url);
      } catch {}
    }
  }, [href, router]);

  const handleMouseEnter: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    prefetchHref();
    onMouseEnter?.(e);
  };

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    prefetchHref();
    onClick?.(e);
  };

  return (
    <Link href={href} prefetch {...rest} onMouseEnter={handleMouseEnter} onClick={handleClick}>
      {children}
    </Link>
  );
}


