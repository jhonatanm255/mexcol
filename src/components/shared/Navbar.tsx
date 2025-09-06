'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  Menu,
  ChevronDown,
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

const academicPrograms: { title: string; href: string; description: string }[] =
  [
    {
      title: 'USA Program',
      href: '/academic-programs/usa',
      description: 'Explore our academic offerings available in the USA.',
    },
    {
      title: 'Mexico Program',
      href: '/academic-programs/mexico',
      description: 'Descubre nuestros programas académicos en México.',
    },
    {
      title: 'Colombia Program',
      href: '/academic-programs/colombia',
      description: 'Explora nuestros programas académicos en Colombia.',
    },
  ];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuth();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/online-training', label: 'Formación en línea' },
    { href: '/congress', label: 'Congreso' },
    { href: '/about', label: 'Conócenos' },
    { href: '/contact', label: 'Contacto' },
  ];

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
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === link.href ? 'bg-accent' : ''
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Programas Académicos
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
                  {[...navLinks, ...academicPrograms].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-md p-2 text-sm font-medium hover:bg-accent',
                        pathname === item.href ? 'bg-accent' : ''
                      )}
                    >
                      {item.label || item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link
            href="/"
            className="flex items-center space-x-2 md:hidden"
          >
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
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild variant="ghost" size="icon">
              <Link href={user ? '/admin/dashboard' : '/admin/login'}>
                <UserCog className="h-5 w-5" />
                <span className="sr-only">Admin Panel</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
