"use client";

import { useT } from "@/i18n";
import ShipmentProcessSteps from "./ShipmentProcessSteps";

export default function CargoProcess() {
  const { process } = useT().homeSections;

  return <section className="bg-white py-12 lg:py-16" id="process" aria-labelledby="cargo-process-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center lg:mb-12">
        <h2 id="cargo-process-title" className="mb-4 text-3xl font-bold text-brand-800 lg:text-4xl">{process.title}</h2>
        <p className="mx-auto max-w-2xl text-gray-600">{process.desc}</p>
      </div>
      <ShipmentProcessSteps steps={process.steps} />
    </div>
  </section>;
}
