"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const heroImage = PlaceHolderImages.find(p => p.id === "homepage-hero");

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // useEffect(() => {
  //   // Check if this is the homepage
  //   if (window.location.pathname === '/') {
  //     // Show popup every time — use sessionStorage if you want once per session
  //     setIsPopupOpen(true);
      
  //     // OPTIONAL: Show only once per browser session (uncomment below)
  //     // const hasSeenPopup = sessionStorage.getItem('hasSeenKasaPopup');
  //     // if (!hasSeenPopup) {
  //     //   setIsPopupOpen(true);
  //     //   sessionStorage.setItem('hasSeenKasaPopup', 'true');
  //     // }
  //   }
  // }, []);

  return (
    <>
      <div>
        <section className="relative h-[60vh] w-full md:h-[80vh]">
            <Image
              src="/hero4.webp"
              alt="Escort lying on bed"
              data-ai-hint="escort in elegant setting"
              fill
              className="object-cover"
              priority
            />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className="md:flex space-y-4 space-x-0 md:space-x-8 md:space-y-0">
              <h1 className="font-headline text-6xl font-bold tracking-tight text-primary drop-shadow-lg md:text-8xl lg:text-9xl">
                Kasa
              </h1>
              <div className="max-w-2xl md:pt-12">
                <p className="mx-auto max-w-2xl font-body text-lg text-foreground md:text-3xl">
                  Experience refined companionship and professional private introductions.
                </p>
              </div>
              
              
            </div>
          </div>
        </section>

        <div className="bg-background">
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                    Welcome to Kasa
                  </h2>
                  {/* <p className="mb-4 text-muted-foreground">
                    Here at Kasa, we take immense pride in our commitment to providing an unparalleled level of service. Our dedicated community of long-term clients is a testament to our consistent excellence and the quality of introductions we facilitate.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    We are highly selective in curating our independent companion profiles. Our listed companions are distinguished professionals who truly stand apart. While poise and presentation are a given, we feature ladies for their intellect, ambition, and sophisticated social skills. Each independent profile represents a career-oriented woman with life experience, charisma, and a genuine, warm demeanor. Respect, kindness, and the right attitude are fundamental to our ethos.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    We prioritize quality over quantity. We operate within sensible hours, and our companions are available on a part-time basis. We do not offer incall services, ensuring that your time together is always exclusive and never rushed; you will never be just another appointment in her day.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    As a discerning gentleman, you will appreciate our meticulous approach to safety and well-being, which is why the finest independent companions choose to list with us.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    For new clients, our booking enquiry process is thorough to ensure everyone’s security and comfort. We appreciate your understanding and look forward to building a trusted relationship, making future enquiries a seamless experience.
                  </p>
                  <p className="text-muted-foreground">
                    At Kasa, we deeply value repeat clientele. Discretion, mutual respect, and professionalism are the cornerstones of our introduction platform, and we are committed to maintaining the highest standards in all our interactions.
                  </p> */}
                  <p className="mb-4 text-2xl text-muted-foreground">
                    Kasa is an independent profile listing and introduction platform.
                  </p>
                  <p className="mb-4 text-2xl text-muted-foreground">
                    We help manage profile listings, booking enquiries and advertising visibility.
                  </p>
                  <p className="mb-4 text-2xl text-muted-foreground">
                    Independent providers remain responsible for their own schedules, availability and arrangements.
                  </p>
                </div>
                <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                    {/* <Image
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
                  /> */}
                  <Image
                        src="/page1-img6.webp"
                        alt="Woman laying on bed"
                        data-ai-hint="woman in elegant setting"
                        fill
                        className="object-cover hidden md:block"
                    />
                    <Image
                      src="/page1-img6.webp"
                      alt="Elegant setting"
                      data-ai-hint="elegant interior"
                      fill
                      className="object-cover block md:hidden"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <section className="relative py-16 md:py-24">
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
                List your profile with Kasa Escort Agency
              </h2>
              <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                Are you a sophisticated, independent woman seeking to enhance your financial independence through premium companion profile listings?
              </p>
              <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                Our associated independent companions are accomplished professionals with established careers, who value the additional income and premium engagements that this profile listing platform provides.
              </p>
              <p className="mx-auto mb-6 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                If you are considering this opportunity, we invite you to connect with a premier introduction agency dedicated to excellence, discretion, and mutual respect.
              </p>
              <Button asChild variant="destructive" size="lg">
                <Link href="/join">
                  Join Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
            </div>
            
          </section> */}
        </div>
      </div>
      {/* Popup Dialog */}
      {/* <Dialog.Root open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md bg-white rounded-lg shadow-xl p-6">
            <Dialog.Title className="text-xl font-semibold mb-4 text-gray-900">
              Preview Site Notice
            </Dialog.Title>
            
            <Dialog.Description className="text-gray-700 mb-6 leading-relaxed">
              This is a preview of a new website for <span className="font-semibold">Kasa Escort Agency</span>.
              <br />
              For the current live site please visit:
              <br />
              <a 
                href="https://www.kasaescorts.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                www.kasaescorts.co.uk
              </a>
            </Dialog.Description>
            
            <div className="flex justify-center">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                OK
              </button>
            </div>
            
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root> */}
    </>
  );
}
