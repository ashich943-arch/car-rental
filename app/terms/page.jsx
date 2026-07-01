import PageHeader from "@/components/PageHeader";
import { CONTACT } from "@/lib/data";

export const metadata = {
  title: "Terms & Conditions | LTS Car Rental",
  description: "The terms and conditions for renting a vehicle from LTS Car Rental in Dubai.",
};

const sections = [
  ["Eligibility", "Renters must be at least 21 years of age (25 for selected premium and exotic models) and hold a valid driving licence. International visitors may drive on a home-country licence together with an International Driving Permit, or a licence issued by an approved country. A valid passport, visa or entry stamp may be required."],
  ["Booking & payment", "All rates are quoted in AED and include the vehicle and standard insurance unless stated otherwise. A refundable security deposit is held for the duration of the rental and released after the vehicle is returned in its original condition. Additional charges such as Salik tolls, traffic fines and fuel are billed to the renter."],
  ["Insurance & liability", "Every rental includes standard insurance. The renter remains responsible for the insurance excess in the event of an accident, and for any damage, fine or penalty incurred while the vehicle is in their care. Off-road use, racing and driving under the influence are strictly prohibited and void all cover."],
  ["Mileage & usage", "Daily, weekly and monthly packages include a mileage allowance; excess kilometres are charged at the rate shown on your agreement. Vehicles may not be taken outside the UAE without prior written consent."],
  ["Cancellations", "Bookings may be amended or cancelled subject to the terms confirmed at the time of reservation. Delivery and collection are offered free across Dubai; charges may apply for locations outside our standard coverage."],
  ["Contact", `For any questions about these terms, contact us at ${CONTACT.email} or ${CONTACT.phone}.`],
];

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" crumb="Terms" />
      <div className="wrap max-w-3xl space-y-8 py-14">
        <p className="text-sm text-muted">
          These terms govern the rental of any vehicle from LTS Car Rental. By making a booking you agree to the conditions below. This page is provided as a general summary and does not replace the signed rental agreement.
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
