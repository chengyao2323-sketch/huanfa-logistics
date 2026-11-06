"use client";

import Link from "next/link";
import { useT, useI18n } from "@/i18n";

export default function FaqPage() {
  const t = useT();
  const { locale } = useI18n();

  const answer = (text: string, i: number) => {
    const link = (label: string, href: string) => <Link href={href} className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-900">{label}</Link>;
    if (locale === "zh") {
      if (i === 0) return <>可以。{link("DDP 服务", "/services/door-to-door")}支持企业与个人客户，重点为美国、加拿大和欧洲，澳洲也可安排。询价不需要在中国设立公司；货物承接情况、目的国进口要求及进口责任方会在订舱前核对。也可以先查看{link("个人进口运输指南", "/personal-shipping-from-china")}。</>;
      if (i === 1) return <>先提供姓名和邮箱或 WhatsApp，再补充供应商城市、目的国及邮编、产品清单和已知的包装后重量及尺寸。暂时不清楚的可先留空，通过邮箱或 WhatsApp 提供产品照片或供应商装箱单，我们会说明还需核对哪些信息；也可以直接{link("获取报价", "/contact")}。</>;
      if (i === 2) return <>我们可协调供应商提货或送货至深圳操作点并安排{link("多供应商集货", "/services/warehousing")}。提货地点、仓储、包装要求及相关费用需在发货到仓前通过报价确认。</>;
      if (i === 3) return <>DDP 重点为美国、加拿大和欧洲，澳洲也可安排。日用百货、纺织品、礼品、塑胶制品、五金小件及普通印刷品等可提供资料审核；带电电子产品及敏感货须提前申报。超限超大件不在常规 DDP 渠道承接范围内，具体货物、资料及目的地应在发运前确认。美国线路可参考{link("中国到美国运输指南", "/shipping-from-china-to-usa")}。</>;
      if (i === 4) return <>审核通过并按确认的 DDP 服务发运时，出口及进口清关、进口关税和清关税费由我方安排处理，正常派送时收件人无需再次支付这些已含费用。仅写“门到门”不能确定税费责任；卸货、入户、上楼、保险及其他特殊服务，须在订舱前另行确认。</>;
      if (i === 6) return <>运输时效一般多久？报价时会根据线路及货物确认预计时效。请明确时效是港到港、机场到机场，还是包含提货、清关及末端派送。真实案例中的天数仅反映对应货物的运输情况，不构成未来订舱的时效保证；可查看我们的{link("真实运输案例", "/shipment-cases")}。</>;
      if (i === 10) return <>请通过 WhatsApp 或邮箱联系 Chris Yu 并提供货物参考号。我们会分享经确认的运输节点及可提供的承运商更新、照片或交付单据。官网不提供实时轨迹查询系统。</>;
      if (i === 11) return <>请在出货前咨询{link("清关与保险服务", "/services/customs-insurance")}并确认保单、保险金额、除外责任及免赔额。如发现破损或丢失，请尽快联系，建议在24小时内通知，并保留包装、照片及交付记录。该通知建议不替代保单或运输条款中的申报期限。我们协助整理资料，是否获赔及金额以适用条款为准。</>;
      if (i === 12) return <>关于我们页面列有公司名称、统一社会信用代码、办公室及联系方式，也可查看操作照片和真实运输案例。如需进一步核验资料，请查看{link("公司信息与付款说明", "/about#verify")}或联系我们。</>;
    } else {
      if (i === 0) return <>Yes. Our {link("DDP service", "/services/door-to-door")} supports businesses and personal importers, focused on the USA, Canada and Europe, with Australia also available. You do not need a company in China to ask for a quote. Cargo acceptance, destination import requirements and the responsible importer are checked before booking. Personal buyers can also review our {link("personal import shipping guide", "/personal-shipping-from-china")}.</>;
      if (i === 1) return <>Start with your name and an email address or WhatsApp number. Add the supplier city, destination country and ZIP/postcode, product list, packed weight and dimensions if known. If details are missing, send product photos or a supplier packing list by email or WhatsApp; we can identify what is still needed. You can also {link("request a quote", "/contact")} directly.</>;
      if (i === 2) return <>We can coordinate supplier pickup or delivery to our Shenzhen operation and arrange {link("multi-supplier consolidation", "/services/warehousing")}. Pickup locations, storage, packing requirements and any related charges are confirmed in the quotation before goods are sent.</>;
      if (i === 3) return <>Our DDP focus is the USA, Canada and Europe, with Australia also available. General consumer goods, textiles, gifts, plastics, small hardware and ordinary printed goods can be reviewed. Declare battery-powered electronics and sensitive goods in advance. Oversize or over-limit cargo is outside standard DDP channels; confirm the actual goods, documents and destination before dispatch. For US routes, see our {link("China-to-USA shipping guide", "/shipping-from-china-to-usa")}.</>;
      if (i === 4) return <>For approved cargo booked under our confirmed DDP service, we arrange export and import clearance and handle import duties and customs taxes, with no repeat payment of those included charges by the recipient at normal delivery. Door-to-door alone does not specify tax responsibilities. Unloading, indoor or upstairs delivery, insurance and other special arrangements must be confirmed separately before booking.</>;
      if (i === 6) return <>We confirm an estimated schedule for your route and cargo at quotation. Ask whether the estimate is port-to-port, airport-to-airport or includes pickup, customs and final delivery. Times shown in our {link("real shipping cases", "/shipment-cases")} describe those shipments only, not a guaranteed schedule for future bookings.</>;
      if (i === 10) return <>Contact Chris Yu by WhatsApp or email with your shipment reference. We share confirmed milestones and available carrier updates, photos or delivery documents. The website does not provide a live tracking system.</>;
      if (i === 11) return <>Ask about our {link("customs and insurance service", "/services/customs-insurance")} before shipment and confirm the policy, insured value, exclusions and any deductible. If you notice damage or loss, contact us promptly, preferably within 24 hours; retain packaging, photos and delivery records. This notification request does not replace the deadlines in the applicable policy or transport terms. We assist with documentation; claim approval and compensation depend on the applicable terms.</>;
      if (i === 12) return <>Our About Us page lists the company name, unified social credit code, office information and contact details. You can also review real shipping cases and operating photos. For payment and verification details, see {link("company information and payment guidance", "/about#verify")}.</>;
    }
    return text;
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://huanfalogistics.com/faq#faq",
          mainEntity: t.faqPage.items.map(item => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }).replace(/</g, "\\u003c"),
      }} />
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">{t.faqPage.page.title}</h1>
            <p className="text-lg text-blue-100/80">{t.faqPage.page.desc}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {t.faqPage.items.map((item, i) => (
            <details key={i} open={i === 0} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
              <summary
                className="w-full flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden"
              >
                <span className="font-semibold text-brand-800">{item.question}</span>
                <svg
                  className="w-5 h-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div id={`faq-answer-${i}`} className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
                {answer(item.answer, i)}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{t.faqPage.cta.title}</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t.faqPage.cta.desc}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 text-brand-900 px-6 py-3 rounded-lg font-bold hover:bg-accent-600 transition-colors"
          >
            {t.faqPage.cta.button}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
