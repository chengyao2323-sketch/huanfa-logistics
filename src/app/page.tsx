"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useT, useI18n } from "@/i18n";
import OperationsGallery from "@/components/OperationsGallery";
import CarrierNetwork from "@/components/CarrierNetwork";

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
const serviceHrefs: Record<(typeof serviceKeys)[number], string> = {
  ocean: "/services/sea-freight",
  air: "/services/air-freight",
  ddp: "/services/door-to-door",
  warehouse: "/services/warehousing",
  ecommerce: "/services/ecommerce-logistics",
};

export default function HomePage() {
  const t = useT();
  const { locale } = useI18n();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightbox]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/hero-logistics-poster.jpg"
          aria-hidden="true"
          disablePictureInPicture
        >
          <source src="/video/hero-logistics.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/75 via-brand-900/45 to-brand-900/20"></div>
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

      {/* Company verification */}
      <section className="py-16 lg:py-24 bg-white" id="verify">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">
              {t.homeSections.verification.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.homeSections.verification.desc}
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: t.homeSections.verification.legalName, value: t.homeSections.verification.legalNameValue },
                { label: t.homeSections.verification.chineseLegalName, value: t.homeSections.verification.chineseLegalNameValue },
                { label: t.homeSections.verification.registration, value: t.homeSections.verification.registrationValue },
                { label: t.homeSections.verification.founded, value: t.homeSections.verification.foundedValue },
                { label: t.homeSections.verification.hq, value: t.homeSections.verification.hqValue },
                { label: t.homeSections.verification.warehouse, value: t.homeSections.verification.warehouseValue },
                { label: t.homeSections.verification.email, value: t.homeSections.verification.emailValue },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="w-9 h-9 shrink-0 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-6">
              <h3 className="mb-2 font-bold text-brand-800">{t.homeSections.payment.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{t.homeSections.payment.desc}</p>
              <ul className="grid gap-3 text-sm text-gray-700 md:grid-cols-3">
                {t.homeSections.payment.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              <Link
                key={key}
                href={serviceHrefs[key]}
                className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all group block"
              >
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {serviceIcons[key]}
                </div>
                <h3 className="text-lg font-bold text-brand-800 mb-1">{t.services[key].title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">{t.services[key].subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.services[key].desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer types */}
      <section className="bg-white py-16 lg:py-24" id="who-we-ship-for">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-800 lg:text-4xl">
              {locale === "zh" ? "我们为谁运输" : "Who We Ship For"}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              {locale === "zh" ? "为企业进口商和从中国采购家具、建材或其他商品的个人客户提供清晰的运输方案。" : "Clear shipping options for businesses and individuals buying furniture, building materials, or other goods from China."}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <div className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-600">{locale === "zh" ? "企业客户" : "For Businesses"}</div>
              <h3 className="mb-4 text-2xl font-bold text-brand-800">{locale === "zh" ? "进口商、批发商、零售商与电商品牌" : "Importers, wholesalers, retailers & e-commerce brands"}</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">{locale === "zh" ? "支持供应商提货、集货、海运或空运、清关协调及末端派送。" : "Supplier pickup, consolidation, ocean or air freight, customs coordination, and final delivery."}</p>
              <Link href="/services" className="inline-flex rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
                {locale === "zh" ? "查看企业运输服务" : "Business Shipping"}
              </Link>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8">
              <div className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-600">{locale === "zh" ? "个人进口客户" : "For Personal Importers"}</div>
              <h3 className="mb-4 text-2xl font-bold text-brand-800">{locale === "zh" ? "从中国购买家具、建材或家居用品？" : "Buying furniture or home goods from China?"}</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">{locale === "zh" ? "我们可从多个供应商收货、集中整理，并根据目的地安排门到门运输方案。" : "We can collect from multiple suppliers, consolidate your goods, and arrange a door-to-door shipping plan for your destination."}</p>
              <Link href="/personal-shipping-from-china" className="inline-flex rounded-lg bg-accent-500 px-5 py-2.5 text-sm font-bold text-brand-900 hover:bg-accent-600">
                {locale === "zh" ? "个人运输指南" : "Personal Shipping"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real warehouse and team */}
      <section className="py-16 lg:py-24 bg-white" id="real">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">
              {t.homeSections.real.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.homeSections.real.desc}
            </p>
          </div>
          <OperationsGallery
            labels={[
              t.homeSections.real.warehouse1,
              t.homeSections.real.warehouse2,
              t.homeSections.real.team,
            ]}
          />
        </div>
      </section>

      {/* About */}
      <section className="py-16 lg:py-24 bg-gray-50" id="about">
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
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/about-company.jpg"
                  alt="Huanfa International Logistics"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">
              {t.homeSections.process.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.homeSections.process.desc}
            </p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.homeSections.process.steps.map((step, i) => (
              <li key={step} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="w-10 h-10 bg-brand-600 text-white rounded-xl flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <div className="text-sm font-semibold text-gray-800">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Insurance and claims */}
      <section className="py-16 lg:py-24 bg-gray-50" id="insurance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">
              {t.homeSections.insurance.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.homeSections.insurance.desc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.homeSections.insurance.steps.map((step, i) => (
              <div key={step} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="text-xs font-bold text-brand-600 mb-3">0{i + 1}</div>
                <div className="text-sm text-gray-700 leading-relaxed">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified customer feedback */}
      <section className="bg-gray-50 py-16 lg:py-24" id="customer-feedback">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-brand-800 lg:text-4xl">
              {t.homeSections.testimonials.title}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t.homeSections.testimonials.desc}
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 p-8 text-white shadow-xl lg:p-10">
                <svg className="mb-5 h-9 w-9 text-accent-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.17 6A5.17 5.17 0 002 11.17V18h7v-7H5.1A2.17 2.17 0 017.17 9H9V6H7.17zm10 0A5.17 5.17 0 0012 11.17V18h7v-7h-3.9A2.17 2.17 0 0117.17 9H19V6h-1.83z" />
                </svg>
                <blockquote className="mb-7 text-lg font-medium leading-relaxed text-blue-50 lg:text-xl">
                  “{t.homeSections.testimonials.quote}”
                </blockquote>
                <div className="border-t border-white/15 pt-5">
                  <div className="font-bold">{t.homeSections.testimonials.customer}</div>
                  <div className="mt-1 text-sm text-blue-200">{t.homeSections.testimonials.source}</div>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
                <div className="mb-5 flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
                  <h3 className="font-bold text-brand-800">{t.homeSections.testimonials.shipmentTitle}</h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase text-green-700">
                    {t.homeSections.testimonials.shipmentItems[3]?.value}
                  </span>
                </div>
                <dl className="grid grid-cols-2 gap-x-5 gap-y-4">
                  {t.homeSections.testimonials.shipmentItems.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xs text-gray-500">{item.label}</dt>
                      <dd className="mt-1 text-sm font-semibold leading-snug text-gray-800">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div>
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <h3 className="text-xl font-bold text-brand-800">{t.homeSections.testimonials.messagesTitle}</h3>
                <p className="text-sm text-gray-500">{t.homeSections.testimonials.messagesNote}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {[
                  "/customer-feedback/brian-feedback-trust.jpg",
                  "/customer-feedback/brian-feedback-packaging.jpg",
                  "/customer-feedback/brian-feedback-thanks.jpg",
                ].map((src, index) => (
                  <button
                    type="button"
                    key={src}
                    onClick={() => setLightbox({ src, alt: t.homeSections.testimonials.imageAlts[index] })}
                    aria-label={t.homeSections.testimonials.viewOriginal}
                    className="group relative block aspect-[1.72/1] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <Image
                      src={src}
                      alt={t.homeSections.testimonials.imageAlts[index]}
                      width={1117}
                      height={647}
                      className="h-full w-full rounded-xl object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-gray-950/75 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                      {t.homeSections.testimonials.viewOriginal}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid items-center gap-6 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm lg:grid-cols-[1.25fr_0.75fr] lg:p-6">
              <button
                type="button"
                onClick={() => setLightbox({ src: "/customer-feedback/brian-packaging-collage.jpg", alt: t.homeSections.testimonials.packingAlt })}
                aria-label={t.homeSections.testimonials.viewOriginal}
                className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                <Image
                  src="/customer-feedback/brian-packaging-collage.jpg"
                  alt={t.homeSections.testimonials.packingAlt}
                  width={1456}
                  height={1088}
                  className="h-full w-full rounded-xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-gray-950/75 px-3 py-1.5 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  {t.homeSections.testimonials.viewOriginal}
                </span>
              </button>
              <div className="p-3 lg:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">{t.homeSections.testimonials.packingLabel}</p>
                <h3 className="mt-3 text-2xl font-bold text-brand-800">{t.homeSections.testimonials.packingTitle}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">{t.homeSections.testimonials.packingDesc}</p>
                <p className="mt-5 text-sm font-semibold text-brand-600">{t.homeSections.testimonials.viewOriginal}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carriers */}
      <section className="py-16 lg:py-24 bg-gray-50" id="carriers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">
              {t.homeSections.carriers.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.homeSections.carriers.desc}
            </p>
          </div>
          <CarrierNetwork />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-800 to-brand-700 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-500 text-brand-900 px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              {t.cta.button}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/8615207122341"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.homeSections.specialist.whatsapp} · Chris Yu
            </a>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-gray-950/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/45 text-2xl text-white transition hover:bg-white hover:text-gray-900 sm:right-7 sm:top-7"
            aria-label={t.homeSections.testimonials.closeImage}
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="h-auto max-h-[90vh] w-auto max-w-[94vw] cursor-zoom-out rounded-xl object-contain shadow-2xl"
            onClick={() => setLightbox(null)}
          />
        </div>
      )}
    </>
  );
}







