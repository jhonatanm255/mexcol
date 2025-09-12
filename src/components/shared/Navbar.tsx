
'use client';

import * as React from 'react';
import Link from 'next/link';
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
  const { user } = useAuth();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;
  
  const navLinks = t.navLinks;
  const academicPrograms = t.academicPrograms;

  const handleLanguageChange = (lang: 'en' | 'es') => {
    setLanguage(lang);
  };
  
  const isAdminPage = pathname.startsWith('/admin/dashboard');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold">EduVoucher</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} passHref legacyBehavior>
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
                <NavigationMenuTrigger>
                  {t.academicProgramsTitle}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {academicPrograms.map((program) => (
                      <ListItem
                        key={program.title}
                        title={program.title}
                        href={program.href}
                      >
                        {program.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
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
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setOpen(false)}
                >
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="ml-2 font-bold">EduVoucher</span>
                </Link>
                <div className="mt-6 flex flex-col space-y-2">
                  {navLinks.map((item) => (
                     <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-md p-2 text-sm font-medium hover:bg-accent',
                        pathname === item.href ? 'bg-accent' : ''
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                   <div className="pt-2">
                    <h3 className="px-2 text-xs font-semibold text-muted-foreground">{t.academicProgramsTitle}</h3>
                     {academicPrograms.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'block rounded-md p-2 text-sm font-medium hover:bg-accent',
                            pathname === item.href ? 'bg-accent' : ''
                          )}
                        >
                           {item.title}
                        </Link>
                      ))}
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link href="/" className="flex items-center space-x-2 md:hidden">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold">EduVoucher</span>
          </Link>

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

            {isAdminPage && (
              <Button asChild variant="ghost" size="icon">
                <Link href="/admin/dashboard">
                  <UserCog className="h-5 w-5 text-primary" />
                  <span className="sr-only">Admin Panel</span>
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
