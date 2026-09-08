"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function ShipmentHighlights() {
  const { locale } = useI18n();
  const zh = locale === "zh";
  const cases = [
    { id: "hawaii-express", title: zh ? "深圳 → 美国夏威夷" : "Shenzhen → Hawaii, USA", service: "UPS · 20 kg", date: zh ? "2026年8月" : "August 2026", time: zh ? "3天" : "3 days", evidence: zh ? "包装实拍与客户反馈" : "Packing photos & customer feedback" },
    { id: "container-shipment-case", title: zh ? "深圳 → 美国加州" : "Shenzhen → California, USA", service: zh ? "40英尺整柜 · 海运快船" : "40-foot FCL · Fast ocean service", date: zh ? "2026年7月" : "July 2026", time: zh ? "15天" : "15 days", evidence: zh ? "装柜实拍与客户聊天记录" : "Loading photos & customer messages" },
  ];
  return <section id="customer-feedback" className="bg-white py-14 lg:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div><h2 className="text-3xl font-bold text-brand-800">{zh ? "已完成的真实运输" : "Real shipments, real customer feedback"}</h2><p className="mt-3 text-gray-600">{zh ? "查看出货记录、原始聊天及现场照片。" : "See shipment details, original conversations and on-site photos."}</p></div>
        <Link href="/shipment-cases" className="inline-flex min-h-11 items-center font-semibold text-brand-600 hover:underline">{zh ? "查看全部案例 →" : "View shipping cases →"}</Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {cases.map(item => <article key={item.id} id={item.id === "container-shipment-case" ? item.id : undefined} className="scroll-mt-28 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <div className="mb-4 flex justify-between gap-3 text-xs"><span className="font-medium text-gray-500">{item.date}</span><span className="rounded-full bg-green-100 px-3 py-1 font-bold text-green-800">{zh ? "已签收" : "Delivered"}</span></div>
          <h3 className="text-xl font-bold text-brand-800">{item.title}</h3><p className="mt-2 text-sm text-gray-600">{item.service}</p>
          <div className="my-5 flex items-baseline gap-3"><span className="text-3xl font-bold text-brand-800">{item.time}</span><span className="text-sm text-gray-500">{zh ? "本票实际时效" : "Actual time for this shipment"}</span></div>
          <p className="mb-5 text-sm text-gray-600">{item.evidence}</p>
          <Link href={`/shipment-cases#${item.id}`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand-600 hover:underline">{zh ? "查看完整记录与照片" : "View messages & photos"}<span aria-hidden="true">→</span></Link>
        </article>)}
      </div>
      <p className="mt-5 text-xs leading-6 text-gray-500">{zh ? "案例时效仅代表对应货件，您的路线、时效和费用将按货物及目的地单独确认。" : "These delivery times describe individual shipments. Your route, estimated timing and price are confirmed for your cargo and destination."}</p>
    </div>
  </section>;
}
