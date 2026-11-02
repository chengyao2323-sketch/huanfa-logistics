"use client";

import { useI18n } from "@/i18n";

const content = {
  en: {
    title: "Which goods can use our DDP channels?",
    intro: "DDP describes delivery responsibilities, not cargo approval. The groups below are Huanfa's channel screening, not universal customs classifications. Provide the product name, photos, composition and destination before dispatch.",
    groups: [
      { title: "Ordinary goods: request a standard quote", items: ["Everyday consumer goods, textiles, gifts and handicrafts", "Plastic products, small hardware and ordinary printed goods", "Small parcels or larger packages within channel size and weight limits"], note: "Ordinary goods can still be subject to destination product standards, permits or other import requirements. Declare the actual product and intended use." },
      { title: "Declare first: product and route review", items: ["All battery goods, including installed batteries, separate lithium batteries and power banks: declare type, capacity and packing; provide requested MSDS/SDS, UN 38.3 test summary and transport documents", "Cosmetics, creams, liquids and powders: declare ingredients, use, quantities and packaging", "Branded products: our channel review requires valid brand authorization", "Wooden goods: declare material separately from packaging. Regulated solid-wood pallets, crates and dunnage require applicable ISPM 15 compliance; processed wood such as plywood is treated differently"], note: "A small or installed battery is not automatically ordinary cargo. Documents alone do not establish transport eligibility. Wait for acceptance and packing instructions." },
      { title: "Not accepted through standard DDP", items: ["Counterfeit products are not accepted", "Hazardous chemicals, flammable or explosive goods; fresh or frozen perishables; alcohol, tobacco and live animals or plants", "Medical devices, valuable jewelry, and oversize or over-limit cargo"], note: "This is our service boundary, not a claim that every listed product is illegal to import. Do not send these goods for a standard DDP booking." },
    ],
    prompt: "Unsure about your goods? Send Chris the product name, photos, packed size and destination for a pre-shipment review.",
  },
  zh: {
    title: "哪些货物可以安排 DDP？",
    intro: "DDP 约定交付责任，不代表任何货物都能发。以下是焕发的渠道审核分组，并非海关或危险品法规中的统一分类。发货前请先提供品名、照片、成分及目的地。",
    groups: [
      { title: "普通商品：可申请标准渠道报价", items: ["日用百货、纺织品、礼品及工艺品", "塑胶制品、五金小件及普通印刷品", "符合渠道尺寸及重量限制的小包裹与较大件货物"], note: "普货仍可能涉及目的国产品标准、许可或其他进口要求，不能一概理解为无需资质。请如实说明产品与用途。" },
      { title: "先申报：按产品与线路专项审核", items: ["所有带电货物，包括内置电池、单独锂电池和充电宝：说明电池类型、容量及包装方式，按要求提供 MSDS/SDS、UN 38.3 测试摘要等运输资料", "化妆品、膏状、液体及粉末：说明成分、用途、数量和包装", "品牌商品：按我司渠道审核要求提供有效品牌授权", "木制商品：申报材质，并单独说明包装。受监管的实木托盘、木箱及垫木须符合适用的 ISPM 15 要求；胶合板等加工木材区别处理"], note: "电池小或内置于设备中，不等于自动按普货承运。资料齐全也不等于获准运输，应先确认承接及包装要求。" },
      { title: "常规 DDP 不承接的货物", items: ["仿冒产品不予承接", "危险化学品、易燃易爆品；生鲜冷冻品、酒类、烟草及活体动植物", "医疗器械、贵重珠宝及超限超大件货物"], note: "这是我司的服务范围，不代表所有列出的商品都属于违法进口。请勿按常规 DDP 订单发送至仓库。" },
    ],
    prompt: "不确定能否发货？先向 Chris 提供品名、照片、包装尺寸及目的地，安排发货前预审。",
  },
};

export default function DdpCargoGuide() {
  const { locale } = useI18n();
  const copy = content[locale];
  return <section id="ddp-cargo" aria-labelledby="ddp-cargo-title" className="mt-12 border-t border-slate-200 pt-10">
    <h2 id="ddp-cargo-title" className="text-2xl font-bold text-brand-800">{copy.title}</h2>
    <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">{copy.intro}</p>
    <div className="mt-6 grid gap-5 lg:grid-cols-2">
      {copy.groups.map((group,index) => <article key={group.title} className={`rounded-xl border border-slate-200 bg-slate-50 p-5 ${index === 2 ? "lg:col-span-2" : ""}`}>
        <h3 className="text-lg font-bold text-brand-800">{group.title}</h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-600">{group.note}</p>
      </article>)}
    </div>
    <p className="mt-5 text-sm font-semibold leading-7 text-brand-800">{copy.prompt}</p>
  </section>;
}
