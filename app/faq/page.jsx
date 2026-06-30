import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/home/FaqAccordion";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { CONTACT } from "@/lib/data";
import { MessageCircle, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "FAQ | LTS Car Rental Dubai",
  description: "Answers to common questions about renting a luxury car in Dubai — booking, insurance, documents, deposits and payment.",
};

export default function FaqPage() {
  const wa = CONTACT.whatsapp.replace(/[^0-9]/g, "");
  const tel = CONTACT.phone.replace(/[^0-9+]/g, "");

  return (
    <>
      <PageHeader
        eyebrow="Help centre"
        title="Frequently asked questions"
        subtitle="Everything you need to know about renting with LTS — from booking and delivery to insurance, documents and payment."
        crumb="FAQ"
      />

      <FaqAccordion heading="Browse by topic" eyebrow="Questions" />

      <section className="wrap py-16">
        <Reveal>
          <div className="rounded-2xl border border-line bg-char2 p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              Still have a question?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Our team is available 24/7. Reach out and we'll get back to you within minutes.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <a href={`https://wa.me/${wa}`} className="card flex items-center gap-3 p-4 transition-colors hover:border-brand/60">
                <MessageCircle className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium text-white">WhatsApp</span>
              </a>
              <a href={`tel:${tel}`} className="card flex items-center gap-3 p-4 transition-colors hover:border-brand/60">
                <Phone className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium text-white">Call us</span>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="card flex items-center gap-3 p-4 transition-colors hover:border-brand/60">
                <Mail className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium text-white">Email</span>
              </a>
            </div>
            <div className="mt-6">
              <Link href="/contact" className="link-arrow">Go to the contact page</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
