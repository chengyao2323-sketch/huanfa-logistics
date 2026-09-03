"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";
import { serviceOrder, servicePaths, servicesContent } from "@/content/services";
import ServiceIcon from "./ServiceIcon";

export default function ServicesOverview() {
  const { locale } = useI18n();
  const { ui, services } = servicesContent[locale];

  return <>
    <header className="bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <p className="mb-3 text-xs font-bold tracking-[0.18em] text-accent-500">{ui.eyebrow}</p>
        <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{ui.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300">{ui.intro}</p>
      </div>
    </header>
    <section className="bg-slate-50 py-10 sm:py-12" aria-labelledby="service-choice-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 id="service-choice-title" className="text-2xl font-bold text-brand-800">{ui.choiceTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{ui.choiceNote}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {serviceOrder.map((key, index) => {
            const svc = services[key];
            return <article key={key} data-service={key} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><ServiceIcon service={key} /></span>
                  <h3 className="text-xl font-bold text-brand-800">{svc.name}</h3>
                </div>
                <span aria-hidden="true" className="text-xs font-semibold tracking-wider text-slate-400">0{index + 1}</span>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">{svc.summary}</p>
              <div className="mb-5 border-l-2 border-accent-500 pl-3">
                <p className="mb-1 text-[10px] font-bold tracking-widest text-slate-500">{ui.fitLabel}</p>
                <p className="text-sm font-medium leading-relaxed text-brand-800">{svc.fit}</p>
              </div>
              <ul className="mb-5 flex flex-wrap gap-2">
                {svc.highlights.map(item => <li key={item} className="rounded-md bg-slate-50 px-2.5 py-1 text-xs leading-5 text-slate-600">{item}</li>)}
              </ul>
              <Link href={servicePaths[key]} className="mt-auto inline-flex min-h-11 items-center justify-between gap-4 border-t border-slate-100 pt-4 text-sm font-semibold text-brand-600 hover:text-blue-700 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600">
                {svc.linkLabel}<span aria-hidden="true" className="text-xl">→</span>
              </Link>
            </article>;
          })}
          <aside className="flex flex-col justify-center rounded-2xl bg-brand-900 p-7 text-white sm:p-8">
            <span aria-hidden="true" className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-xl text-accent-500">?</span>
            <h2 className="mb-3 text-2xl font-bold">{ui.helpTitle}</h2>
            <p className="max-w-md text-sm leading-7 text-slate-300">{ui.helpBody}</p>
            <Link href="/contact" className="mt-6 inline-flex min-h-11 w-fit items-center gap-3 rounded-lg bg-accent-500 px-5 py-3 text-sm font-bold text-brand-900 hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{ui.helpButton}<span aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </div>
    </section>
  </>;
}
