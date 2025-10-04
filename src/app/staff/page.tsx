"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";

type Lang = "es" | "en";

type Person = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

export default function StaffPage() {
  const { language } = useLanguage();
  const lang: Lang = language === "es" ? "es" : "en";

  const heroTitle: Record<Lang, string> = {
    es: "Directores y Staff Médico",
    en: "Directors and Medical Staff",
  };

  const teamIntro: Record<Lang, string> = {
    es: "Nuestro equipo de directores y especialistas médicos es el pilar de nuestra institución. Contamos con médicos estéticos, cirujanos plásticos, ingenieros biomédicos, todos líderes en investigación y práctica estética. Su experiencia garantiza la calidad de cada programa y permite transmitir las últimas actualizaciones en técnicas médicas y de belleza.",
    en: "Our team of directors and medical specialists is the backbone of our institute. We have aesthetic doctors, plastic surgeons, and biomedical engineers—all leaders in research and aesthetic practice. Their expertise ensures the quality of each program and allows us to deliver the latest updates in medical and beauty techniques.",
  };

  const directorGeneral: Record<Lang, Person> = {
    es: {
      name: "Jenny Aragon",
      role: "Directora General",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      bio:
        "Administradora de Empresas especializada en Administración de la Salud. Directora General del Instituto Mex-Col-USA durante 14 años, con sólida experiencia en la gestión de clínicas de medicina estética y actualmente en la educación en medicina estética. Reconocida con el premio Orgullo Latino (Latin Chamber, Cámara de Comercio del Golfo de Florida, 2022) y recientemente galardonada con el primer lugar en Administración de Soporte Técnico en Medicina Estética por la Alianza Americana de Educación USA (2024–2025). Como Directora General, lidera la operación y coordinación de las sedes en México, Colombia y Estados Unidos, asegurando excelencia en la gestión administrativa y en la atención al cliente. Anteriormente, se desempeñó como reina de belleza y presentadora, lo que complementa su visión estratégica y habilidades de comunicación.",
    },
    en: {
      name: "Jenny Aragon",
      role: "General Director",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      bio:
        "Business Administrator specialized in Healthcare Management. General Director of INSTITUTO MEX - COL - USA for 14 years, with extensive experience managing aesthetic medicine clinics and currently leading education in aesthetic medicine. Recognized with the Latin Pride Award (Latin Chamber of Commerce, Gulf of Florida, 2022) and recently awarded first place in Technical Support Administration in Aesthetic Medicine by the American Education Alliance USA (2024–2025). As General Director, she oversees operations and coordination across Mexico, Colombia, and the United States, ensuring excellence in administrative management and client care. Previously a beauty queen and TV host, complementing her strategic vision and communication skills.",
    },
  };

  const medicalDirector: Record<Lang, Person> = {
    es: {
      name: "Dr. Carlos Alberto Ramos Corena",
      role: "Director Médico",
      photo: "https://images.unsplash.com/photo-1604881987921-cb9d3407c069?q=80&w=1200&auto=format&fit=crop",
      bio:
        "Médico cirujano de la Universidad Metropolitana de Barranquilla, Colombia. Especialista en cirugía plástica y estética por el Centro Universitario Redentor de Brasil. Reconocido internacionalmente en Europa, Norteamérica y Latinoamérica, conocido como ‘El cirujano de las Barbies’. Director Médico sede México en Instituto Mex-Col-USA Profesionales en Medicina Estética, Belleza y Holística.",
    },
    en: {
      name: "Dr. Carlos Alberto Ramos Corena",
      role: "Medical Director",
      photo: "https://images.unsplash.com/photo-1604881987921-cb9d3407c069?q=80&w=1200&auto=format&fit=crop",
      bio:
        "Surgeon graduated from Universidad Metropolitana de Barranquilla, Colombia. Specialized in Plastic and Aesthetic Surgery at Centro Universitario Redentor, Brazil. Recognized internationally across Europe, North America, and Latin America, known as ‘The Barbie Surgeon’. Medical Director at the Mexico branch of Instituto Mex-Col-USA.",
    },
  };

  const speakers: Record<Lang, Person[]> = {
    es: [
      {
        name: "Dr. Aldo Rubén Rendón Gutiérrez",
        role: "Médico Cirujano · Estética y Longevidad",
        photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Médico cirujano UNAM. Especialista en Estética y Longevidad (IESM). Director en Laser & Body Clinic (Querétaro). Speaker nacional para Allergan Medical Institute y Allergan Aesthetics. Docente en Instituto Mexcol (CDMX). Miembro del consenso mexicano para manejo de eventos adversos.",
      },
      {
        name: "Dra. Carolina Carvajal",
        role: "Médico Cirujano · Estética Facial",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Médico cirujano de la Universidad Central del Valle. Especialidad en estética del rostro de la Universidad Complutense (Madrid, España). Enfocada en atención integral, prevención y control de efectos adversos en procedimientos estéticos no quirúrgicos. Más de 6 años de experiencia junto a líderes en Colombia.",
      },
      {
        name: "Dr. Martín A. Bravo González",
        role: "Médico Cirujano · Inmunogenética y Biología Molecular",
        photo: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Experiencia en medicina interna y crítica. Maestría en Inmunogenética y Biología Molecular. Profesor invitado en Universidad Del Conde (desde 2020). Investigador clínico con 21 publicaciones y 3 premios. Ponente internacional con más de 450 cursos y ~600 charlas. 33 años en industria farmacéutica (Director médico en 13 laboratorios). Certificado en Medicina Regenerativa y Células Madre (ISSCA).",
      },
      {
        name: "Dr. Jorge Juan Herrera",
        role: "Médico Cirujano · Cirugía Estética y Docencia",
        photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
        bio:
          "UNAM. Especialidad en Medicina y Cirugía Estética (Universidad de Montpellier, Francia). Maestría IESM. Doctorado en Ciencias Biomédicas (UNAM). Doctorados Honoris Causa (México – UNAM, y CNHD Francia). Colaborador en protocolos clínicos (Hospital Shriners). Docente en La Salle, Anáhuac y UNAM. Speaker en Allergan Aesthetics.",
      },
      {
        name: "Dr. Gener Alejandro Fajardo Ruiz",
        role: "Médico Cirujano · Medicina Estética y Cirugía Plástica",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Médico cirujano de la Universidad Nacional de Colombia. Maestría en Medicina Estética (Universidad de las Islas Baleares, España). Especialidad en Cirugía Plástica, Estética y Reconstructiva (Universidade de Almeida, Brasil). Práctica clínica activa. Jurado Miss Colombia 2021.",
      },
    ],
    en: [
      {
        name: "Dr. Aldo Rubén Rendón Gutiérrez",
        role: "Surgeon · Aesthetics and Longevity",
        photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Surgeon (UNAM). Specialist in Aesthetics and Longevity (IESM). Director at Laser & Body Clinic (Querétaro). National speaker for Allergan Medical Institute and Allergan Aesthetics. Lecturer at Instituto MexCol (Mexico City). Member of the Mexican Consensus for Adverse Event Management.",
      },
      {
        name: "Dr. Carolina Carvajal",
        role: "Surgeon · Facial Aesthetics",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Surgeon graduated from Universidad Central del Valle. Specialized in facial aesthetics at Universidad Complutense (Madrid, Spain). Focused on comprehensive patient care, prevention, and management of adverse effects from non-surgical aesthetic procedures. Over 6 years of experience alongside top plastic surgeons in Colombia.",
      },
      {
        name: "Dr. Martín A. Bravo González",
        role: "Surgeon · Immunogenetics & Molecular Biology",
        photo: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Experience in internal and critical care medicine. Master’s in Immunogenetics and Molecular Biology. Guest lecturer at Universidad Del Conde (since 2020). Clinical researcher with 21 publications and 3 awards. International speaker with 450+ courses and ~600 talks. 33 years in the pharmaceutical industry (Medical Director at 13 labs). Certified in Regenerative Medicine & Stem Cells (ISSCA).",
      },
      {
        name: "Dr. Jorge Juan Herrera",
        role: "Surgeon · Aesthetic Surgery & Teaching",
        photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
        bio:
          "UNAM. Specialty in Aesthetic Medicine and Surgery (Université de Montpellier, France). Master’s (IESM). PhD in Biomedical Sciences (UNAM). Honorary Doctorates (Mexico – UNAM National Faculty, and CNHD France). Collaborator on clinical protocols (Shriners Hospital). Lecturer at La Salle, Anáhuac, and UNAM. Speaker at Allergan Aesthetics.",
      },
      {
        name: "Dr. Gener Alejandro Fajardo Ruiz",
        role: "Surgeon · Aesthetic Medicine & Plastic Surgery",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Surgeon graduated from Universidad Nacional de Colombia. Master’s in Aesthetic Medicine (Universidad de las Islas Baleares, Spain). Specialized in Plastic, Aesthetic, and Reconstructive Surgery (Universidade de Almeida, Brazil). Active clinical practice. Judge at Miss Colombia 2021.",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero */}
      <section className="mb-10">
        <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Staff hero"
            width={1600}
            height={640}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="font-headline text-white text-3xl md:text-4xl font-bold tracking-tight text-center px-4">
              {heroTitle[lang]}
            </h1>
          </div>
        </div>
      </section>

      {/* Introducción del equipo */}
      <section className="mb-12 text-center">
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          {teamIntro[lang]}
        </p>
      </section>

      {/* Destacados */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {[directorGeneral[lang], medicalDirector[lang]].map((p) => (
          <Card key={p.name} className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="relative h-56 sm:h-full sm:col-span-1">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="sm:col-span-2">
                <CardHeader>
                  <CardTitle className="font-headline">
                    {p.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* Especialistas Médicos */}
      <section>
        <h2 className="font-headline text-2xl font-semibold mb-6">
          {lang === "es" ? "Especialistas Médicos" : "Medical Specialists"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers[lang].map((s) => (
            <Card key={s.name} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={s.photo}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-lg">{s.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{s.role}</p>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{s.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}


