
'use client';

import * as React from 'react';
import Link from 'next/link';
import PrefetchLink from '@/components/shared/PrefetchLink';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  Menu,
  Globe,
  UserCog,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  navigationMenuLinkStyle,
  navigationMenuContainerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/hooks/use-auth';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import logo from '@/assets/Logo-USA-Verde.png';
import Image from 'next/image';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href || ''}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

// Componente para el underline deslizante
function SlidingUnderline({ 
  activeIndex, 
  hoverIndex, 
  containerRef 
}: { 
  activeIndex: number; 
  hoverIndex: number | null;
  containerRef: React.RefObject<HTMLDivElement> 
}) {
  const [activeUnderlineStyle, setActiveUnderlineStyle] = React.useState<React.CSSProperties>({});
  const [hoverUnderlineStyle, setHoverUnderlineStyle] = React.useState<React.CSSProperties>({});

  React.useEffect(() => {
    if (containerRef.current && activeIndex >= 0) {
      const container = containerRef.current;
      const items = container.querySelectorAll('[data-nav-item]');
      const activeItem = items[activeIndex] as HTMLElement;
      
      if (activeItem) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        
        setActiveUnderlineStyle({
          left: itemRect.left - containerRect.left,
          width: itemRect.width,
          transition: 'all 0.3s ease-out'
        });
      }
    }
  }, [activeIndex, containerRef]);

  React.useEffect(() => {
    if (containerRef.current && hoverIndex !== null && hoverIndex >= 0) {
      const container = containerRef.current;
      const items = container.querySelectorAll('[data-nav-item]');
      const hoverItem = items[hoverIndex] as HTMLElement;
      
      if (hoverItem) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = hoverItem.getBoundingClientRect();
        
        setHoverUnderlineStyle({
          left: itemRect.left - containerRect.left,
          width: itemRect.width,
          transition: 'all 0.2s ease-out'
        });
      }
    } else {
      setHoverUnderlineStyle({ opacity: 0 });
    }
  }, [hoverIndex, containerRef]);

  return (
    <>
      {/* Underline activo */}
      {activeIndex >= 0 && (
        <div
          className="absolute bottom-0 h-1 bg-primary rounded-full"
          style={activeUnderlineStyle}
        />
      )}
      {/* Underline hover */}
      <div
        className="absolute bottom-0 h-1 bg-primary/40 rounded-full"
        style={hoverUnderlineStyle}
      />
    </>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;
  const navContainerRef = React.useRef<HTMLDivElement>(null);
  
  const navLinks = t.navLinks;
  const academicPrograms = t.academicPrograms;
  const firstTwoLinks = navLinks.slice(0, 2);
  const remainingLinks = navLinks.slice(2);

  // Crear array de todos los enlaces para el underline (sin staff)
  const allNavLinks = [
    ...firstTwoLinks,
    { href: '/academic-programs', label: t.academicProgramsTitle },
    ...remainingLinks
  ];

  // Encontrar el índice del enlace activo
  const activeIndex = allNavLinks.findIndex(link => pathname === link.href);

  const handleLanguageChange = (lang: 'en' | 'es') => {
    setLanguage(lang);
  };
  
  const isAdminPage = pathname.startsWith('/admin');

  if (loading) {
    return (
       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center"></div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <PrefetchLink href="/" className="mr-6 flex items-center space-x-2">
            <Image className='h-12 w-12' src={logo} alt="Instituto MEXCOL"/>
{/*             <span className="font-bold">Instituto MEXCOL</span>
 */}          </PrefetchLink>
          <NavigationMenu>
            <div ref={navContainerRef} className={cn(navigationMenuContainerStyle(), "relative")}>
              <NavigationMenuList>
                {allNavLinks.map((link, index) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={navigationMenuLinkStyle()}
                        data-active={pathname === link.href}
                        data-nav-item
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <SlidingUnderline 
                activeIndex={activeIndex} 
                hoverIndex={hoverIndex}
                containerRef={navContainerRef} 
              />
            </div>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-gradient-to-b from-background to-muted/30">
                <PrefetchLink
                  href="/"
                  className="flex items-center"
                  onClick={() => setOpen(false)}
                >
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="ml-2 font-bold text-foreground">Instituto MEXCOL</span>
                </PrefetchLink>
                <div className="mt-6 flex flex-col space-y-2">
                  {firstTwoLinks.map((item) => (
                    <PrefetchLink
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-lg p-3 text-sm font-medium transition-colors duration-200',
                        'hover:bg-primary/10 hover:text-primary',
                        pathname === item.href ? 'bg-primary/15 text-primary font-semibold' : 'text-foreground'
                      )}
                    >
                      {item.label}
                    </PrefetchLink>
                  ))}
                  <PrefetchLink
                    href="/academic-programs"
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-lg p-3 text-sm font-medium transition-colors duration-200',
                      'hover:bg-primary/10 hover:text-primary',
                      pathname === '/academic-programs' ? 'bg-primary/15 text-primary font-semibold' : 'text-foreground'
                    )}
                  >
                    {t.academicProgramsTitle}
                  </PrefetchLink>
                  {remainingLinks.map((item) => (
                    <PrefetchLink
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-lg p-3 text-sm font-medium transition-colors duration-200',
                        'hover:bg-primary/10 hover:text-primary',
                        pathname === item.href ? 'bg-primary/15 text-primary font-semibold' : 'text-foreground'
                      )}
                    >
                      {item.label}
                    </PrefetchLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <PrefetchLink href="/" className="flex items-center space-x-2 md:hidden">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold">Instituto MEXCOL</span>
          </PrefetchLink>

          <nav className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <span className="text-lg">{language === 'es' ? '🇪🇸' : '🇺🇸'}</span>
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border border-border/50 shadow-lg">
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('es')}
                  className="hover:bg-primary/5 focus:bg-primary/5"
                >
                  <span className="mr-2">🇪🇸</span>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('en')}
                  className="hover:bg-primary/5 focus:bg-primary/5"
                >
                  <span className="mr-2">🇺🇸</span>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {user && isAdminPage && (
              <Button asChild variant="outline" size="sm">
                <PrefetchLink href="/admin/dashboard">
                  <UserCog className="mr-2 h-4 w-4" />
                  Admin Panel
                </PrefetchLink>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
