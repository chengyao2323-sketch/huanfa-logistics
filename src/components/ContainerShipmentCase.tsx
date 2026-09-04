"use client";

import Image from "next/image";
import { useI18n } from "@/i18n";

type ProofImage = { src: string; alt: string };

export default function ContainerShipmentCase({ onOpen }: { onOpen: (image: ProofImage) => void }) {
  const { locale } = useI18n();
  const zh = locale === "zh";
  const copy = zh ? {
    title: "深圳至美国 · 40英尺整柜海运案例",
    quote: "非常感谢你，我还有更多业务交给你。",
    customer: "美国客户",
    source: "WhatsApp 客户反馈节选 · 中文译文",
    shipmentTitle: "对应出货记录",
    delivered: "已签收",
    facts: [
      ["路线", "中国深圳 → 美国加州 Roseville"],
      ["运输方式", "海运 · 快船服务"],
      ["柜型", "40英尺整柜（FCL）"],
      ["货物", "家具、灯具等货物"],
      ["运输时效", "15天"],
      ["出货月份", "2026年7月"],
    ],
    note: "15天为本票实际运输时效，不代表其他货件的时效承诺；具体船期及预计时效以订舱确认为准。",
    messagesTitle: "客户原始聊天记录",
    messagesNote: "运输需求 → 货物数量核对 → 客户评价",
    labels: ["运输需求", "货物数量核对", "客户评价"],
    imageAlts: ["客户提出40英尺集装箱运输需求的聊天截图", "核对收到的灯具数量的聊天截图", "客户表示感谢并表达继续合作意愿的聊天截图"],
    packingLabel: "出货准备",
    packingTitle: "该票货物装柜实拍",
    packingDesc: "两张现场照片记录了木箱货物装入集装箱，以及柜内木架支撑的情况。",
    photoLabels: ["装柜现场", "柜内货物与木架支撑"],
    enlarge: "点击任意图片在当前页面放大",
  } : {
    title: "Shenzhen to the USA · 40-Foot FCL Shipment",
    quote: "Thank you so much. I have more business for you.",
    customer: "US customer",
    source: "Excerpt from customer feedback via WhatsApp",
    shipmentTitle: "Shipment connected to this feedback",
    delivered: "Delivered",
    facts: [
      ["Route", "Shenzhen, China → Roseville, California, USA"],
      ["Service", "Ocean freight · fast vessel service"],
      ["Container", "40-foot full container load (FCL)"],
      ["Cargo", "Furniture, lighting and other goods"],
      ["Transit time", "15 days"],
      ["Shipment month", "July 2026"],
    ],
    note: "15 days is the actual transit time for this shipment, not a guarantee for other shipments. Sailing schedules and estimated transit times are confirmed at booking.",
    messagesTitle: "Original customer messages",
    messagesNote: "Shipping requirements → Quantity check → Customer feedback",
    labels: ["Shipping requirements", "Cargo quantity check", "Customer feedback"],
    imageAlts: ["Customer requesting a 40-foot container shipment", "WhatsApp conversation checking the quantity of received lighting units", "Customer expressing thanks and interest in further business"],
    packingLabel: "Shipment preparation",
    packingTitle: "Loading photos for this shipment",
    packingDesc: "Two on-site photos show wooden crates being loaded into the container and timber bracing inside the container.",
    photoLabels: ["Container loading", "Cargo and timber bracing"],
    enlarge: "Click any image to enlarge",
  };
  const base = "/customer-feedback/roseville-fcl";
  const messages = ["shipping-requirements.jpg", "quantity-check.jpg", "customer-feedback.jpg"];

  return (
    <article id="container-shipment-case" className="mt-16 scroll-mt-36 space-y-8 border-t border-gray-200 pt-12 lg:mt-20 lg:pt-16">
      <h3 className="text-2xl font-bold text-brand-800 lg:text-3xl">{copy.title}</h3>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 p-8 text-white shadow-xl lg:p-10">
          <svg className="mb-5 h-9 w-9 text-accent-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7.17 6A5.17 5.17 0 002 11.17V18h7v-7H5.1A2.17 2.17 0 017.17 9H9V6H7.17zm10 0A5.17 5.17 0 0012 11.17V18h7v-7h-3.9A2.17 2.17 0 0117.17 9H19V6h-1.83z" />
          </svg>
          <blockquote className="mb-7 text-lg font-medium leading-relaxed text-blue-50 lg:text-xl">“{copy.quote}”</blockquote>
          <div className="border-t border-white/15 pt-5">
            <div className="font-bold">{copy.customer}</div>
            <div className="mt-1 text-sm text-blue-200">{copy.source}</div>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <h4 className="font-bold text-brand-800">{copy.shipmentTitle}</h4>
            <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase text-green-700">{copy.delivered}</span>
          </div>
          <dl className="grid grid-cols-2 gap-x-5 gap-y-4">
            {copy.facts.map(([label, value]) => <div key={label}>
              <dt className="text-xs text-gray-500">{label}</dt>
              <dd className="mt-1 text-sm font-semibold leading-snug text-gray-800">{value}</dd>
            </div>)}
          </dl>
          <p className="mt-5 border-t border-gray-100 pt-4 text-xs leading-relaxed text-gray-500">{copy.note}</p>
        </div>
      </div>
      <div>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h4 className="text-xl font-bold text-brand-800">{copy.messagesTitle}</h4>
          <p className="text-sm text-gray-500">{copy.messagesNote}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {messages.map((file, index) => {
            const image = { src: `${base}/${file}`, alt: copy.imageAlts[index] };
            return <figure key={file} className="min-w-0">
              <button type="button" onClick={() => onOpen(image)} aria-label={`${copy.labels[index]} · ${copy.enlarge}`}
                className="group relative block aspect-[1.72/1] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-500">
                <Image {...image} width={1080} height={2052} className="h-full w-full rounded-xl object-contain" sizes="(max-width: 1024px) 100vw, 33vw" />
                <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-gray-950/75 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">{copy.enlarge}</span>
              </button>
              <figcaption className="mt-3 text-sm font-semibold text-brand-800"><span className="mr-2 text-brand-500">0{index + 1}</span>{copy.labels[index]}</figcaption>
            </figure>;
          })}
        </div>
      </div>
      <div className="grid items-center gap-6 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm lg:grid-cols-[1.25fr_0.75fr] lg:p-6">
        <div className="grid grid-cols-2 gap-3">
          {["container-loading.jpg", "container-bracing.jpg"].map((file, index) => {
            const image = { src: `${base}/${file}`, alt: copy.photoLabels[index] };
            return <figure key={file} className="min-w-0">
              <button type="button" onClick={() => onOpen(image)} aria-label={`${image.alt} · ${copy.enlarge}`}
                className="block aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-500">
                <Image {...image} width={3024} height={4032} className="h-full w-full rounded-xl object-contain" sizes="(max-width: 1024px) 50vw, 30vw" />
              </button>
              <figcaption className="mt-2 text-center text-xs text-gray-500">{image.alt}</figcaption>
            </figure>;
          })}
        </div>
        <div className="p-3 lg:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-600">{copy.packingLabel}</p>
          <h4 className="mt-3 text-2xl font-bold text-brand-800">{copy.packingTitle}</h4>
          <p className="mt-4 leading-relaxed text-gray-600">{copy.packingDesc}</p>
          <p className="mt-5 text-sm font-semibold text-brand-600">{copy.enlarge}</p>
        </div>
      </div>
    </article>
  );
}
