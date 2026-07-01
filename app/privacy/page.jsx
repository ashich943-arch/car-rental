import PageHeader from "@/components/PageHeader";
import { CONTACT } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy | LTS Car Rental",
  description: "How LTS Car Rental collects, uses and protects your personal information.",
};

const sections = [
  ["Information we collect", "We collect the details you provide when making a booking or enquiry, such as your name, phone number, email address and rental preferences. We may also collect documents required to complete a rental, such as your licence and identification."],
  ["How we use it", "Your information is used to process bookings, deliver and collect vehicles, provide customer support and keep you informed about your rental. We do not sell your personal data to third parties."],
  ["Communication", "With your consent we may contact you by phone, WhatsApp or email regarding your booking or relevant offers. You can opt out of marketing messages at any time."],
  ["Data security", "We take reasonable measures to protect your information against unauthorised access. Payment and deposit details are handled through secure channels."],
  ["Your rights", "You may request access to, correction of, or deletion of the personal information we hold about you, subject to any legal record-keeping requirements."],
  ["Contact", `For privacy questions or requests, contact us at ${CONTACT.email} or ${CONTACT.phone}.`],
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" crumb="Privacy" />
      <div className="wrap max-w-3xl space-y-8 py-14">
        <p className="text-sm text-muted">
          This policy explains how LTS Car Rental handles your personal information. It is provided as a general summary for this website.
        </p>
        {sections.map(([title, body]) => (
          <div key={title}>
            <h2 className="font-display text-xl font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
