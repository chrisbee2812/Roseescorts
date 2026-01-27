import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const heroImage = PlaceHolderImages.find(p => p.id === "homepage-hero");

export default function Home() {
  return (
    <>
      <section className="relative h-[60vh] w-full md:h-[80vh]">
          <Image
            src="/hero2.webp"
            alt="Escort lying on bed"
            data-ai-hint="escort in elegant setting"
            fill
            className="object-cover"
            priority
          />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="font-headline text-6xl font-bold tracking-tight text-primary drop-shadow-lg md:text-8xl lg:text-9xl">
              Kasa Escort Agency
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-foreground md:text-2xl">
              Experience unparalleled sophistication and companionship.
            </p>
            
          </div>
        </div>
      </section>

      <div className="bg-background">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                  Welcome to Kasa Escort Agency
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Here at Kasa Escort Agency we take immense pride in our commitment to providing an unparalleled level of service. Our dedicated community of long-term clients is a testament to our consistent excellence and the quality of experiences we provide.
                </p>
                <p className="mb-4 text-muted-foreground">
                  I am highly selective in curating our team. Our escorts are distinguished professionals who truly stand apart. While beauty is a given, we choose ladies for their intellect, ambition, and sophisticated social skills. Each companion is a career-oriented woman with life experience, charisma, and a genuine, warm demeanor. Respect, kindness, and the right attitude are fundamental to our ethos.
                </p>
                <p className="mb-4 text-muted-foreground">
                  We prioritize quality over quantity. We operate within sensible hours, and our companions are available on a part-time basis. We do not offer incall services, ensuring that your time together is always exclusive and never rushed; you will never be just another appointment in her day.
                </p>
                <p className="mb-4 text-muted-foreground">
                  As a discerning gentleman, you will appreciate our meticulous approach to safety and well-being, which is why the finest companions choose to work with us.
                </p>
                <p className="mb-4 text-muted-foreground">
                  For new clients, our booking process is thorough to ensure everyone's security and comfort. We appreciate your understanding and look forward to building a trusted relationship, making future bookings a seamless experience.
                </p>
                <p className="text-muted-foreground">
                  At Kasa Escort Agency, we deeply value repeat clientele. Discretion, mutual respect, and professionalism are the cornerstones of our business, and we are committed to maintaining the highest standards in all our interactions.
                </p>
              </div>
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                   <Image
                      src="/page1-img4.webp"
                      alt="Woman laying on bed"
                      data-ai-hint="woman in elegant setting"
                      fill
                      className="object-cover hidden md:block"
                  />
                  <Image
                    src="/small-p1-img2.webp"
                    alt="Elegant setting"
                    data-ai-hint="elegant interior"
                    fill
                    className="object-cover block md:hidden"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
                <Image
                    src="/page1-img2.webp"
                    alt="Elegant setting"
                    data-ai-hint="elegant interior"
                    fill
                    className="object-cover opacity-50"
                />
                
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/50 to-transparent" />   
            
          <div className="relative mx-auto px-4 text-center md:px-6">
            
            <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
              Work with us at Kasa Escort Agency
            </h2>
            <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
              Are you a sophisticated, independent woman seeking to enhance your financial independence?
            </p>
            <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
              Our associates are accomplished professionals with established careers, who value the additional income and premium engagements that this role provides.
            </p>
            <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
              If you are considering this opportunity, we invite you to connect with a premier agency dedicated to excellence, discretion, and mutual respect.
            </p>
            <Button asChild variant="destructive" size="lg">
              <Link href="/join">
                Join Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
          </div>
          
        </section>
      </div>
    </>
  );
}
