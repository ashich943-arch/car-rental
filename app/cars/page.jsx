import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import CarsExplorer from "@/components/CarsExplorer";

export const metadata = { title: "All Cars — LTS Car Rental Dubai" };

export default function CarsPage() {
  return (
    <>
      <PageHeader
        crumb="All Cars"
        eyebrow="Fleet"
        title="Browse the full fleet"
        subtitle="Filter by category, brand, body type and budget. Every car includes full insurance and free delivery across Dubai."
      />
      <Suspense fallback={<div className="wrap py-20 text-center text-muted">Loading fleet…</div>}>
        <CarsExplorer />
      </Suspense>
    </>
  );
}
