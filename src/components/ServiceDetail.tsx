"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";
import { servicesContent, type ServiceKey } from "@/content/services";
import ServiceIcon from "./ServiceIcon";
import ServiceProofPhotos from "./ServiceProofPhotos";

export default function ServiceDetail({ service }: { service: ServiceKey }) {
  const { locale } = useI18n();
  const { ui, services } = servicesContent[locale];
  const svc = services[service];

  return <>
    <header className="bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8 lg:py-12">
        <nav aria-label={locale === "zh" ? "面包屑导航" : "Breadcrumb"} className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <Link href="/services" className="underline-offset-4 hover:underline">{ui.allServices}</Link><span aria-hidden="true">/</span><span aria-current="page">{svc.name}</span>
        </nav>
        <div className="mb-4 flex items-center gap-3 text-accent-500"><ServiceIcon service={service} /><span className="text-xs font-bold uppercase tracking-[0.15em]">{svc.name}</span></div>
        <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">{svc.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">{svc.intro}</p>
      </div>
    </header>
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
        <div className="min-w-0">
          <section aria-labelledby="service-guide-title">
            <h2 id="service-guide-title" className="mb-2 text-2xl font-bold text-brand-800">{svc.guideTitle}</h2>
            <div className="divide-y divide-slate-100">
              {svc.topics.map((topic, index) => <article key={topic.title} className="flex gap-4 py-6">
                <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">0{index + 1}</span>
                <div><h3 className="mb-2 text-lg font-bold text-brand-800">{topic.title}</h3><p className="text-sm leading-7 text-slate-600">{topic.body}</p></div>
              </article>)}
            </div>
          </section>
          <aside className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="mb-2 text-sm font-bold text-brand-800">{ui.noteTitle}</h2>
            <p className="text-sm leading-6 text-slate-700">{svc.note}</p>
          </aside>
          {service === "warehousing" && <ServiceProofPhotos />}
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6" aria-labelledby="service-quote-title">
          <h2 id="service-quote-title" className="mb-5 text-xl font-bold text-brand-800">{ui.quoteTitle}</h2>
          <ul className="space-y-4">
            {svc.requirements.map(item => <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-700"><span className="mt-0.5 font-bold text-green-700" aria-hidden="true">✓</span>{item}</li>)}
          </ul>
          <p className="mt-6 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">{ui.quoteNote}</p>
          <Link href="/contact" className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-center text-sm font-bold text-white hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">{ui.quoteButton}<span aria-hidden="true">→</span></Link>
        </aside>
      </div>
      <section className="mt-12 border-t border-slate-200 pt-10" aria-labelledby="service-steps-title">
        <h2 id="service-steps-title" className="mb-6 text-2xl font-bold text-brand-800">{ui.stepsTitle}</h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {svc.steps.map((step, index) => <li key={step.title} className="rounded-xl bg-slate-50 p-5">
            <span className="mb-3 block text-xs font-bold tracking-wider text-brand-600">0{index + 1}</span>
            <h3 className="mb-2 font-bold text-brand-800">{step.title}</h3><p className="text-sm leading-6 text-slate-600">{step.body}</p>
          </li>)}
        </ol>
      </section>
      <section className="mt-12" aria-labelledby="service-faq-title">
        <h2 id="service-faq-title" className="mb-5 text-2xl font-bold text-brand-800">{ui.faqTitle}</h2>
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 px-5 sm:px-6">
          {svc.faq.map(item => <details key={item.question} className="group py-1">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden">{item.question}<span aria-hidden="true" className="text-xl font-normal group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl font-normal group-open:block">−</span></summary>
            <p className="max-w-4xl pb-5 text-sm leading-7 text-slate-600">{item.answer}</p>
          </details>)}
        </div>
      </section>
      <Link href="/services" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"><span aria-hidden="true">←</span>{ui.allServices}</Link>
    </div>
  </>;
}
