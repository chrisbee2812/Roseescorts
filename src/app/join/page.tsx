import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const heroImage = PlaceHolderImages.find(p => p.id === "homepage-hero");

export default function Home() {
  return (
    <>
      <section className="relative h-[40vh] w-full md:h-[60vh]">
          <Image
            src="/group.webp"
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
              Join Rose Escorts
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg text-foreground md:text-2xl">
              Interested in becoming one of our companions? Please read the information below.
            </p>
            
          </div>
        </div>
      </section>

      <div className="bg-background">
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-16">
              <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                  Why Choose Rose Escorts?
              </h2>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Rose Escorts is a friendly, professional, and female-operated agency providing discreet companionship services across England and Wales. Our exemplary reputation is built on a foundation of integrity, care, and an unwavering commitment to the well-being of the ladies we represent. This is why the finest companions choose to work with us and maintain long-term partnerships.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Our associates are intelligent, independent women from diverse professional backgrounds—including career professionals, students, and mothers—who value discretion and autonomy. We operate with flexibility to accommodate your schedule, whether you are available one day a week or several.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Your safety, privacy, and well-being are our utmost priority. You will find us approachable, fair, and dedicated to fostering a secure and respectful working environment.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  For those new to the industry, we offer comprehensive guidance and support to ensure your success. This includes practical advice on industry standards, financial planning, and personal safety, as well as ongoing emotional support. We are here to assist you at every step.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  For experienced companions, whether you currently work independently or with another agency, we invite you to consider a partnership with us. You will find our commission structure to be among the most competitive in the industry, complemented by a supportive and professional network. It is a decision you won't regret.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Please note: There is no fee to join. We believe talented professionals should never have to pay to work. We stand firmly against exploitative practices and advise you to avoid any agency that requires an upfront financial commitment.
              </p>
              <p className="mx-auto mb-8 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Rose Escorts commands a position of trust and respect within the industry. Our longstanding relationships with a discerning clientele ensure a safe, predictable, and professional environment for both our companions and clients.
              </p>
            </div>
            <div className="mb-16">
              <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                  Join Our Team of Distinguished Companions
              </h2>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Are you a poised and perceptive individual seeking a rewarding opportunity?
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  We are seeking candidates who possess intelligence, integrity, and emotional maturity. Essential qualities include impeccable manners, strong interpersonal skills, and a well-grounded, friendly personality. The ideal candidate is comfortable engaging with a diverse clientele in a relaxed and enjoyable manner.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  While model-like looks are not a prerequisite, we require associates to maintain a well-proportioned and healthy physique. A genuine smile and a warm demeanor are equally important.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  We welcome applications from individuals from all walks of life, including single parents. A successful candidate must, however, have reliable childcare arrangements in place for evening engagements.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  This role offers a significant opportunity to achieve substantial financial goals. Our associates benefit from a consistent and generous supplemental income. Many of our team members have successfully leveraged their earnings to invest in property, fund private education for their children, or launch their own business ventures.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  A natural affinity for people and a positive, empowered view of intimacy are fundamental to success in this role. It is important to understand that you will never be expected to participate in activities outside of your personal comfort zone. Your boundaries are respected; if certain practices are not to your preference, that is perfectly acceptable. Genuine enjoyment and personal confidence in the services you provide are the true keys to excellence.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  This profession requires a strong work ethic and a professional approach. The role involves commitments during evening hours and travel, so dedication is essential to achieve the significant financial rewards. We seek ambitious, business-minded individuals who understand the importance of investing in their presentation, including professional photography.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Please be aware that this is a role within the adult industry. While companionship is a component, the nature of the work is inherently intimate. A positive and open-minded attitude towards this aspect of the job is essential.
              </p>
              <h3 className="mb-4 font-headline text-3xl font-bold md:text-4xl text-primary">
                Essential Requirements:
              </h3>
              <ul className="list-disc pl-24">
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  You must be a minimum of 21 years of age. There is no upper age limit for candidates who maintain an good physical appearance and demeanour. Honesty regarding your age is required.
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  You must possess the legal right to work in the United Kingdom.
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  You must be fluent in English.
                </li>
                <li className="mx-auto mb-8 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  We only work directly with individuals. We do not accept applications from, or work with, third-party managers or agents.
                </li>
              </ul>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  If you are a self-motivated individual with the qualities we seek, we invite you to reach out to discuss this opportunity further.
              </p>
            </div>
            <div className="mb-16">
              <h2 className="mb-4 font-headline text-4xl font-bold md:text-5xl text-primary">
                  Application Process
              </h2>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  To be considered for representation, please submit a comprehensive email to info@roseescorts.co.uk with the following information. Incomplete applications or those that do not adhere to our photo guidelines may not receive a response.
              </p>
              <h3 className="mb-4 font-headline text-3xl font-bold md:text-4xl text-primary">
                Required Information:
              </h3>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Please ensure your initial email includes the following details:
              </p>
              <ul className="list-disc pl-24">
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Full name
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Age
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Contact telephone number
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Nationality (Please note: while we welcome all nationalities, fluent English is required)
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Current location within the UK
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Confirmation of valid driver's license and vehicle access
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Dress size, measurements (bust-waist-hips), and description of any distinctive tattoos or markings
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Brief personal summary including: occupation, educational background, interests, and any relevant experience
                </li>
                <li className="mx-auto mb-8 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Recent photographs (up to 5) that comply with our photo guidelines below
                </li>
              </ul>
              <h3 className="mb-4 font-headline text-3xl font-bold md:text-4xl text-primary">
                Photo Guidlines:
              </h3>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Please review these requirements carefully before submitting your application:
              </p>
              <ul className="list-disc pl-24">
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Images should be recent (taken within the last 3 months)
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Include both portrait and full-length photographs
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Ensure good lighting and image clarity
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Minimal editing or filters
                </li>
                <li className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  Professional appearance and attire
                </li>
              </ul>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  We review all complete applications within 24-48 hours of receipt. Due to volume, we can only respond to candidates who progress to the interview stage.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  All application materials are treated with strict confidentiality. If not selected, your information and photographs will be permanently deleted from our records.
              </p>
              <p className="mx-auto mb-4 max-w-3xl md:max-w-5xl text-foreground text-lg md:text-xl">
                  For any questions regarding the application process, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
