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
            src="/hero.webp"
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
              Rose Escorts
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-foreground md:text-2xl">
              Experience unparalleled sophistication and companionship.
            </p>
            {/* <Button asChild size="lg">
              <Link href="/gallery">
                Explore Our Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button> */}
          </div>
        </div>
      </section>

      <div className="bg-background">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl">
                  About Our Agency
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Rose Escorts is a premier agency dedicated to providing exceptional companionship for discerning individuals. Our commitment to privacy, professionalism, and creating memorable experiences sets us apart.
                </p>
                <p className="text-muted-foreground">
                  We meticulously select our companions, ensuring they are not only beautiful but also intelligent, articulate, and able to engage on any level. We believe in quality over quantity, and our exclusive roster reflects this philosophy.
                </p>
              </div>
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                   <Image
                      src="/page1-img1.webp"
                      alt="Elegant setting"
                      data-ai-hint="elegant interior"
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
                    className="object-cover"
                />
                
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/50 to-transparent" />   
            
          <div className="relative mx-auto px-4 text-center md:px-6">
            
            <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto mb-12 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
              We offer a range of services tailored to your needs, from social events to private dinners and corporate functions.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-md">
                <h3 className="mb-2 font-headline text-3xl font-semibold">Social Events</h3>
                <p className="text-muted-foreground">
                  Arrive with a stunning and sophisticated partner who will enhance your presence at any gala, party, or social gathering.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-md">
                <h3 className="mb-2 font-headline text-3xl font-semibold">Dinner/Evening entertainment</h3>
                <p className="text-muted-foreground">
                  Feeling lonely and need some company, our companions are just a phone call away.
                </p>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-md">
                <h3 className="mb-2 font-headline text-3xl font-semibold">Corporate Functions</h3>
                <p className="text-muted-foreground">
                  Make a lasting impression at business dinners, conferences, and corporate events with a poised and intelligent partner.
                </p>
              </div>
              
              
            </div>
            
          </div>
          
        </section>
      </div>
    </>
  );
}
