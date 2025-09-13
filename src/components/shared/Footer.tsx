
import Link from 'next/link';
import { GraduationCap, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Instituto MEXCOL</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Empowering students worldwide with accessible, high-quality online
              education.
            </p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/academic-programs" className="text-muted-foreground hover:text-primary">
                  Programs
                </Link>
              </li>
               <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-foreground">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Instituto MEXCOL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
