import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";


const heroImage = PlaceHolderImages.find(p => p.id === "homepage-hero");

export default function Home() {
  return (
    <>
      <section className="relative h-[40vh] w-full md:h-[60vh]">
          <Image
            src="/contact-banner.webp"
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
              Discreet Inquiries
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-foreground md:text-2xl">
              We specialize in confidential and sophisticated companionship. To discuss booking, please send us a message.
            </p>
            
          </div>
        </div>
      </section>

      <div className="bg-background">
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-16">
              <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                  Information for New Clients
              </h2>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Welcome to Rose Escorts. We appreciate your interest in our services.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  To ensure a seamless booking experience, we kindly ask that all prospective clients review our <Link href="/bookings" className="text-primary font-bold">booking policy</Link> page prior to initiating contact.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  All booking requests must be submitted via SMS or WhatsApp messaging to ensure a timely response.
              </p>
              <h3 className="mb-4 font-headline text-3xl font-bold md:text-4xl text-primary">
                Contact Information:
              </h3>
              <ul className="list-disc pl-24">
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Phone: 07xxx xxxxxx
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Hours: Monday to Friday, 10:00 AM – 9:00 PM
                </li>
              </ul>
              <h3 className="mb-4 font-headline text-3xl font-bold md:text-4xl text-primary">
                Please Note:
              </h3>
              <ul className="list-disc pl-24">
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  New client inquiries are processed Monday through Friday only. We are unable to accept new bookings on weekends.
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  To secure an appointment for a Saturday or Sunday, please contact us during our business hours by the preceding Friday.
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Our latest appointment start time is 9:30 PM.
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  For security reasons, calls from private or blocked numbers are automatically rejected.
                </li>
              </ul>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  We look forward to assisting you.
              </p>
            </div>  
            <div className="mb-16">
              <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                  Existing Clients
              </h2>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  To our valued returning clients,
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  For the most efficient service, please continue to correspond with us via SMS or WhatsApp, which are monitored seven days a week.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  You may also call us directly at 07xxx xxxxxx during our standard business hours (Monday-Friday, 10:00 AM – 9:00 PM).
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  We appreciate your continued patronage.
              </p>
            </div>
            <div className="mb-16">
              <h3 className="mb-4 font-headline text-3xl font-bold md:text-4xl text-primary">
                A Note on Communication:
              </h3>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Please be advised that our email address (info@roseescorts.co.uk) is not monitored for booking inquiries. All booking requests must be submitted via SMS or WhatsApp messaging to ensure a timely response.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
