"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";
import ShipmentProcessSteps from "@/components/ShipmentProcessSteps";

const content = {
  en: {
    eyebrow: "Personal Import Shipping",
    title: "Shipping from China to Your Home",
    intro: "Bought furniture, lighting, building materials, machinery, or home goods from China? We help organize supplier pickup, consolidation, international freight, customs coordination, and delivery planning.",
    suitableTitle: "Suitable for personal purchases",
    suitable: ["Furniture and home décor", "Lighting and building materials", "Home appliances and machinery", "Goods from multiple suppliers"],
    processTitle: "How it works",
    steps: [
      { title: "Share cargo details", desc: "Send us your supplier and cargo details." },
      { title: "Confirm requirements", desc: "Confirm destination, packing, and delivery requirements." },
      { title: "Pickup / warehouse intake", desc: "Supplier delivery to our Shenzhen operation or arranged pickup." },
      { title: "Consolidate & check", desc: "Consolidation and shipping document check." },
      { title: "Freight & customs", desc: "Ocean or air freight and customs coordination." },
      { title: "Final delivery", desc: "Final delivery under the confirmed service scope." },
    ],
    confirmTitle: "Confirmed before you ship",
    confirm: ["What the quoted price includes", "Estimated transit time", "Packing or pallet requirements", "Duties and customs responsibility", "Residential delivery scope", "Damage reporting and claims documents"],
    checklistTitle: "Prepare your furniture shipment before suppliers dispatch",
    checklist: [
      { title: "One list for all your purchases", body: "List each supplier, product, quantity and ready date. Ask for dimensions and gross weight after packaging, including any wooden crates or pallets. Keep invoices and packing lists linked to the corresponding supplier orders." },
      { title: "Show how the goods are packed", body: "Send photos of fragile surfaces, glass, corners and the proposed packaging. Explain whether pieces can be disassembled and flag heavy or oversized items. Agree any repacking or crating work before goods leave the supplier." },
      { title: "Plan the final handover", body: "Share the destination postcode, whether a delivery truck can reach the address, and who can unload and move the cargo. Flag stairs, narrow access and any need for a liftgate or appointment before accepting the delivery plan." },
    ],
    ctaTitle: "Not sure where to start?",
    ctaDesc: "Send Chris Yu the product list, supplier city and destination ZIP code. Add weight, volume and delivery access details if known; a supplier packing list can help fill the gaps.",
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
    steps: [
      { title: "提供货物信息", desc: "提供供应商和货物信息。" },
      { title: "确认运输要求", desc: "确认目的地、包装和派送要求。" },
      { title: "提货或送仓", desc: "供应商送货至深圳操作点或安排提货。" },
      { title: "集货与资料核对", desc: "集货并核对运输资料。" },
      { title: "国际运输与清关", desc: "安排海运或空运及清关协调。" },
      { title: "末端派送", desc: "按确认的服务范围安排末端派送。" },
    ],
    confirmTitle: "出货前明确确认",
    confirm: ["报价包含的费用", "预计运输时效", "包装、托盘或木架要求", "关税与清关责任", "住宅派送范围", "破损申报与理赔资料"],
    checklistTitle: "供应商发货前，准备好家具运输资料",
    checklist: [
      { title: "把不同供应商的采购汇成一份清单", body: "列出供应商、品名、数量和备货日期，并索取包装后的尺寸与毛重，包括木箱或托盘。发票、装箱单与对应的供应商订单应能相互核对。" },
      { title: "先看包装，再安排发运", body: "提供易损表面、玻璃、边角及计划包装方式的照片，说明家具是否可拆卸，以及超重或超大件情况。需要重新包装或打木箱时，应在供应商发货前确认操作方案。" },
      { title: "提前规划住宅收货", body: "提供目的地邮编，说明货车能否抵达，以及由谁卸货和搬运。楼梯、狭窄通道、尾板或预约需求，都应在接受派送方案前提出。" },
    ],
    ctaTitle: "不知道从哪里开始？",
    ctaDesc: "请先把产品清单、供应商城市和目的地邮编发给 Chris Yu，再补充已知的重量、体积及派送限制。暂时不清楚的可通过供应商装箱单进一步核对。",
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
      <section className="bg-white pb-16 lg:pb-20" aria-labelledby="personal-checklist-title">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="personal-checklist-title" className="mb-8 text-2xl font-bold text-brand-800 sm:text-3xl">{t.checklistTitle}</h2>
          <div className="space-y-6">
            {t.checklist.map(item => <article key={item.title} className="border-l-2 border-brand-200 pl-5">
              <h3 className="mb-2 text-lg font-bold text-brand-800">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{item.body}</p>
            </article>)}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <aside className="mb-10 rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-slate-700">
            <h2 className="mb-2 font-bold text-brand-800">{locale === "zh" ? "送货到家前，需要确认什么？" : "Before arranging home delivery"}</h2>
            <p>{locale === "zh" ? "门到门不默认包含卸货、尾板、上楼、入户或安装。请提前说明道路通行及卸货条件；可提供的服务和费用以书面报价为准。" : "Door-to-door does not automatically include unloading, liftgate, upstairs or indoor delivery, or installation. Share road access and unloading conditions in advance; available services and charges are confirmed in the written quote."}</p>
            <Link href="/shipment-cases#container-shipment-case" className="mt-4 inline-flex min-h-11 items-center font-semibold text-brand-600 hover:underline">{locale === "zh" ? "查看深圳至美国加州的真实整柜案例 →" : "View a real Shenzhen-to-California container shipment →"}</Link>
          </aside>
          <section id="process" className="scroll-mt-36" aria-labelledby="personal-process-title">
            <h2 id="personal-process-title" className="mb-10 text-center text-3xl font-bold text-brand-800 lg:mb-12 lg:text-4xl">{t.processTitle}</h2>
            <ShipmentProcessSteps steps={t.steps} />
          </section>
        </div>
      </section>
      <section className="bg-white py-16 lg:py-20"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold text-brand-800">{t.ctaTitle}</h2><p className="mb-8 text-gray-600">{t.ctaDesc}</p>
        <div className="flex flex-wrap justify-center gap-3"><a href="https://wa.me/8615207122341" target="_blank" rel="noreferrer" className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">{t.whatsapp}</a><Link href="/contact?customer=personal" className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700">{t.quote}</Link></div>
      </div></section>
    </>
  );
}
