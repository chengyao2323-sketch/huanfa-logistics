"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

const copy = {
  en: {
    terms: "DDP vs DAP: who handles import clearance and taxes?",
    definition: "DDP means Delivered Duty Paid. In a sales contract, the seller handles import formalities and duties, delivering at the named destination ready for unloading. DAP leaves import clearance and taxes to the buyer. Door-to-door describes the journey; it can be arranged under either term.",
    role: "Huanfa coordinates your logistics. Our freight quote supports the agreed delivery arrangement; it does not replace the buyer–seller contract. Confirm the delivery point, importer of record, authorizations and customs information before booking. Using a forwarder does not remove product compliance or importer obligations.",
    transport: "DDP air or sea shipping: which should you choose?",
    modes: [
      { name: "DDP air shipping", fit: "Consider for smaller orders, samples or a tighter delivery deadline.", minimum: "Huanfa policy: no minimum shipment weight.", detail: "Provide packed dimensions and gross weight. Ask which chargeable-weight rule applies; a bulky light parcel may be billed above its actual weight." },
      { name: "DDP sea shipping", fit: "Consider for planned replenishment or larger, heavier general cargo when the schedule allows.", minimum: "Huanfa policy: from 12 kg.", detail: "Provide carton count, packed sizes, total weight and required arrival date. Confirm the route and its billing basis before comparing prices." },
    ],
    timing: "How long does DDP shipping take?",
    timingBody: "Request an estimate covering cargo receipt, departure, international transport, customs and final delivery—not just flight or sailing time. Cargo review, departure schedules, customs checks and the receiving postcode affect the end-to-end estimate. We confirm the available service and estimated window for your cargo before booking.",
    costs: "What is included in a DDP shipping quote?",
    costIntro: "Compare the complete delivery scope, not just a per-kilogram freight rate. Settle these items in your written Huanfa quotation.",
    rows: [
      ["Included DDP scope", "Agreed international transport, export and import clearance, import duties and taxes, and delivery to the agreed address. The recipient does not pay these included charges again at normal delivery."],
      ["Pickup and preparation", "Confirm supplier pickup or warehouse receipt, multi-supplier consolidation and packing before booking; their scope and price depend on the shipment."],
      ["Delivery and protection", "Declare residential access, appointments, unloading, liftgate, indoor or upstairs delivery, assembly and cargo insurance needs. These are not automatically included; availability and charges need written confirmation."],
      ["Changes or exceptions", "A different product, declared value, package size or address requires review. Agree how inspections, storage or failed delivery would be handled and charged before dispatch."],
    ],
    pricing: "There is no universal DDP price per kg. Product classification, value, dimensions, weight, route and destination all matter. Send accurate cargo details so the quote covers the correct customs and delivery scope.",
    sources: "Rules and shipment preparation",
    sourceIntro: "Service limits above are Huanfa's booking policies. For the underlying trade and handling rules, consult the issuing organizations:",
    evidence: "See our Shenzhen-to-Hawaii DDP case: 20 kg via UPS",
    evidenceNote: "This August 2026 DDP shipment arrived in 3 days from dispatch in China, including clearance and final delivery. That is the actual result for this shipment; other routes and delivery estimates need confirmation.",
    cta: "Send product details for a DDP quote",
  },
  zh: {
    terms: "DDP、DAP 与门到门，分别说明什么？",
    definition: "DDP 即完税后交货：在买卖合同中，由卖方办理进口手续并承担进口税费，在指定目的地将货物置于可供卸货的状态交付。DAP 则由买方负责进口清关及税费。“门到门”只描述运输范围，不能单凭这三个字判断是否包税。",
    role: "焕发负责物流方案协调，运输报价服务于双方约定的交付安排，不能代替买卖合同。订舱前需明确交货点、进口申报主体、所需授权及资料提供方。委托货代并不免除产品合规或进口申报主体的相应义务。",
    transport: "DDP 空运还是海运，怎样选择？",
    modes: [
      { name: "DDP 空运", fit: "适合优先评估小批量采购、样品或交付时间较紧的订单。", minimum: "焕发起运政策：无最低起运重量。", detail: "提供包装后尺寸与毛重，并确认计费重量规则；体积大、重量轻的包裹，计费重量可能高于实际重量。" },
      { name: "DDP 海运", fit: "适合提前备货、较重或较大批量的普货，且收货时间有余量的订单。", minimum: "焕发起运政策：12 kg 起运。", detail: "提供箱数、包装尺寸、总重量及期望到货日，先确认可用线路及计费口径，再比较价格。" },
    ],
    timing: "DDP 全程时效应该怎样确认？",
    timingBody: "询价时应确认从收货、出运、国际运输、清关到末端派送的预计时间，而非只看航班或航程天数。货物审核、班次、海关查验及收货邮编都会影响全程安排。订舱前，我们按实际货物确认可用方案与预计交付窗口。",
    costs: "DDP 报价包含哪些费用？",
    costIntro: "比较完整交付方案，而非只比较每公斤运费。请在焕发书面报价中确认以下内容。",
    rows: [
      ["DDP 包含范围", "约定的国际运输、出口及进口清关、进口关税和进口税费，以及约定地址派送。正常交付时，收件人不再重复支付这些已包含的费用。"],
      ["提货与出运准备", "供应商提货或仓库收货、多供应商集货及包装，在订舱前确认具体范围与费用。"],
      ["派送及货物保障", "提前说明住宅通行、预约、卸货、尾板、入户、上楼、安装及货物保险需求。这些并非自动包含，能否安排及收费须书面确认。"],
      ["变更及异常安排", "品名、申报货值、包装尺寸或收货地址变更，须重新审核。查验、仓储或派送失败如何处理及计费，也应在发货前明确。"],
    ],
    pricing: "DDP 没有适用于所有货物的统一公斤价。商品归类、货值、尺寸、重量、线路及目的地共同影响报价。请提供真实完整的货物资料，以核对清关、税费与派送范围。",
    sources: "规则来源与发货准备",
    sourceIntro: "本页起运门槛及承接范围属于焕发的业务政策；贸易及运输规则可查阅发布机构的说明：",
    evidence: "查看深圳至夏威夷 DDP 案例：20 kg 普货 · UPS",
    evidenceNote: "2026年8月这票 DDP 货物从中国发运至目的地交付实际3天，包含清关与末端派送。该时效仅代表本票，其他线路与预计时效需按货物确认。",
    cta: "提供货物资料，获取 DDP 报价",
  },
};

export function DdpPlanningGuide() {
  const { locale } = useI18n();
  const c = copy[locale];
  return <>
    <section id="ddp-terms" className="mt-12 border-t border-slate-200 pt-10" aria-labelledby="ddp-terms-title">
      <h2 id="ddp-terms-title" className="text-2xl font-bold text-brand-800">{c.terms}</h2>
      <p className="mt-4 max-w-5xl text-base leading-8 text-slate-700">{c.definition}</p>
      <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-600">{c.role}</p>
    </section>
    <section id="ddp-options" className="mt-12" aria-labelledby="ddp-options-title">
      <h2 id="ddp-options-title" className="text-2xl font-bold text-brand-800">{c.transport}</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">{c.modes.map(m => <article key={m.name} className="rounded-xl border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-brand-800">{m.name}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">{m.fit}</p>
        <p className="mt-4 font-semibold text-brand-700">{m.minimum}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600">{m.detail}</p>
      </article>)}</div>
      <h3 className="mt-6 text-lg font-bold text-brand-800">{c.timing}</h3>
      <p className="mt-3 max-w-5xl text-sm leading-7 text-slate-600">{c.timingBody}</p>
    </section>
    <section id="ddp-costs" className="mt-12" aria-labelledby="ddp-costs-title">
      <h2 id="ddp-costs-title" className="text-2xl font-bold text-brand-800">{c.costs}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{c.costIntro}</p>
      <dl className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 px-5 sm:px-6">{c.rows.map(([title,body]) => <div key={title} className="grid gap-2 py-5 md:grid-cols-[190px_minmax(0,1fr)] md:gap-6">
        <dt className="font-semibold text-brand-800">{title}</dt><dd className="text-sm leading-7 text-slate-600">{body}</dd>
      </div>)}</dl>
      <p className="mt-4 text-sm leading-7 text-slate-600">{c.pricing}</p>
    </section>
  </>;
}

export function DdpReferences() {
  const { locale } = useI18n();
  const c = copy[locale];
  return <section className="mt-10 rounded-xl bg-slate-50 p-6" aria-labelledby="ddp-references-title">
    <h2 id="ddp-references-title" className="text-lg font-bold text-brand-800">{c.sources}</h2>
    <p className="mt-3 text-sm leading-7 text-slate-600">{c.sourceIntro}</p>
    <ul className="mt-3 space-y-2 text-sm text-brand-700">
      <li><a className="underline underline-offset-4" href="https://academy.iccwbo.org/incoterms/article/incoterms-2020-dap-or-ddp/">ICC Academy — DAP &amp; DDP / Incoterms® 2020</a></li>
      <li><a className="underline underline-offset-4" href="https://www.iata.org/en/programs/cargo/dangerous-goods/lithium-batteries/">IATA — {locale === "zh" ? "电池航空运输指导" : "Battery air transport guidance"}</a></li>
      <li><a className="underline underline-offset-4" href="https://www.ippc.int/en/publications/640/">IPPC — ISPM 15 / {locale === "zh" ? "国际贸易中的木质包装" : "Wood packaging in international trade"}</a></li>
    </ul>
    <Link href="/shipment-cases#hawaii-express" className="mt-6 inline-block text-sm font-semibold text-brand-700 underline underline-offset-4">{c.evidence} →</Link>
    <p className="mt-2 text-xs leading-6 text-slate-500">{c.evidenceNote}</p>
    <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700">{c.cta} →</Link>
  </section>;
}
