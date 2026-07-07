"use client";

import { useT } from "@/i18n";

const valueIcons = [
  <svg key="0" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
];

export default function AboutPage() {
  const t = useT();

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">{t.aboutPage.page.title}</h1>
            <p className="text-lg text-blue-100/80">{t.aboutPage.page.desc}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl p-8 lg:p-12 order-2 lg:order-1">
              <h3 className="text-lg font-bold text-brand-800 mb-4">{t.aboutPage.story.companyInfo}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{t.aboutPage.story.p1}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{t.aboutPage.story.p2}</p>
              <p className="text-gray-700 leading-relaxed">{t.aboutPage.story.p3}</p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                {t.aboutPage.story.badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-6">
                {t.aboutPage.story.title.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br/>}</span>
                ))}
              </h2>
              <div className="space-y-4">
                {t.aboutPage.story.timeline.map((item) => (
                  <div key={item.year} className="flex items-start gap-3">
                    <div className="w-20 shrink-0 text-brand-600 font-bold text-sm">{item.year}</div>
                    <div className="w-px h-6 bg-brand-200 mt-1"></div>
                    <div className="text-sm text-gray-600">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">{t.aboutPage.values.title}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{t.aboutPage.values.desc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {t.aboutPage.values.items.map((v, i) => (
              <div key={v.title} className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100 text-center">
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                  {valueIcons[i]}
                </div>
                <h3 className="text-lg font-bold text-brand-800 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
