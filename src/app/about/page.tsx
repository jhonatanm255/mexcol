import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: 'Dr. Evelyn Reed',
    role: 'Founder & CEO',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'With over 20 years in education technology, Dr. Reed leads our mission to make learning accessible to all.',
  },
  {
    name: 'Juan Carlos Pérez',
    role: 'Head of Academics (LATAM)',
    avatar: 'https://i.pravatar.cc/150?img=2',
    bio: 'Specializing in curriculum development for Spanish-speaking regions, ensuring cultural and academic relevance.',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'The architect of our robust learning platform, Michael is passionate about seamless user experiences.',
  },
  {
    name: 'Sofia Gomez',
    role: 'Director of Medical Programs',
    avatar: 'https://i.pravatar.cc/150?img=4',
    bio: 'A licensed physician and educator, Dr. Gomez oversees all medical and healthcare-related programs.',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          Conócenos (About Us)
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Our mission is to bridge knowledge gaps through innovative and
          accessible online education, connecting experts with learners across
          the globe.
        </p>
      </section>

      <section className="my-16">
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://picsum.photos/1200/400"
            alt="A diverse group of people collaborating"
            data-ai-hint="team collaboration"
            fill
            className="object-cover"
          />
           <div className="absolute inset-0 bg-primary/30" />
        </div>
      </section>
      
      <section className="my-16">
        <h2 className="font-headline text-3xl font-bold text-center mb-12">
          Directores & Staff Médico
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader className="items-center">
                <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
