"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

const content = {
  en: {
    home: "Home", title: "Shipping from China to the USA",
    intro: "Buying from one factory or several suppliers? Huanfa Logistics coordinates pickup, consolidation in Shenzhen, ocean or air freight, customs coordination and final delivery for businesses and personal importers. Your cargo and US delivery address determine the available plan.",
    quote: "Request a US shipping quote", optionsTitle: "Choose a service around your cargo and deadline",
    options: [
      { title: "Ocean freight: FCL or LCL", body: "A full container (FCL) can suit larger orders; shared-container shipping (LCL) may suit smaller volumes. Send packed dimensions and weight so we can compare the complete plan, including origin handling and destination delivery.", href: "/services/sea-freight", link: "Compare ocean freight options" },
      { title: "Air freight and express", body: "For urgent goods, share the ready date, packed size, weight and required delivery date. Available options depend on the actual goods and destination; a heavy or bulky package can change the cost comparison.", href: "/services/air-freight", link: "Plan air or express shipping" },
      { title: "Several suppliers, one receiving plan", body: "Before suppliers dispatch, agree receiving references and arrival dates for the Shenzhen operation. Consolidation, repacking and onward transport can then be coordinated around the cargo that is ready.", href: "/services/warehousing", link: "Arrange Shenzhen consolidation" },
    ],
    scopeTitle: "Compare the whole quote, from pickup to handover",
    scopeIntro: "Ask for a written service scope rather than comparing the international freight charge alone. Confirm which of these items are included, excluded or subject to the final cargo details:",
    scope: ["Supplier pickup, receiving and consolidation", "Packing, crating, storage and export handling", "International freight and destination handling", "Customs coordination, duties and taxes, and the responsible parties", "Final delivery, appointment, liftgate and unloading arrangements", "Any requested cargo insurance and its terms"],
    deliveryTitle: "A US ZIP code is only the start of delivery planning",
    delivery: "Tell us whether the destination is a business, residence or fulfillment facility. For a home delivery, explain truck access, unloading equipment and whether you need an appointment or liftgate. Door-to-door does not automatically include carrying goods upstairs, indoor placement or installation. Hawaii and other non-contiguous destinations need their own route and delivery confirmation.",
    furniture: "Buying furniture or home goods from China?", furnitureLink: "Read the personal shipping and furniture checklist",
    timeTitle: "How long does China-to-USA shipping take?",
    time: "Request an estimated end-to-end window for your actual shipment and confirm its starting point. Supplier readiness, consolidation, the booked transport, customs release and final delivery scheduling all affect the plan. A vessel or flight transit time alone is not the complete delivery time.",
    caseTitle: "Completed shipments, with original customer feedback",
    cases: [
      { title: "Shenzhen → Roseville, California", body: "40-foot FCL carrying furniture, lighting and other goods, July 2026. Actual end-to-end delivery: 15 days from dispatch in China to delivery at the US destination, including the ocean journey and final delivery.", href: "/shipment-cases#container-shipment-case", link: "See loading photos and customer feedback" },
      { title: "Shenzhen → Hawaii", body: "20 kg general cargo sent by UPS, August 2026. Actual end-to-end delivery: 3 days from dispatch in China to delivery at the Hawaii destination, including final delivery.", href: "/shipment-cases#hawaii-express", link: "See packaging and customer feedback" },
    ],
    caseNote: "These are completed shipment results, not promised delivery times for another booking. We confirm the available route and estimated end-to-end timing for your cargo.",
    faqTitle: "Before requesting a quote",
    faq: [
      { question: "Can you ship furniture bought from different Chinese suppliers?", answer: "We can coordinate receiving and consolidation, subject to cargo review. Send the supplier list, items, ready dates and packed measurements. Confirm receiving instructions before arranging deliveries to the warehouse." },
      { question: "Does door-to-door shipping include customs charges?", answer: "Check the written quotation. Agree who provides the import documents and who pays duties, taxes and destination charges before booking. Do not assume these are included because a service is described as door-to-door." },
      { question: "What if I do not know the shipment volume yet?", answer: "Start with product photos, quantities, supplier locations and the US ZIP code. Ask suppliers for packed dimensions and gross weights; final packing information is needed to confirm the transport price and handling plan." },
    ],
    ctaTitle: "Tell Chris Yu what you are buying and where it needs to go",
    cta: "Send the product list, supplier cities, packed dimensions and weight if known, ready dates and full US delivery details. Mention fragile items, batteries, liquids or any special handling needs for cargo review.",
    company: "View company details", whatsapp: "Ask Chris on WhatsApp",
  },
  zh: {
    home: "首页", title: "中国到美国运输",
    intro: "从一家工厂或多家供应商采购？焕发国际物流为企业和个人进口客户协调提货、深圳集货、海运或空运、清关及末端派送。具体运输方案按货物情况和美国收货地址确认。",
    quote: "获取美国运输报价", optionsTitle: "按货物和交付需求选择运输方案",
    options: [
      { title: "海运整柜或拼箱", body: "较大批量可比较整柜，小批量可评估拼箱。提供包装后尺寸和重量，以便比较包含起运地操作和目的地派送的完整方案。", href: "/services/sea-freight", link: "了解海运方案" },
      { title: "空运与国际快递", body: "急件请提供备货日期、包装尺寸、重量和期望送达日期。可用方案取决于实际货物与目的地，超重或大体积包装会影响费用比较。", href: "/services/air-freight", link: "规划空运或快递" },
      { title: "多家供应商统一集货", body: "供应商发货前，先确认深圳操作点的收货标识与到货日期，再根据货物到齐情况协调集货、包装和后续运输。", href: "/services/warehousing", link: "安排深圳集货" },
    ],
    scopeTitle: "从提货到交付，比较完整报价",
    scopeIntro: "请确认书面服务范围，而不只比较国际运费。以下费用哪些包含、哪些不含、哪些需要按最终货物资料核定，应在订舱前明确：",
    scope: ["供应商提货、收货及集货", "包装、木箱、仓储与出口操作", "国际运费与目的地操作", "清关协调、关税及税费，以及各方责任", "末端派送、预约、尾板及卸货安排", "按需购买的货物保险及其条款"],
    deliveryTitle: "住宅派送需要确认的不只是美国邮编",
    delivery: "请说明目的地是商业地址、住宅还是履约仓。住宅收货需确认货车通行、卸货设备以及预约、尾板需求。门到门不默认包含上楼、入户搬运或安装。夏威夷等美国非本土目的地需单独确认线路和派送方案。",
    furniture: "从中国购买家具或家居用品？", furnitureLink: "查看个人运输与家具准备清单",
    timeTitle: "中国到美国运输需要多久？",
    time: "请针对实际货物询问预计全程时效，并确认起算节点。供应商备货、集货、所订运输班次、清关放行和末端预约都会影响方案。船舶或航班运输时间不等于完整交付时间。",
    caseTitle: "已完成运输与客户原始反馈",
    cases: [
      { title: "深圳 → 美国加州 Roseville", body: "2026年7月，40英尺整柜，家具、灯具及其他货物。从中国发运至美国目的地交付，本票实际全程15天，包含海运及末端派送。", href: "/shipment-cases#container-shipment-case", link: "查看装柜照片及客户反馈" },
      { title: "深圳 → 夏威夷", body: "2026年8月，UPS运输20 kg普货。从中国发运至夏威夷目的地交付，本票实际全程3天，包含末端派送。", href: "/shipment-cases#hawaii-express", link: "查看包装与客户反馈" },
    ],
    caseNote: "以上为已完成货物的实际结果，并非其他订单的时效承诺。可用线路和预计全程时效按具体货物确认。",
    faqTitle: "询价前常见问题",
    faq: [
      { question: "可以合并不同中国供应商采购的家具吗？", answer: "经货物审核后，可协调收货及集货。请提供供应商清单、品名、备货日期及包装后尺寸，确认收货指引后再让供应商送仓。" },
      { question: "门到门包含清关相关费用吗？", answer: "请以书面报价为准。订舱前确认进口资料由谁提供，关税、税费及目的地费用由谁承担，不应仅根据“门到门”名称判断费用是否包含。" },
      { question: "还不知道货物体积，可以先询价吗？", answer: "可以先提供产品照片、数量、供应商地点及美国邮编。请供应商补充包装后尺寸和毛重，最终运输价格与操作方案需要依据实际包装资料确认。" },
    ],
    ctaTitle: "告诉 Chris Yu 您采购的货物和收货地点",
    cta: "提供产品清单、供应商城市、已知的包装尺寸及重量、备货日期和完整美国收货信息。易碎品、电池、液体或其他特殊操作需求请提前说明，以便审核。",
    company: "查看公司信息", whatsapp: "WhatsApp 咨询 Chris",
  },
};

export default function UsaShipping() {
  const { locale } = useI18n();
  const t = content[locale];
  return <>
    <header className="bg-brand-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <nav aria-label={locale === "zh" ? "面包屑导航" : "Breadcrumb"} className="mb-6 text-sm text-blue-200"><Link href="/" className="hover:underline">{t.home}</Link><span aria-hidden="true"> / </span><span aria-current="page">{t.title}</span></nav>
        <h1 className="max-w-4xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">{t.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-blue-100">{t.intro}</p>
        <Link href="/contact" className="mt-7 inline-flex min-h-11 items-center rounded-lg bg-accent-500 px-6 py-3 font-bold text-brand-900 hover:bg-accent-600">{t.quote}</Link>
      </div>
    </header>
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <section><h2 className="mb-6 text-2xl font-bold text-brand-800">{t.optionsTitle}</h2><div className="grid gap-6 lg:grid-cols-3">{t.options.map(item => <article key={item.title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-lg font-bold text-brand-800">{item.title}</h3><p className="my-4 text-sm leading-7 text-slate-600">{item.body}</p><Link href={item.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-600 hover:underline">{item.link} →</Link></article>)}</div></section>
      <div className="grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl bg-slate-50 p-6 sm:p-8"><h2 className="mb-4 text-2xl font-bold text-brand-800">{t.scopeTitle}</h2><p className="mb-4 text-sm leading-7 text-slate-600">{t.scopeIntro}</p><ul className="list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">{t.scope.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section className="p-2 sm:p-8"><h2 className="mb-4 text-2xl font-bold text-brand-800">{t.deliveryTitle}</h2><p className="text-sm leading-7 text-slate-600">{t.delivery}</p><p className="mt-6 font-semibold text-brand-800">{t.furniture}</p><Link href="/personal-shipping-from-china" className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-brand-600 hover:underline">{t.furnitureLink} →</Link></section>
      </div>
      <section className="max-w-4xl"><h2 className="mb-4 text-2xl font-bold text-brand-800">{t.timeTitle}</h2><p className="text-sm leading-7 text-slate-600">{t.time}</p></section>
      <section><h2 className="mb-6 text-2xl font-bold text-brand-800">{t.caseTitle}</h2><div className="grid gap-6 md:grid-cols-2">{t.cases.map(item => <article key={item.title} className="rounded-2xl border border-brand-100 bg-brand-50 p-6"><h3 className="text-lg font-bold text-brand-800">{item.title}</h3><p className="my-4 text-sm leading-7 text-slate-600">{item.body}</p><Link href={item.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-600 hover:underline">{item.link} →</Link></article>)}</div><p className="mt-4 text-sm leading-6 text-slate-600">{t.caseNote}</p></section>
      <section><h2 className="mb-5 text-2xl font-bold text-brand-800">{t.faqTitle}</h2><div className="divide-y divide-slate-200 rounded-xl border border-slate-200 px-6">{t.faq.map(item => <details key={item.question} className="py-4"><summary className="cursor-pointer py-2 font-semibold text-brand-800">{item.question}</summary><p className="max-w-4xl py-3 text-sm leading-7 text-slate-600">{item.answer}</p></details>)}</div></section>
      <section className="rounded-2xl bg-brand-900 p-6 text-white sm:p-10"><h2 className="text-2xl font-bold">{t.ctaTitle}</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-blue-100">{t.cta}</p><div className="mt-6 flex flex-wrap gap-4"><Link href="/contact" className="rounded-lg bg-accent-500 px-5 py-3 font-bold text-brand-900 hover:bg-accent-600">{t.quote}</Link><a href="https://wa.me/8615207122341" target="_blank" rel="noreferrer" className="rounded-lg border border-white/40 px-5 py-3 hover:bg-white/10">{t.whatsapp}</a><Link href="/about#verify" className="px-2 py-3 underline underline-offset-4">{t.company}</Link></div></section>
    </div>
  </>;
}
