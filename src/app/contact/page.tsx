import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Contacto (Contact Us)
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We're here to help. Reach out to us with any questions or inquiries.
        </p>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="font-headline text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">support@eduvoucher.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">123 Education Lane, Learning City, 45678</span>
            </div>
          </div>
          <div className="relative h-64 w-full rounded-lg overflow-hidden border">
             <Image
                src="https://picsum.photos/800/400"
                data-ai-hint="world map"
                alt="Map showing our location"
                layout="fill"
                objectFit="cover"
              />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
