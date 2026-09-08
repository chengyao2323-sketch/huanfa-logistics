"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useT, useI18n } from "@/i18n";
import ContainerShipmentCase from "./ContainerShipmentCase";
import ImageLightbox from "./ImageLightbox";
export default function CustomerStories() {
  const t = useT();
  const {locale} = useI18n();
  const [lightbox, setLightbox] = useState<{src:string;alt:string}|null>(null);
  return <>
  {/* Verified customer feedback */}
      <section className="bg-gray-50 py-16 lg:py-24" id="customer-feedback">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <h1 className="mb-4 text-3xl font-bold text-brand-800 lg:text-4xl">
              {t.homeSections.testimonials.title}
            </h1>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t.homeSections.testimonials.desc}
            </p>
          </div>

          <div id="hawaii-express" className="scroll-mt-28 space-y-8">
            <h2 className="text-2xl font-bold text-brand-800">{locale === "zh" ? "深圳至美国夏威夷 · 20 kg 快递案例" : "Shenzhen to Hawaii · 20 kg Express Shipment"}</h2>
            <p className="text-sm leading-6 text-gray-500">{locale === "zh" ? "3天为本票运输记录，并非其他货件的时效承诺。您的路线及预计时效将在报价时确认。" : "The 3-day time relates to this shipment only, not a guarantee for other cargo. Your route and estimated timing are confirmed at quotation."}</p>
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
          <ContainerShipmentCase onOpen={setLightbox} />
        </div>
      </section>
  <div className="bg-white px-4 py-12 text-center"><h2 className="mb-5 text-2xl font-bold text-brand-800">{locale === "zh" ? "有类似货物需要运输？" : "Planning a similar shipment?"}</h2><Link href="/contact" className="inline-flex rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white">{locale === "zh" ? "咨询您的运输方案" : "Discuss your shipment"}</Link></div>
  <ImageLightbox image={lightbox} onClose={() => setLightbox(null)} closeLabel={t.homeSections.testimonials.closeImage} />
  </>;
}
