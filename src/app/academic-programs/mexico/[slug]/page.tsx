'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Clock, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  GraduationCap,
  ArrowLeft,
  Award,
  BookOpen,
  Target,
  ShieldCheck,
  Play,
  MessageCircle,
  Package,
  ClipboardList
} from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/lib/i18n';
import ProductsMarquee from '@/components/shared/ProductsMarquee';

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();
  const t = translations[language].academicPrograms;
  const courseDetails = (t.countries.mexico.courseDetails as any)?.[slug];

  if (!courseDetails) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">{language === 'es' ? 'Curso no encontrado' : 'Course not found'}</h1>
        <Button asChild>
          <Link href="/academic-programs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'es' ? 'Volver a Programas' : 'Back to Programs'}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={courseDetails.heroImage || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop'}
            alt={courseDetails.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="pt-2">
            <Button 
              asChild 
              variant="ghost" 
              className="mb-6 text-white hover:text-white hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <Link href="/academic-programs">
                <ArrowLeft className="h-4 w-4" />
                {language === 'es' ? 'Volver a Programas' : 'Back to Programs'}
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              México
            </Badge>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              {courseDetails.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              {courseDetails.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Target Audience */}
            {(courseDetails as any).targetAudience && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    {(courseDetails as any).targetAudience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-2xl font-bold text-primary text-center">
                      {(courseDetails as any).targetAudience.highlighted}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {(courseDetails as any).targetAudience.description.split('\n\n').map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Learning Objectives */}
            {courseDetails.objectives && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    {language === 'es' ? 'Objetivos de Aprendizaje' : 'Learning Objectives'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {courseDetails.objectives.map((objective: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-sm pt-0.5">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Curriculum */}
            {courseDetails.curriculum && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    {language === 'es' ? 'Plan de Estudios' : 'Curriculum'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courseDetails.curriculum.map((module: any, idx: number) => (
                    <div key={idx} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-semibold mb-2">{module.title}</h4>
                      <ul className="space-y-1">
                        {module.topics.map((topic: string, topicIdx: number) => (
                          <li key={topicIdx} className={`text-sm flex items-start gap-2 ${topicIdx === 0 ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                            {topicIdx !== 0 && <span className="text-primary">•</span>}
                            <span className={topicIdx === 0 ? '' : ''}>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}


            {/* Accreditations */}
            {(courseDetails as any).accreditations && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    {language === 'es' ? 'Avales y Respaldos' : 'Accreditations'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(courseDetails as any).accreditations.map((accr: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{accr}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Includes */}
            {(courseDetails as any).includes && (
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-6 w-6 text-primary" />
                    {language === 'es' ? 'El Curso Incluye' : 'Course Includes'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(courseDetails as any).includes.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Product Quality */}
            {(courseDetails as any).productQuality && (
              <Card className="border-primary/20 overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    {(courseDetails as any).productQuality.title || (language === 'es' ? 'Productos de Calidad y Seguridad Garantizada' : 'Quality Products and Guaranteed Safety')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {(courseDetails as any).productQuality.description && (
                    (courseDetails as any).productQuality.description.split('\n\n').map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  )}
                  
                  {(courseDetails as any).productQuality.certifications && (courseDetails as any).productQuality.certifications.length > 0 && (
                    <div className="space-y-3">
                      <p className="font-semibold text-sm">
                        {language === 'es' ? 'Todos nuestros productos cuentan con registro y certificaciones oficiales de las principales entidades regulatorias internacionales, tales como:' : 'All our products have official registration and certifications from the main international regulatory entities, such as:'}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {(courseDetails as any).productQuality.certifications.map((cert: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="font-medium">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(courseDetails as any).productQuality.footer && (
                    <p className="text-sm text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                      {(courseDetails as any).productQuality.footer}
                    </p>
                  )}

                  {/* Products Carousel - Only show if there are certifications */}
                  {(courseDetails as any).productQuality.certifications && (courseDetails as any).productQuality.certifications.length > 0 && (
                    <div className="mt-8 -mx-6">
                      <ProductsMarquee />
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Testimonial Video */}
            {(courseDetails as any).testimonial && (
              <Card className="border-primary/20 overflow-hidden bg-gradient-to-br from-primary/5 to-background">
                <CardHeader className="text-center border-b bg-primary/10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Play className="h-6 w-6 text-primary animate-pulse" />
                    <CardTitle className="text-2xl">
                      {(courseDetails as any).testimonial.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    {(courseDetails as any).testimonial.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="relative w-full overflow-hidden rounded-lg shadow-xl" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${(courseDetails as any).testimonial.videoId}`}
                      title="Testimonio del curso"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 0 }}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {language === 'es' ? 'Testimonio Verificado' : 'Verified Testimonial'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>{language === 'es' ? 'Información del Curso' : 'Course Information'}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {(courseDetails as any).format && (
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{language === 'es' ? 'Formato' : 'Format'}</p>
                      <p className="text-sm text-muted-foreground">{(courseDetails as any).format}</p>
                    </div>
                  </div>
                )}

                {courseDetails.duration && (
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{language === 'es' ? 'Duración' : 'Duration'}</p>
                      <p className="text-sm text-muted-foreground">{courseDetails.duration}</p>
                    </div>
                  </div>
                )}

                {courseDetails.schedule && (
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{language === 'es' ? 'Horario' : 'Schedule'}</p>
                      <p className="text-sm text-muted-foreground">{courseDetails.schedule}</p>
                    </div>
                  </div>
                )}

                {courseDetails.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{language === 'es' ? 'Ubicación' : 'Location'}</p>
                      <p className="text-sm text-muted-foreground">{courseDetails.location}</p>
                    </div>
                  </div>
                )}

                {(courseDetails as any).certification && (
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">{language === 'es' ? 'Certificación' : 'Certification'}</p>
                      <p className="text-sm text-muted-foreground">{(courseDetails as any).certification}</p>
                    </div>
                  </div>
                )}


                <Separator />

                <Button className="w-full btn-modern" size="lg" asChild>
                  <Link href="/contact">
                    {language === 'es' ? 'Inscribirse Ahora' : 'Enroll Now'}
                  </Link>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full gap-2" 
                  asChild
                >
                  <a 
                    href={`https://wa.me/56950285079?text=${encodeURIComponent(`Hola, quiero más información acerca del curso de ${courseDetails.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                      alt="WhatsApp" 
                      className="w-4 h-4"
                    />
                    {language === 'es' ? 'Solicitar Información' : 'Request Information'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

