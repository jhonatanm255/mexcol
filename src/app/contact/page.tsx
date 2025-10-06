
"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [selectedCountry, setSelectedCountry] = useState<'colombia' | 'mexico' | 'usa'>('usa');

  const offices = {
    colombia: [
      { city: 'Bogotá - oficinas administrativas', address: 'Carrera 4 este # 14-04 Segundo piso Sector la Esmeralda Tocancipá-cundinamarca', phone: '+57 1 234 5678', email: 'contacto@ejemplo.co' },
    ],
    mexico: [
      { city: 'Ciudad de México', address: 'Av. Uno #18 Colonia San Pedro de los Pinos Delegación Benito Juárez Código Postal 03800', phone: '+52 55 1234 5678', email: 'contacto@ejemplo.mx' },
    ],
    usa: [
      { city: 'Los Ángeles (Ejemplo)', address: '123 Sunset Blvd', phone: '+1 213 555 0100', email: 'contact@example.us' },
      { city: 'Orlando (Ejemplo)', address: '456 Orange Ave', phone: '+1 407 555 0111', email: 'contact@example.us' },
      { city: 'Houston (Ejemplo)', address: '789 Texas St', phone: '+1 713 555 0122', email: 'contact@example.us' },
    ],
  } as const;

  const social = t.followUs.links;

  return (
    <div className="container mx-auto px-4 py-10">
      <section className="mb-10">
        <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
          <Image
            src="https://picsum.photos/1400/400?random=30"
            alt="Contact hero"
            width={1400}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-headline text-white text-3xl md:text-4xl font-bold tracking-tight">{t.heroTitle}</h1>
            <p className="mt-3 max-w-3xl text-white/90">{t.subtitle}</p>
          </div>
        </div>
      </section>

      <section>
        <Tabs
          value={selectedCountry}
          onValueChange={(v) => setSelectedCountry(v as 'colombia' | 'mexico' | 'usa')}
          className="w-full"
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="usa">{t.countries.usa}</TabsTrigger>
              <TabsTrigger value="mexico">{t.countries.mexico}</TabsTrigger>
              <TabsTrigger value="colombia">{t.countries.colombia}</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <ContactForm />
        </div>
        <div className="w-full space-y-6">
          <div className="flex flex-col gap-4">
            {offices[selectedCountry].map((o) => (
              <Card key={`${selectedCountry}-${o.city}`} className="w-full">
                <CardHeader>
                  <CardTitle className="font-headline text-foreground font-semibold">{o.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-primary mt-1" /><span>{o.address}</span></div>
                  <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /><span>{o.phone}</span></div>
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /><span>{o.email}</span></div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <div>
            <h3 className="font-headline text-xl font-semibold">{t.followUs.title}</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <a href="https://www.facebook.com/profile.php?id=100064823553168#" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Facebook className="h-4 w-4" />{t.followUs.facebook}</a>
              <a href="https://www.instagram.com/institutomexcolusa/?fbclid=IwY2xjawM32tFleHRuA2FlbQIxMABicmlkETFDRHc2QlJ4c3ptQkJhZk95AR5puV-240pMhD4PNqhO7EDPZiERJ12obf7HJKjV4bpYE4zyVPenQ2AOgKdlLg_aem_HG-fv_s3k4lfx73ByZ8H1Q#"	 target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Instagram className="h-4 w-4" />{t.followUs.instagram}</a>
              <a href="https://www.tiktok.com/@instituto.mex_col_usa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Music2 className="h-4 w-4" />{t.followUs.tiktok}</a>
              <a href="https://www.youtube.com/@institutomexcol9788/featured" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline"><Youtube className="h-4 w-4" />{t.followUs.youtube}</a>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
