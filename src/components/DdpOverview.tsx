"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function DdpOverview() {
  const { locale } = useI18n();
  const zh = locale === "zh";
  const facts = zh ? [
    ["清关与税费统一处理", "确认的 DDP 方案含出口及进口清关、进口关税和清关税费，正常签收时不再收取这些已含费用。"],
    ["空运无最低起运重量", "小件与大件普货均可提供资料评估；海运最低 12 kg 起运。费用按货物和目的地询价。"],
    ["企业与个人均可咨询", "美国、加拿大、欧洲为重点，澳洲也可安排。商业地址与住宅派送按具体国家、邮编和货物确认。"],
  ] : [
    ["Clearance, duties and taxes handled", "Confirmed DDP quotes include export and import clearance and import duties and taxes, with no repeat collection of those included charges at normal delivery."],
    ["Air: no minimum shipment weight", "Small parcels and larger general cargo can be reviewed. Sea shipping starts at 12 kg; request a quote for your goods and destination."],
    ["For your business or your home", "USA, Canada and Europe are our focus; Australia is also available. Business and residential delivery are reviewed against the country, postcode and cargo."],
  ];
  return <section className="bg-brand-50 py-12 lg:py-16" aria-labelledby="ddp-overview-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-600">{zh ? "主推服务" : "Our core service"}</p>
      <h2 id="ddp-overview-title" className="mt-3 text-2xl font-bold text-brand-800 lg:text-3xl">{zh ? "DDP 双清包税到门，让跨境运输安排更清楚" : "DDP door-to-door shipping from China"}</h2>
      <div className="mt-7 grid gap-6 md:grid-cols-3">{facts.map(([title, body]) => <article key={title} className="border-l-2 border-brand-300 pl-4">
        <h3 className="font-bold text-brand-800">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
      </article>)}</div>
      <Link href="/services/door-to-door" className="mt-7 inline-flex min-h-11 items-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700">{zh ? "查看 DDP 服务、货物范围与起运要求 →" : "Explore DDP services, cargo acceptance and minimums →"}</Link>
    </div>
  </section>;
}
