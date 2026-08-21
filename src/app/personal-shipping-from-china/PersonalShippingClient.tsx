"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

const content = {
  en: {
    eyebrow: "Personal Import Shipping",
    title: "Shipping from China to Your Home",
    intro: "Bought furniture, lighting, building materials, machinery, or home goods from China? We help organize supplier pickup, consolidation, international freight, customs coordination, and delivery planning.",
    suitableTitle: "Suitable for personal purchases",
    suitable: ["Furniture and home décor", "Lighting and building materials", "Home appliances and machinery", "Goods from multiple suppliers"],
    processTitle: "How it works",
    steps: ["Send us your supplier and cargo details", "Confirm destination, packing, and delivery requirements", "Supplier delivery to our Shenzhen operation or arranged pickup", "Consolidation and shipping document check", "Ocean or air freight and customs coordination", "Final delivery under the confirmed service scope"],
    confirmTitle: "Confirmed before you ship",
    confirm: ["What the quoted price includes", "Estimated transit time", "Packing or pallet requirements", "Duties and customs responsibility", "Residential delivery scope", "Damage reporting and claims documents"],
    ctaTitle: "Not sure where to start?",
    ctaDesc: "Send Chris Yu the product list, supplier city, destination ZIP code, weight, volume, and delivery access restrictions.",
    whatsapp: "Ask Chris Yu on WhatsApp",
    quote: "Request a Shipping Plan",
  },
  zh: {
    eyebrow: "个人进口运输",
    title: "从中国运输到您的家中",
    intro: "从中国购买了家具、灯具、建材、机器或家居用品？我们可协助安排供应商提货、集货、国际运输、清关协调和末端派送方案。",
    suitableTitle: "适合个人采购的货物",
    suitable: ["家具与家居用品", "灯具与建筑材料", "家电与机器设备", "来自多个供应商的货物"],
    processTitle: "运输流程",
    steps: ["提供供应商和货物信息", "确认目的地、包装和派送要求", "供应商送货至深圳操作点或安排提货", "集货并核对运输资料", "安排海运或空运及清关协调", "按确认的服务范围安排末端派送"],
    confirmTitle: "出货前明确确认",
    confirm: ["报价包含的费用", "预计运输时效", "包装、托盘或木架要求", "关税与清关责任", "住宅派送范围", "破损申报与理赔资料"],
    ctaTitle: "不知道从哪里开始？",
    ctaDesc: "请把产品清单、供应商城市、目的地邮编、重量、体积和派送限制发给 Chris Yu。",
    whatsapp: "WhatsApp 咨询 Chris Yu",
    quote: "获取运输方案",
  },
} as const;

export default function PersonalShippingClient() {
  const { locale } = useI18n();
  const t = content[locale];

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">{t.eyebrow}</div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-6xl">{t.title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-blue-100/85">{t.intro}</p>
        </div></div>
      </section>
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
          {[[t.suitableTitle, t.suitable], [t.confirmTitle, t.confirm]].map(([title, items]) => (
            <div key={title as string} className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-brand-800">{title}</h2>
              <ul className="space-y-3">{(items as readonly string[]).map((item) => <li key={item} className="flex gap-3 text-gray-700"><span className="text-green-600">✓</span>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-brand-800 lg:text-4xl">{t.processTitle}</h2>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{t.steps.map((step, index) => (
            <li key={step} className="rounded-2xl border border-gray-100 bg-white p-6"><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 font-bold text-white">{index + 1}</div><div className="text-sm font-semibold leading-relaxed text-gray-800">{step}</div></li>
          ))}</ol>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-20"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold text-brand-800">{t.ctaTitle}</h2><p className="mb-8 text-gray-600">{t.ctaDesc}</p>
        <div className="flex flex-wrap justify-center gap-3"><a href="https://wa.me/8615207122341" target="_blank" rel="noreferrer" className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">{t.whatsapp}</a><Link href="/contact" className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">{t.quote}</Link></div>
      </div></section>
    </>
  );
}
