
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

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;
  
  const navLinks = t.navLinks;
  const academicPrograms = t.academicPrograms;
  const firstTwoLinks = navLinks.slice(0, 2);
  const remainingLinks = navLinks.slice(2);
  const staffLink = { href: '/staff', label: language === 'es' ? 'Staff' : 'Staff' };

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
            <span className="font-bold">Instituto MEXCOL</span>
          </PrefetchLink>
          <NavigationMenu>
            <NavigationMenuList>
              {firstTwoLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === link.href}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/academic-programs">
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={pathname === '/academic-programs'}
                  >
                    {t.academicProgramsTitle}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {[...remainingLinks, staffLink].map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === link.href}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
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
              <SheetContent side="left">
                <PrefetchLink
                  href="/"
                  className="flex items-center"
                  onClick={() => setOpen(false)}
                >
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="ml-2 font-bold">Instituto MEXCOL</span>
                </PrefetchLink>
                <div className="mt-6 flex flex-col space-y-2">
                  {firstTwoLinks.map((item) => (
                    <PrefetchLink
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-md p-2 text-sm font-medium hover:bg-accent',
                        pathname === item.href ? 'bg-accent' : ''
                      )}
                    >
                      {item.label}
                    </PrefetchLink>
                  ))}
                  <PrefetchLink
                    href="/academic-programs"
                    onClick={() => setOpen(false)}
                    className={cn(
                      'rounded-md p-2 text-sm font-medium hover:bg-accent',
                      pathname === '/academic-programs' ? 'bg-accent' : ''
                    )}
                  >
                    {t.academicProgramsTitle}
                  </PrefetchLink>
                  {[...remainingLinks, staffLink].map((item) => (
                    <PrefetchLink
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-md p-2 text-sm font-medium hover:bg-accent',
                        pathname === item.href ? 'bg-accent' : ''
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
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('es')}>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
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
