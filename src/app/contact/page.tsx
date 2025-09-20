import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold md:text-6xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          For bookings and inquiries, please reach out to us.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h2 className="font-headline text-4xl font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">
            We are available to assist you with any questions you may have. Our team is dedicated to providing discreet and professional service. Please use the form or the contact details below. We aim to respond to all inquiries within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Office</h3>
                <p className="text-muted-foreground">123 Elegance Avenue, Suite 100, Beverly Hills, CA 90210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">(+1) 234-567-890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">inquiries@roseescorts.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
