import { Check, X } from "lucide-react";
import Image from "next/image";

export default function EtiquettePage() {
  return (
    <div className="relative container mx-auto max-w-4xl px-4 py-12 md:px-6">
      <Image
              src="/etiquette.webp"
              alt="Elegant setting"
              data-ai-hint="elegant interior"
              fill
              className="object-cover opacity-20"
          />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div className="relative z-10">
        <h1 className="mb-8 font-headline text-5xl font-bold md:text-6xl text-primary">
        Client Etiquette
      </h1>
      <div className="space-y-8 leading-relaxed text-foreground">
        <p>
          To ensure a pleasant, respectful, and memorable experience for both our
          clients and companions, we kindly request adherence to the following
          etiquette guidelines. Our agency is founded on principles of mutual
          respect, discretion, and professionalism.
        </p>

        <section>
          
          <h2 className="mb-4 font-headline text-3xl font-semibold text-primary">
            Standard of Conduct
          </h2>
          <ul className="space-y-3">
            <h3 className="text-xl font-bold">Financial Policy</h3>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <span>
                Payment is required in full at the commencement of the booking.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <span>
                Should you wish to extend your date, payment for the additional time must be provided in cash at the start of the extension.
              </span>
            </li>
            <h3 className="text-xl font-bold">Sustenance & Refreshments</h3>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              <span>
                Clients are expected to provide water and soft drinks for their companion. As our ladies drive to engagements, they do not consume alcohol.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              For bookings of four hours or longer, provisions for a meal are required.
            </li>
            <h3 className="text-xl font-bold">Parking & Transportation</h3>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              When booking a hotel, we strongly prefer and recommend selecting a venue with on-site parking for your companion's convenience.
            </li>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              If parking requires a reservation, please make the necessary arrangements on her behalf.
            </li>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              In the event our lady must park at a remote location, we require you to escort her safely to her vehicle at the conclusion of your date.
            </li>
            <h3 className="text-xl font-bold">Service Guidelines</h3>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              Rose Escorts is a Girlfriend Experience (GFE) agency. Each companion is an independent individual, and the services she provides are based on her personal preferences and boundaries.
            </li>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              Our companions are open-minded and accommodating. We welcome discussions about lingerie preferences and fantasies to ensure a mutually enjoyable experience.
            </li>
            <h3 className="text-xl font-bold">Overnight Bookings</h3>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              Overnight engagements must include provisions for both dinner and breakfast.
            </li>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              To ensure her well-being, your companion requires a minimum of five uninterrupted hours of sleep.
            </li>
            <h3 className="text-xl font-bold">Hygiene</h3>
            <li className="flex items-start gap-4">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
              Your companion will arrive impeccably groomed and refreshed. We expect all clients to uphold the same standard of personal hygiene.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 font-headline text-3xl font-semibold text-primary">
            Strictly Prohibited
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-4">
              <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <span>
                <strong>Illegal Activities:</strong> There is a strict zero-tolerance
                policy for any illegal activities, including the use or
                distribution of illicit drugs. The engagement may be
                terminated immediately.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <span>
                <strong>Unprotected Services:</strong> Any request for unprotected sex will result in immediate blacklisting from our agency. Any attempt to remove a condom without consent will be treated as sexual assault and reported to the authorities.
              </span>
            </li> 
            <li className="flex items-start gap-4">
              <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <span>
                <strong>Disrespectful Behavior:</strong> Any form of harassment,
                aggression, disrespect, or abusive language towards a companion
                will not be tolerated.
              </span>
            </li>           
            <li className="flex items-start gap-4">
              <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <span>
                <strong>Privacy:</strong> Repeated requests for a companion's personal information are strictly prohibited.
              </span>
            </li>
        
            <li className="flex items-start gap-4">
              <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
              <span>
                <strong>Non-Consensual Photography:</strong> Do not take photos or
                videos of companions without their explicit prior consent.
              </span>
            </li>
          </ul>
        </section>

        <p>
          Failure to adhere to these guidelines may result in the immediate
          termination of the engagement without a refund and a permanent ban
          from our services. We appreciate your cooperation in maintaining a
          safe and respectful environment for everyone.
        </p>
      </div>
      </div>
      
    </div>
  );
}
