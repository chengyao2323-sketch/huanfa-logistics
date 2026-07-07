"use client";

import Link from "next/link";
import { useT, useI18n } from "@/i18n";

const serviceIcons: Record<string, React.ReactNode> = {
  ocean: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M2 16l10-4 10 4" />
      <path d="M12 3v9" />
      <path d="M9 6l3-3 3 3" />
      <path d="M3 18c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
    </svg>
  ),
  air: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4z" />
    </svg>
  ),
  ddp: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <rect x="15" y="5" width="7" height="11" rx="1" />
      <circle cx="5.5" cy="19" r="2" />
      <circle cx="18.5" cy="19" r="2" />
      <line x1="1" y1="3" x2="4" y2="3" />
    </svg>
  ),
  warehouse: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M7 21V13h10v8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  ),
  ecommerce: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
};


const serviceKeys = ["ocean", "air", "ddp", "warehouse", "ecommerce"] as const;

export default function HomePage() {
  const t = useT();
  const { locale } = useI18n();

  const stats = [
    { value: "200+", label: t.stats.countries },
    { value: "5000+", label: t.stats.containers },
    { value: "98%", label: t.stats.onTime },
    { value: locale === "zh" ? "8年" : "8+", label: t.stats.experience },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMDMiPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMwem0wIDMwaDMwdjMwSDMweiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-yellow-300 mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t.hero.badge}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-balance">
              {locale === "zh" ? <span style={{ letterSpacing: "0.12em" }}>{"焕发国际物流".split("").map((c, i) => <span key={i} className="inline-block" style={c === "焕" ? { transform: "scale(1.04)" } : undefined}>{c}</span>)}</span> : t.hero.title}
              <span className="block text-lg sm:text-xl lg:text-2xl font-normal text-blue-200 mt-2">
                {t.hero.subtitle}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-blue-100/80 mb-8 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-500 text-brand-900 px-6 py-3 rounded-lg font-bold hover:bg-accent-600 transition-colors"
              >
                {t.hero.getQuote}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                {t.hero.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-brand-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">{t.services.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceKeys.map((key) => (
              <div
                key={key}
                className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {serviceIcons[key]}
                </div>
                <h3 className="text-lg font-bold text-brand-800 mb-1">{t.services[key].title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">{t.services[key].subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.services[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 lg:py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                {t.about.badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-6">
                {t.about.title.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br/>}</span>
                ))}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t.about.p1}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.about.p2}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
              >
                {t.about.learnMore}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-4">
                  {[t.about.mission, t.about.vision, t.about.values, t.about.promise].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-4 text-center">
                      <div className="text-sm font-bold text-brand-600 mb-1">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-800 to-brand-700 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 text-brand-900 px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            {t.cta.button}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}







