
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
      { 
        city: language === 'es' ? 'Bogotá - oficinas administrativas' : 'Bogotá - Administrative Offices', 
        address: 'Carrera 4 este # 14-04 Segundo piso Sector la Esmeralda Tocancipá-cundinamarca', 
        phone: '-', 
        email: 'gerencia@institutomexcol.com' 
      },
    ],
    mexico: [
      { 
        city: language === 'es' ? 'Ciudad de México' : 'Mexico City', 
        address: 'Av. Uno #18 Colonia San Pedro de los Pinos Delegación Benito Juárez Código Postal 03800', 
        phone: '+52 55 6630 8602 - +52 55 2593 6885', 
        email: 'gerencia@institutomexcol.com' 
      },
    ],
    usa: [
      { 
        city: language === 'es' ? 'Presencia' : 'Presence', 
        address: language === 'es' ? 'En Los Angeles y Miami' : 'In Los Angeles and Miami', 
        phone: '+1 (407) 454-0524', 
        email: 'gerencia@institutomexcol.com' 
      },
      { 
        city: language === 'es' ? 'Orlando - Oficinas administrativas' : 'Orlando - Administrative Offices', 
        address: '2180 Central Florida Parkway. Suite A2. Orlando FL 32837', 
        phone: '+1 (407) 454-0524', 
        email: 'gerencia@institutomexcol.com' 
      },
      { 
        city: language === 'es' ? 'Houston - Sede' : 'Houston - Headquarters', 
        address: '2307 S Texas 6, Houston, TX 77077', 
        phone: '+1 (407) 454-0524', 
        email: 'gerencia@institutomexcol.com' 
      },
    ],
  } as const;

  const social = t.followUs.links;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden mb-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&auto=format&fit=crop"
            alt="Contact hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-10">

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
    </div>
  );
}
