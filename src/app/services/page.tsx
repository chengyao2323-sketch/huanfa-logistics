"use client";

import Link from "next/link";
import { useT } from "@/i18n";

const serviceColors = [
  "from-blue-500 to-blue-700",
  "from-sky-500 to-indigo-600",
  "from-emerald-500 to-teal-700",
  "from-amber-500 to-orange-600",
  "from-violet-500 to-purple-700",
];

export default function ServicesPage() {
  const t = useT();

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">{t.servicesPage.page.title}</h1>
            <p className="text-lg text-blue-100/80">{t.servicesPage.page.desc}</p>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="space-y-8 lg:space-y-12">
            {t.servicesPage.details.map((svc, idx) => (
              <div key={svc.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className={`bg-gradient-to-r ${serviceColors[idx] || serviceColors[0]} px-6 lg:px-10 py-5`}>
                  <h2 className="text-xl lg:text-2xl font-bold text-white">{svc.title}</h2>
                </div>
                <div className="p-6 lg:p-10">
                  <ul className="space-y-3">
                    {svc.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-gray-700">
                        <svg className="w-5 h-5 mt-0.5 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={idx === 0 ? "/services/sea-freight" : idx === 1 ? "/services/air-freight" : idx === 2 ? "/services/door-to-door" : idx === 3 ? "/services/sea-freight" : "/services/ecommerce-logistics"}
                  className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm hover:text-brand-700 transition-colors"
                >
                  {t.servicesPage.learnMore}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t.servicesPage.cta.title}</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t.servicesPage.cta.desc}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 text-brand-900 px-6 py-3 rounded-lg font-bold hover:bg-accent-600 transition-colors"
          >
            {t.servicesPage.cta.button}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

