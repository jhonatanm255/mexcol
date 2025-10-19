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

  const heroSubtitle: Record<Lang, string> = {
    es: "Conoce a nuestros líderes",
    en: "Meet our leaders",
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
      bio: "", // Bio is now rendered inline in the component
    },
    en: {
      name: "Jenny Aragon",
      role: "General Director",
      photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      bio: "", // Bio is now rendered inline in the component
    },
  };

  const medicalDirector: Record<Lang, Person> = {
    es: {
      name: "Dr. Carlos Alberto Ramos Corena",
      role: "Director Médico",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
      bio: "", // Bio is now rendered inline in the component
    },
    en: {
      name: "Dr. Carlos Alberto Ramos Corena",
      role: "Medical Director",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
      bio: "", // Bio is now rendered inline in the component
    },
  };

  const speakers: Record<Lang, Person[]> = {
    es: [
      {
        name: "Dr. Aldo Rubén Rendón Gutiérrez",
        role: "Médico Cirujano · Estética y Longevidad",
        photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Médico Cirujano egresado de la Universidad Nacional Autónoma de Mexico UNAM Especialista en Estética y Longevidad egresado del Instituto de Estudios Superiores en Medicina Director en Laser & Body Clinic en la ciudad de Querétaro Speaker nacional para Allergan Medical Institute y Allergan Aesthetics Speaker y docente en Instituto Mexcol de la Ciudad de México Miembro del consenso mexicano para el manejo de eventos adversos",
      },
      {
        name: "Dra. Carolina Carvajal",
        role: "Médico Cirujano · Estética Facial",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Médico Cirujano de la Universidad Central del Valle. Especialidad en estética del rostro de la Universidad COMPLUTENSE en Madrid España. Enfocada en la atención integral del paciente, la realización, prevención y el control de efectos adversos de procedimientos estéticos no quirúrgicos. Actualmente cuenta con más de 6 años de experiencia al lado de los mejores cirujanos plásticos de Colombia en ciudades como Cali, Bogotá y Medellín.",
      },
      {
        name: "Dr. Martín A. Bravo González",
        role: "Médico Cirujano · Inmunogenética y Biología Molecular",
        photo: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Médico Cirujano con experiencia en medicina interna y medicina crítica. Maestría en ciencias e inmunogenética y Biología Molecular. Profesor invitado a Universidad Del Conde desde 2020. Investigador clínico con 12 publicaciones nacionales y 9 internacionales y ganador a 3 premios a la investigación clínica. Ponente internacional, asesor y docente, ha dictado más de 450 cursos de capacitación y al rededor de 600 pláticas científicas en Congresos Internacionales, nacionales y en foros dentro de la comunidad médica. 33 años de experiencia en la industria farmacéutica (Director médico de 13 laboratorios farmacéuticos). Certificación en Medicina Regenerativa y uso de Células Madre por el International Society for Stem Cell Application (ISSCA).",
      },
      {
        name: "Dr. Jorge Juan Herrera",
        role: "Médico Cirujano · Cirugía Estética y Docencia",
        photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Médico Cirujano de la Universidad Autónoma de México UNAM. Especialidad Medicina y cirugía estética Universidad Montpellier, Francia. Maestría Cirugía Estética IESM Doctorado en Ciencias Biomédicas UNAM. Doctorado Honoris Causa Gobierno Federal México – UNAM Claustro Nacional. Doctorado Honoris Causa CNHD Francia. Colaborador de protocolos clínicos de regeneración y revitalización cutáneo del Hospital Shriners Docente en la Universidad la Salle, Anáhuac y Facultad de medicina de la UNAM. Speaker en: Allergan Aesthetics",
      },
      {
        name: "Dr. Gener Alejandro Fajardo Ruiz",
        role: "Médico Cirujano · Medicina Estética y Cirugía Plástica",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Médico cirujano de la Universidad Nacional de Colombia Especialista con maestría en medicina estética por la Universidad de las Islas Baleares-España. Especialidad en cirugía plástica, estética y reconstructiva de la Universidad de Almeida en Río de Janeiro-Brasil. Actualmente desempeña y lleva a cabo la práctica de su profesión. Participó como jurado en el certamen de belleza Miss Colombia 2021.",
      },
    ],
    en: [
      {
        name: "Dr. Aldo Rubén Rendón Gutiérrez",
        role: "Surgeon · Aesthetics and Longevity",
        photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Surgeon graduated from Universidad Nacional Autónoma de México (UNAM). Specialist in Aesthetics and Longevity from Instituto de Estudios Superiores en Medicina. Director at Laser & Body Clinic in Querétaro. National Speaker for Allergan Medical Institute and Allergan Aesthetics. Lecturer at Instituto MexCol in Mexico City. Member of the Mexican Consensus for Adverse Event Management.",
      },
      {
        name: "Dr. Carolina Carvajal",
        role: "Surgeon · Facial Aesthetics",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Surgeon graduated from Universidad Central del Valle. Specialized in facial aesthetics at Universidad Complutense, Madrid, Spain. Focused on comprehensive patient care, prevention, and management of adverse effects from non-surgical aesthetic procedures. Over 6 years of experience alongside top plastic surgeons in Colombia, in cities such as Cali, Bogotá, and Medellín.",
      },
      {
        name: "Dr. Martín A. Bravo González",
        role: "Surgeon · Immunogenetics & Molecular Biology",
        photo: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Surgeon with experience in internal and critical care medicine. Master's in Immunogenetics and Molecular Biology. Guest lecturer at Universidad del Conde since 2020. Clinical researcher with 12 national and 9 international publications, and 3 clinical research awards. International speaker, advisor, and lecturer, delivering over 450 training courses and around 600 scientific talks in international and national congresses and forums within the medical community. 33 years of experience in the pharmaceutical industry (Medical Director of 13 pharmaceutical laboratories). Certified in Regenerative Medicine and Stem Cell Therapy by the International Society for Stem Cell Application (ISSCA).",
      },
      {
        name: "Dr. Jorge Juan Herrera",
        role: "Surgeon · Aesthetic Surgery & Teaching",
        photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Surgeon graduated from Universidad Autónoma de México (UNAM). Specialized in Aesthetic Medicine and Surgery at Université de Montpellier, France. Master's in Aesthetic Surgery, IESM. PhD in Biomedical Sciences, UNAM. Honorary Doctorate, Federal Government of Mexico – UNAM National Faculty. Honorary Doctorate, CNHD France. Collaborator on clinical protocols for skin regeneration and revitalization at Shriners Hospital. Lecturer at Universidad La Salle, Universidad Anáhuac, and the Faculty of Medicine, UNAM. Speaker at Allergan Aesthetics.",
      },
      {
        name: "Dr. Gener Alejandro Fajardo Ruiz",
        role: "Surgeon · Aesthetic Medicine & Plastic Surgery",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
        bio:
          "Surgeon graduated from Universidad Nacional de Colombia. Specialist with a Master's in Aesthetic Medicine from Universidad de las Islas Baleares, Spain. Specialized in Plastic, Aesthetic, and Reconstructive Surgery at Universidade de Almeida, Rio de Janeiro, Brazil. Currently practices and performs professional procedures in his field. Served as a judge in the Miss Colombia 2021 beauty pageant.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      {/* <section className="relative h-[calc(100vh-4rem)] overflow-hidden mb-10"> */}
      <section className="relative py-20 overflow-hidden mb-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Staff hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {heroTitle[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              {heroSubtitle[lang]}
            </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 pb-10">

      {/* Introducción del equipo */}
      <section className="mb-12 text-center">
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          {teamIntro[lang]}
        </p>
      </section>

      {/* Directores */}
      <section className="mb-12">
        <h2 className="font-headline text-2xl font-semibold mb-6">
          {lang === "es" ? "Directores" : "Directors"}
        </h2>
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
        {/* Director General */}
        <div className="w-full lg:max-w-4xl flex">
          <Card className="overflow-hidden w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
              <div className="relative h-56 sm:h-full sm:col-span-1">
                <Image
                  src={directorGeneral[lang].photo}
                  alt={directorGeneral[lang].name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">
                    {directorGeneral[lang].name}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full inline-block w-fit">{directorGeneral[lang].role}</span>
                </CardHeader>
                <CardContent className="pt-0 pb-6 flex-1">
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    <span className="font-semibold text-teal-700 block mb-3">
                      {lang === "es" 
                        ? "Administradora de Empresas especializada en Administración de la Salud"
                        : "Business Administrator specialized in Healthcare Management"
                      }
                    </span>
                    <span className="text-muted-foreground">
                      {lang === "es"
                        ? "Directora General del Instituto Mex-Col-Usa durante 14 años, con sólida experiencia en la gestión de clínicas de medicina estética y actualmente en la educación en medicina estética. Reconocida por su trayectoria con el premio Orgullo Latino (Latin Chamber, Cámara de Comercio del Golfo de Florida, 2022) y recientemente galardonada con el primer lugar en Administración de Soporte Técnico en Medicina Estética por la Alianza Americana de Educación USA (2024–2025).\n\nComo directora General, lidera la operación y coordinación de las sedes en México, Colombia y Estados Unidos, asegurando excelencia en la gestión administrativa y en la atención al cliente. Anteriormente, se desempeñó como reina de belleza y presentadora, lo que complementa su visión estratégica y habilidades de comunicación."
                        : "General Director of INSTITUTO MEX - COL - USA for 14 years, with extensive experience managing aesthetic medicine clinics and currently leading education in aesthetic medicine. Recognized for her career with the Latin Pride Award (Latin Chamber of Commerce, Gulf of Florida, 2022) and recently awarded first place in Technical Support Administration in Aesthetic Medicine by the American Education Alliance USA (2024–2025).\n\nAs General Director, she oversees operations and coordination across Mexico, Colombia, and the United States, ensuring excellence in administrative management and client care. Previously a beauty queen and TV host, complementing her strategic vision and communication skills."
                      }
                    </span>
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Director Médico */}
        <div className="w-full lg:max-w-4xl flex">
          <Card className="overflow-hidden w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
              <div className="relative h-56 sm:h-full sm:col-span-1">
                <Image
                  src={medicalDirector[lang].photo}
                  alt={medicalDirector[lang].name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">
                    {medicalDirector[lang].name}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full inline-block w-fit">{medicalDirector[lang].role}</span>
                </CardHeader>
                <CardContent className="pt-0 pb-6 flex-1">
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    <span className="font-semibold text-teal-700 block mb-3">
                      {lang === "es" 
                        ? "Médico cirujano de la Universidad Metropolitana de Barranquilla, Colombia."
                        : "Graduated as a surgeon from Universidad Metropolitana de Barranquilla, Colombia."
                      }
                    </span>
                    <span className="text-muted-foreground">
                      {lang === "es"
                        ? "Especialista en cirugía plástica y estética por el Centro Universitario Redentor de Brasil. Reconocido internacionalmente en Europa, Norteamérica y Latinoamérica, conocido como 'El cirujano de las Barbies'. Director Médico sede México en Instituto Mex-Col-USA Profesionales en Medicina Estética, Belleza y Holística."
                        : 'Specialized in Plastic and Aesthetic Surgery at Centro Universitario Redentor, Brazil. Recognized internationally in Europe, North America, and Latin America, known as "The Barbie Surgeon," attending high-profile personalities. Medical Director at the Mexico branch of Instituto Mex-Col-Usa Professionals in Aesthetic Medicine, Beauty, and Holistic Health.'
                      }
                    </span>
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
        </div>
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
                <p className="text-sm text-teal-700">{s.role}</p>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}


