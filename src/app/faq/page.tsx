"use client";

import Link from "next/link";
import { useT, useI18n } from "@/i18n";

export default function FaqPage() {
  const t = useT();
  const { locale } = useI18n();

  const relatedLinks = {
    0: { href: "/personal-shipping-from-china", en: "Personal shipping guide", zh: "个人进口运输指南" },
    1: { href: "/contact", en: "Get a quote", zh: "获取报价" },
    2: { href: "/services/warehousing", en: "Supplier collection and consolidation", zh: "提货与集货服务" },
    3: { href: "/shipping-from-china-to-usa", en: "Shipping to the USA", zh: "美国运输指南" },
    6: { href: "/shipment-cases#container-shipment-case", en: "View the 15-day shipment", zh: "查看这票15天整柜案例" },
    11: { href: "/services/customs-insurance", en: "Customs and insurance", zh: "清关与保险服务" },
    12: { href: "/about#verify", en: "Company information", zh: "查看公司信息" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://huanfalogistics.com/faq#faq",
          mainEntity: t.faqPage.items.map(item => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }).replace(/</g, "\\u003c"),
      }} />
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">{t.faqPage.page.title}</h1>
            <p className="text-lg text-blue-100/80">{t.faqPage.page.desc}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {t.faqPage.items.map((item, i) => (
            <details key={i} open={i === 0} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
              <summary
                className="w-full flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden"
              >
                <span className="font-semibold text-brand-800">{item.question}</span>
                <svg
                  className="w-5 h-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div id={`faq-answer-${i}`} className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                {item.answer}
                {relatedLinks[i as keyof typeof relatedLinks] && (
                  <Link
                    href={relatedLinks[i as keyof typeof relatedLinks].href}
                    className="mt-3 block font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900"
                  >
                    {relatedLinks[i as keyof typeof relatedLinks][locale]}
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t.faqPage.cta.title}</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t.faqPage.cta.desc}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 text-brand-900 px-6 py-3 rounded-lg font-bold hover:bg-accent-600 transition-colors"
          >
            {t.faqPage.cta.button}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
