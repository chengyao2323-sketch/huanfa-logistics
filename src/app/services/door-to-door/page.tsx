"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function DoorToDoorPage() {
  const t = useT();
  const data = t.servicePages.doorToDoor;

  return (
    <>
      <section className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">{data.title}</h1>
            <p className="text-lg text-white/80">{data.desc}</p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 lg:p-12">
              <ul className="space-y-3">
                {data.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 mt-0.5 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{t.cta.title}</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">{t.cta.description}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors">{t.cta.button} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
        </div>
      </section>
    </>
  );
}

