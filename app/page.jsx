import Hero from "@/components/home/Hero";
import CategoryBar from "@/components/home/CategoryBar";
import BrandStrip from "@/components/home/BrandStrip";
import CarRail from "@/components/CarRail";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Locations from "@/components/home/Locations";
import Reviews from "@/components/home/Reviews";
import MapSection from "@/components/home/MapSection";
import SeoContent from "@/components/home/SeoContent";
import BenefitsGrid from "@/components/home/BenefitsGrid";
import SafetyTips from "@/components/home/SafetyTips";
import FaqAccordion from "@/components/home/FaqAccordion";
import ComparisonTable from "@/components/home/ComparisonTable";
import RentalConditions from "@/components/home/RentalConditions";
import PricingTable from "@/components/home/PricingTable";
import { cars } from "@/lib/data";

const byCat = (c) => cars.filter((x) => x.category === c);
const offers = cars.filter((c) => c.badge || c.tag === "New Arrival");
const hourly = cars.filter((c) => c.tag === "Available now");

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryBar />
      <BrandStrip />

      {/* Section 4 — Special Offers */}
      <section className="bg-ink py-16">
        <div className="wrap">
          <CarRail title="Special Offers" subtitle="Limited time" link="/offers" linkLabel="All Offers" cars={offers} />
        </div>
      </section>

      <WhyChooseUs />

      {/* Section 6 — Category showcase rows */}
      <section className="space-y-14 bg-char2 py-16">
        <div className="wrap"><CarRail title="Enjoy the speed of a sports car" link="/categories/sports" linkLabel="All Sports Cars" cars={byCat("sports")} /></div>
        <div className="wrap"><CarRail title="For SUV fans" link="/categories/suv" linkLabel="All SUV Cars" cars={byCat("suv")} /></div>
        <div className="wrap"><CarRail title="Experience the luxury style of Dubai" link="/categories/luxury" linkLabel="All Luxury Cars" cars={byCat("luxury")} /></div>
        <div className="wrap"><CarRail title="Cheap car rental Dubai" link="/categories/economy" linkLabel="All Economy Cars" cars={byCat("economy")} /></div>
      </section>

      {/* Section 7 — Hourly offers */}
      <section className="bg-ink py-16">
        <div className="wrap">
          <CarRail title="Available now — hourly rentals" subtitle="By the hour" link="/cars" cars={hourly} priceMode="hourly" />
        </div>
      </section>

      <Locations />
      <Reviews />
      <MapSection />
      <SeoContent />
      <BenefitsGrid />
      <SafetyTips />
      <FaqAccordion heading="Frequently asked questions" />
      <ComparisonTable />
      <RentalConditions />
      <PricingTable />
    </>
  );
}
