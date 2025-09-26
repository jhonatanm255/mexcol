
'use client';

import Link from 'next/link';
import { GraduationCap, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import logo from '@/assets/Logo-USA-Blanco.png';
import Image from 'next/image';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="border-t bg-[#0A1416] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image className='h-12 w-12' src={logo} alt="Instituto MEXCOL"/>
              <span className="text-xl font-bold">Instituto MEXCOL</span>
            </Link>
            <p className="mt-4 text-white/70 max-w-sm">
              {t.description}
            </p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider">
              {t.quickLinks.title}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary">
                  {t.quickLinks.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary">
                  {t.quickLinks.contact}
                </Link>
              </li>
              <li>
                <Link href="/academic-programs" className="text-white/70 hover:text-primary">
                  {t.quickLinks.programs}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider">
              {t.followUs}
            </h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-primary">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-primary">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-white/70">
          <p>{t.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
          <li>
            <Link href="/terms" className="text-white/70 hover:text-primary hover:underline">
              {t.quickLinks.terms}
            </Link>
          </li>
        </div>
      </div>
    </footer>
  );
}
