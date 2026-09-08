"use client";
import Link from "next/link";
import { useT, useI18n } from "@/i18n";
import OperationsGallery from "@/components/OperationsGallery";
import CarrierNetwork from "@/components/CarrierNetwork";
import ShipmentHighlights from "@/components/ShipmentHighlights";
import HeroVideo from "@/components/HeroVideo";
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
 return <>
{/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/75 via-brand-900/45 to-brand-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMDMiPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMwem0wIDMwaDMwdjMwSDMweiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
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
                href="#process"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                {t.hero.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

<div id="verify" className="border-b border-gray-100 bg-white"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm sm:px-6 lg:px-8"><span className="font-semibold text-brand-800">{locale === "zh" ? "深圳货物操作 · 企业与个人进口服务" : "Shenzhen cargo operations · Business & personal imports"}</span><Link href="/about#verify" className="inline-flex min-h-11 items-center font-medium text-brand-600 hover:underline">{locale === "zh" ? "查看公司信息与付款说明 →" : "Company details & payment information →"}</Link></div></div>

{/* Customer types */}
      <section className="bg-white py-12 lg:py-16" id="who-we-ship-for">
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

{/* Services */}
      <section className="py-12 lg:py-16 bg-gray-50" id="services">
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
                {locale === "zh" && <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">{t.services[key].subtitle}</p>}
                <p className="text-sm text-gray-600 leading-relaxed">{t.services[key].desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

<ShipmentHighlights />

{/* Process */}
      <section className="py-12 lg:py-16 bg-white" id="process">
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

{/* Real warehouse and team */}
      <section className="py-12 lg:py-16 bg-white" id="real">
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

<section id="about" className="bg-brand-50 py-14"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-center"><div><h2 className="mb-4 text-2xl font-bold text-brand-800">{locale === "zh" ? "一个联系人，持续跟进您的货物" : "One contact from quotation to delivery"}</h2><p className="leading-7 text-gray-600">{t.about.p1}</p></div><div className="flex flex-wrap gap-3"><Link href="/about" className="inline-flex min-h-11 items-center rounded-lg border border-brand-200 bg-white px-5 font-semibold text-brand-600">{t.about.learnMore}</Link><Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg bg-brand-600 px-5 font-semibold text-white">{locale === "zh" ? "联系 Chris Yu" : "Talk to Chris Yu"}</Link></div></div></div></section>

{/* Carriers */}
      <section className="py-12 lg:py-16 bg-gray-50" id="carriers">
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
</>;
}

