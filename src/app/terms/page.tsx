
'use client';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function TermsPage() {
  const { language } = useLanguage();
  const t = translations[language].terms;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-sm text-muted-foreground">{t.lastUpdated}</p>
        </div>
        
        <div className="space-y-8 prose prose-lg max-w-none">
          {/* Course Scheduling */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.courseScheduling.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.courseScheduling.content}</p>
          </section>

          {/* Course Fees */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.courseFees.title}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.courseFees.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.courseFees.p2}</p>
              <p className="text-muted-foreground leading-relaxed">{t.courseFees.p3}</p>
              <p className="text-muted-foreground leading-relaxed">{t.courseFees.p4}</p>
              <p className="text-muted-foreground leading-relaxed">{t.courseFees.p5}</p>
            </div>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.refundPolicy.title}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.refundPolicy.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.refundPolicy.p2}</p>
              <p className="text-muted-foreground leading-relaxed">{t.refundPolicy.p3}</p>
            </div>
          </section>

          {/* Gifts */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.gifts.title}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.gifts.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.gifts.p2}</p>
              <p className="text-muted-foreground leading-relaxed">{t.gifts.p3}</p>
              <p className="text-muted-foreground leading-relaxed">{t.gifts.p4}</p>
              <p className="text-muted-foreground leading-relaxed">{t.gifts.p5}</p>
            </div>
          </section>

          {/* Certificates */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.certificates.title}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.certificates.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.certificates.p2}</p>
            </div>
          </section>

          {/* Support Material */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.supportMaterial.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.supportMaterial.content}</p>
          </section>

          {/* Products, Laboratories & Professional Responsibility */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.productsLaboratories.title}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.productsLaboratories.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.productsLaboratories.p2}</p>
              <p className="text-muted-foreground leading-relaxed">{t.productsLaboratories.p3}</p>
              <p className="text-muted-foreground leading-relaxed">{t.productsLaboratories.p4}</p>
            </div>
          </section>

          {/* Electronic Acceptance */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.electronicAcceptance.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.electronicAcceptance.content}</p>
          </section>

          {/* Jurisdiction */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.jurisdiction.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.jurisdiction.content}</p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.modifications.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.modifications.content}</p>
          </section>

          {/* Acceptance */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.acceptance.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.acceptance.content}</p>
          </section>

          <hr className="my-8 border-border" />

          {/* Company Name */}
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">{t.companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
