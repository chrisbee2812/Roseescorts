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
            src="/date-night.webp"
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
              Arrange a Private Introduction
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-foreground md:text-2xl">
              Please ensure you read all of the information available on this page prior to contacting us.
            </p>
            
          </div>
        </div>
      </section>

      <div className="bg-background">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col gap-6 pr-24">
                <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                  Important Information
                </h2>
                <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-foreground md:text-xl">
                    If this is your first time making a booking enquiry with us, or you would like a reminder, please visit each page and read the contained information.
                </p>
                <div className="grid gap-6 grid-cols-2">
                    <p className="mb-4 text-muted-foreground text-2xl">
                        Terms and Conditions
                    </p>
                    <Button asChild variant="destructive" size="lg">
                        <Link href="/terms">
                            Terms & Conditions <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
                <div className="grid gap-6 grid-cols-2">
                    <p className="mb-4 text-muted-foreground text-2xl">
                        Disclaimer
                    </p>
                    <Button asChild variant="destructive" size="lg">
                        <Link href="/disclaimer">
                            Disclaimer <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
                <div className="grid gap-6 grid-cols-2">
                    <p className="mb-4 text-muted-foreground text-2xl">
                        Etiquette
                    </p>
                    <Button asChild variant="destructive" size="lg">
                        <Link href="/etiquette">
                            Etiquette <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
              </div>
              <div>
                <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                    Booking Enquiries
                </h2>
                <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                    To submit an enquiry, please contact us with:
                </p>
                <ul className="mb-6 list-disc pl-6">
                    <li className="mb-2 text-foreground text-lg md:text-xl">Your full name</li>
                    <li className="mb-2 text-foreground text-lg md:text-xl">The location details</li>
                    <li className="mb-2 text-foreground text-lg md:text-xl">Your preferred date and time for the introduction</li>
                    <li className="mb-2 text-foreground text-lg md:text-xl">The profile you are interested in</li>
                    <li className="mb-2 text-foreground text-lg md:text-xl">Any specific preferences or requests you may have</li>
                </ul>
                <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Availability is subject to confirmation. Independent providers manage their own schedules and may not be available at all times.
                </p>

                {/* <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                    Our Clientele
                </h2>
                <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                    At Kasa Escort Agency, we believe in inclusivity and discretion. Your age, body type, appearance, or background are not determining factors in our engagement. We welcome respectful adults from all walks of life.
                </p>
                <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                    Whether you choose to submit a booking enquiry with us frequently or on occasion, each of our clients is valued equally and provided with the same high standard of introduction service.
                </p>
                <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                    There are, however, three non-negotiable qualities we require of every client: <strong>impeccable hygiene</strong>, <strong>utmost respect</strong>, and <strong>inherent kindness</strong>. These qualities are paramount to ensuring a mutually enjoyable and dignified introduction.
                </p>
                <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                    We expect all clients to be freshly showered, with clean teeth, well-groomed nails, and neat facial hair. Please arrive in freshly laundered clothing. Your chosen companion takes great care in her presentation, and we ask that you extend the same courtesy.
                </p>
                <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                    This standard of cleanliness extends to your environment. Whether we are facilitating an introduction at a hotel or a private residence, we require the space to be tidy and hygienic. This is not only a matter of respect but also essential for the comfort and well-being of both parties. We reserve the right to cancel any booking if the environment does not meet these standards, as we prioritize the safety and satisfaction of our companions above all else.
                </p>
                <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                    If you are an individual who values discretion, respect, and excellence, we invite you to learn more about our companions on our contact page.
                </p> */}
              </div>
            </div>
          </div>
        </section>

        {/*<section className="relative py-16 md:py-24">
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
              Ready to make a booking enquiry?
            </h2>
            <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
              To initiate a booking enquiry, please send a detailed text or WhatsApp message with the following information:
            </p>
            <ul className="mb-6">
                <li className="mb-2 text-foreground text-lg md:text-xl">Your full name (for verification purposes)</li>
                <li className="mb-2 text-foreground text-lg md:text-xl">The location details (hotel or residential address)</li>
                <li className="mb-2 text-foreground text-lg md:text-xl">The date and time you wish for an arranged introduction</li>
                <li className="mb-2 text-foreground text-lg md:text-xl">The duration of the introduction</li>
                <li className="mb-2 text-foreground text-lg md:text-xl">Any specific preferences or requests you may have</li>
            </ul>
            <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
              To ensure the highest standards of safety and service, we require complete transparency. Providing your full name is essential for confirmation. A deposit may be required to secure your booking enquiry, and we may request verification of identification or residency.
            </p>
            <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
              Please note that our screening protocols are in place for the safety and comfort of all parties. We are unable to process enquiries that do not include the necessary information.
            </p>
            <Button asChild variant="destructive" size="lg">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
          </div>
          
        </section> */}
      </div>
    </>
  );
}
