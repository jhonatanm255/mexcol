'use client';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = translations[language].privacy;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-sm text-muted-foreground">{t.lastUpdated}</p>
        </div>
        
        <div className="space-y-8 prose prose-lg max-w-none">
          {/* Introduction */}
          <section>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.introduction}</p>
          </section>

          {/* Responsible Party */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.responsible.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.responsible.content}</p>
          </section>

          {/* Purposes */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.purposes.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.purposes.content}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {t.purposes.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.dataCollection.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.dataCollection.information}</p>
            
            {/* Direct Personal Data */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">{t.dataCollection.directPersonal.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">{t.dataCollection.directPersonal.content}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {t.dataCollection.directPersonal.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Direct Financial Data */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">{t.dataCollection.directFinancial.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">{t.dataCollection.directFinancial.content}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {t.dataCollection.directFinancial.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Online Data */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">{t.dataCollection.onlineData.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">{t.dataCollection.onlineData.personal}</p>
              <p className="text-muted-foreground leading-relaxed">{t.dataCollection.onlineData.financial}</p>
            </div>

            {/* Sensitive Data */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">{t.dataCollection.sensitiveData.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">{t.dataCollection.sensitiveData.content}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {t.dataCollection.sensitiveData.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Video Recording */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">{t.dataCollection.videoRecording.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.dataCollection.videoRecording.content}</p>
            </div>
          </section>

          {/* Consent */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.consent.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.consent.content}</p>
          </section>

          {/* Data Limitation */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.dataLimitation.title}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.dataLimitation.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.dataLimitation.p2}</p>
              <p className="text-muted-foreground leading-relaxed">{t.dataLimitation.p3}</p>
              <p className="text-muted-foreground leading-relaxed">{t.dataLimitation.p4}</p>
            </div>
          </section>

          {/* ARCO Rights */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.arcoRights.title}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.arcoRights.p1}</p>
              <p className="text-muted-foreground leading-relaxed mb-3">{t.arcoRights.p2}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                {t.arcoRights.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">{t.arcoRights.p3}</p>
              <p className="text-muted-foreground leading-relaxed">{t.arcoRights.p4}</p>
            </div>
          </section>

          {/* Data Transfer */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.dataTransfer.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.dataTransfer.content}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {t.dataTransfer.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-xl font-semibold mb-4">{t.modifications.title}</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{t.modifications.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.modifications.p2}</p>
              <p className="text-muted-foreground leading-relaxed font-medium">{t.modifications.p3}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
