"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function ShipmentHighlights() {
  const { locale } = useI18n();
  const zh = locale === "zh";
  const cases = [
    { id: "hawaii-express", title: zh ? "深圳 → 美国夏威夷" : "Shenzhen → Hawaii, USA", service: zh ? "普通货物 · 20 kg · UPS 快递" : "General cargo · 20 kg · UPS Express", date: zh ? "2026年8月" : "August 2026", time: zh ? "3天" : "3 days", quote: zh ? "我非常欣赏你的诚信和专业。" : "I truly appreciate your honesty and professionalism.", customer: "Brian S." },
    { id: "container-shipment-case", title: zh ? "深圳 → 美国加州" : "Shenzhen → California, USA", service: zh ? "家具、灯具等 · 40英尺整柜 · 海运快船" : "Furniture, lighting & more · 40-foot FCL · Fast ocean service", date: zh ? "2026年7月" : "July 2026", time: zh ? "15天" : "15 days", quote: zh ? "我还有更多业务交给你。" : "I have more business for you", customer: zh ? "美国客户" : "US customer" },
  ];
  return <section id="customer-feedback" className="bg-white py-14 lg:py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-bold text-brand-800">{zh ? "已完成的真实运输" : "Real shipments. Real feedback."}</h2>
        <Link href="/shipment-cases" className="inline-flex min-h-11 items-center font-semibold text-brand-600 hover:underline">{zh ? "查看全部案例 →" : "View shipping cases →"}</Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {cases.map(item => <article key={item.id} id={item.id === "container-shipment-case" ? item.id : undefined} className="scroll-mt-28 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <div className="mb-4 flex justify-between gap-3 text-xs"><span className="font-medium text-gray-500">{item.date}</span><span className="rounded-full bg-green-100 px-3 py-1 font-bold text-green-800">{zh ? "已签收" : "Delivered"}</span></div>
          <h3 className="text-xl font-bold text-brand-800">{item.title}</h3><p className="mt-2 text-sm text-gray-600">{item.service}</p>
          <div className="my-4 flex flex-wrap items-baseline gap-x-3 gap-y-1"><span className="text-2xl font-bold text-brand-800">{item.time}</span><span className="text-xs text-gray-500">{zh ? "本票实际时效" : "Actual shipment time"}</span></div>
          <figure className="mb-4 border-l-2 border-brand-300 pl-3">
            <blockquote className="text-sm leading-6 text-brand-800">“{item.quote}”</blockquote>
            <figcaption className="mt-1 text-xs text-gray-500">{item.customer} · {zh ? "客户反馈节选译文" : "Customer message excerpt"}</figcaption>
          </figure>
          <Link href={`/shipment-cases#${item.id}`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand-600 hover:underline">{zh ? "查看完整记录与照片" : "View messages & photos"}<span aria-hidden="true">→</span></Link>
        </article>)}
      </div>
      <p className="mt-5 text-xs leading-6 text-gray-500">{zh ? "时效仅代表上述货件，并非其他货件的承诺；路线、预计时效及费用按货物和目的地确认。" : "Times shown are shipment-specific, not guarantees. Your route, timing and price depend on cargo and destination."}</p>
    </div>
  </section>;
}
