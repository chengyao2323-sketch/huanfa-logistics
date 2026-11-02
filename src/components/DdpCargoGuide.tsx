"use client";

import { useI18n } from "@/i18n";

const content = {
  en: {
    title: "Which goods can use our DDP channels?",
    intro: "Start with a product name and photo. Cargo classification, packaging, documentation and destination determine the available channel; approval is required before dispatch.",
    groups: [
      { title: "General cargo: standard DDP review", items: ["Everyday consumer goods, textiles, gifts and handicrafts", "Plastic products, small hardware and ordinary printed goods", "Consumer electronics with small installed batteries: declare battery details for review"], note: "Smaller parcels and larger packages can be reviewed. Each product must meet the applicable import and carrier requirements." },
      { title: "Advance declaration: specialist channel review", items: ["Lithium batteries and power banks: requested MSDS/SDS, UN 38.3 and other applicable transport documents", "Cosmetics, creams, small quantities of liquids and powders: declare ingredients and quantities", "Branded products: valid brand authorization", "Wood products and packaging: destination review; regulated solid-wood packaging needs compliant treatment and ISPM 15 marking where applicable"], note: "Providing documents does not by itself confirm acceptance. Wait for the approved channel and packing instructions." },
      { title: "Outside our standard DDP channels", items: ["Counterfeit products, hazardous chemicals, flammable or explosive dangerous goods", "Fresh or frozen perishables, alcohol, tobacco and live animals or plants", "Medical devices, valuable jewelry, and oversize or over-limit cargo"], note: "Do not send these goods to the warehouse for a standard DDP shipment." },
    ],
    prompt: "Unsure about your goods? Send Chris the product name, photos, packed size and destination for a pre-shipment review.",
  },
  zh: {
    title: "哪些货物可以安排 DDP？",
    intro: "先提供品名和照片，按货物分类、包装、资料及目的地审核可用渠道；获得承接确认后再发货。",
    groups: [
      { title: "普货：按标准 DDP 渠道审核", items: ["日用百货、纺织品、礼品及工艺品", "塑胶制品、五金小件及普通印刷品", "带内置小型电池的消费电子产品：须申报电池信息审核"], note: "小包裹和较大件货物均可提供资料评估，产品仍须满足对应进口及承运要求。" },
      { title: "敏感货：提前申报，审核专项渠道", items: ["锂电池、充电宝：按要求提供 MSDS/SDS、UN 38.3 及适用运输资料", "化妆品、膏状、少量液体及粉末：说明成分和数量", "品牌商品：提供有效品牌授权", "木制品及木质包装：按目的地审核；受监管的实木包装须按适用要求处理并带有 ISPM 15 标识"], note: "提供资料不等于已获承接确认，请先确认可用渠道与包装要求。" },
      { title: "不在常规 DDP 渠道承接范围", items: ["仿冒产品、危险化学品、易燃易爆危险品", "生鲜冷冻品、酒类、烟草及活体动植物", "医疗器械、贵重珠宝、超限超大件货物"], note: "请勿按普通 DDP 货物直接发送至仓库。" },
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
    <div className="mt-6 grid gap-5 lg:grid-cols-3">
      {copy.groups.map(group => <article key={group.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-lg font-bold text-brand-800">{group.title}</h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-700">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-600">{group.note}</p>
      </article>)}
    </div>
    <p className="mt-5 text-sm font-semibold leading-7 text-brand-800">{copy.prompt}</p>
  </section>;
}
