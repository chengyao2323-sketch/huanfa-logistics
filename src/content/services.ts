import type { Locale } from "@/i18n";

export const serviceOrder = ["seaFreight", "airFreight", "doorToDoor", "warehousing", "ecommerceLogistics"] as const;
export type ServiceKey = (typeof serviceOrder)[number];
export const servicePaths: Record<ServiceKey, string> = {
  seaFreight: "/services/sea-freight",
  airFreight: "/services/air-freight",
  doorToDoor: "/services/door-to-door",
  warehousing: "/services/warehousing",
  ecommerceLogistics: "/services/ecommerce-logistics",
};

type Section = { title: string; body: string };
export type ServiceContent = {
  name: string;
  summary: string;
  fit: string;
  highlights: string[];
  linkLabel: string;
  title: string;
  intro: string;
  guideTitle: string;
  topics: Section[];
  requirements: string[];
  steps: Section[];
  note: string;
  faq: Array<{ question: string; answer: string }>;
};

type ServicesContent = {
  ui: {
    eyebrow: string; title: string; intro: string; choiceTitle: string; choiceNote: string;
    fitLabel: string; helpTitle: string; helpBody: string; helpButton: string;
    allServices: string; quoteTitle: string; quoteNote: string; quoteButton: string;
    stepsTitle: string; faqTitle: string; noteTitle: string;
    photoTitle: string; photoNote: string; operationsAlt: string; packingAlt: string;
  };
  services: Record<ServiceKey, ServiceContent>;
};

export const servicesContent: Record<Locale, ServicesContent> = {
  en: {
    ui: {
      eyebrow: "OUR SERVICES", title: "Find the right way to ship.",
      intro: "From suppliers in China to the USA and Europe. Compare transport options and the support you need along the way.",
      choiceTitle: "What does your shipment need?",
      choiceNote: "These services can work together. Other destinations are available on request.",
      fitLabel: "A GOOD FIT FOR", helpTitle: "Not sure which service fits?",
      helpBody: "Share your cargo, destination and preferred delivery date. Chris Yu can help you compare the available options.",
      helpButton: "Help me plan my shipment", allServices: "All services",
      quoteTitle: "What to send for a quote", quoteNote: "Don't have every detail yet? Send what you know and we can clarify the rest.",
      quoteButton: "Request a freight quote", stepsTitle: "How we coordinate your shipment",
      faqTitle: "Before you book", noteTitle: "Confirm before booking",
      photoTitle: "Real handling. Real packaging.",
      photoNote: "Photos from our cargo operations and a completed customer shipment. Packing is agreed for each cargo type.",
      operationsAlt: "Forklift and cargo handling at Huanfa's operations site",
      packingAlt: "Four photos showing protective packaging from a completed customer shipment",
    },
    services: {
      seaFreight: {
        name: "Ocean Freight", summary: "Container and consolidated shipping with port or door delivery options.",
        fit: "Larger shipments with flexible delivery dates", highlights: ["FCL & LCL options", "Port or door delivery"],
        linkLabel: "Explore ocean freight", title: "Ocean freight, planned around your cargo.",
        intro: "Compare full-container and shared-container options from China to the USA and Europe. Your cargo volume, packing and delivery needs shape the plan.",
        guideTitle: "Choose the right ocean freight setup",
        topics: [
          { title: "FCL or LCL?", body: "FCL uses a full container for your shipment; LCL combines smaller shipments in shared container space. Send your packed dimensions, weight and quantity so we can compare suitable options rather than choose by weight alone." },
          { title: "Where does our service end?", body: "Tell us whether you need arrival at a destination port or delivery to an address. The quotation should identify pickup, clearance, destination handling and delivery responsibilities so the handover is clear." },
          { title: "Plan for packing and access", body: "For furniture or oversized pieces, share photos and the dimensions after packing. We review handling needs, loading arrangements and the available container or consolidation option before booking." },
        ],
        requirements: ["Pickup city and destination port or postcode", "Product description and cargo photos", "Package count, packed dimensions and gross weight", "Cargo-ready date and preferred arrival date", "Port delivery or door delivery requirement"],
        steps: [
          { title: "Compare options", body: "Review cargo details, FCL or LCL options and the requested delivery scope." },
          { title: "Prepare for departure", body: "Coordinate the agreed pickup, packing, documents and booking arrangements." },
          { title: "Follow the handover", body: "Share confirmed shipment updates and coordinate the agreed destination services." },
        ],
        note: "Sailing dates, transit estimates, container availability and any additional handling are confirmed for the selected route. Insurance can be requested separately.",
        faq: [
          { question: "Can you combine goods from several suppliers?", answer: "Yes. Share each supplier's location and expected ready date so we can plan receiving and consolidation in Shenzhen. Packing and storage needs are confirmed before goods are sent." },
          { question: "Does an ocean freight quote include every destination charge?", answer: "Do not assume it does. Ask for a breakdown of the quoted service and exclusions, including destination handling, clearance and delivery where applicable, before accepting the booking." },
        ],
      },
      airFreight: {
        name: "Air Freight", summary: "Air and express options for cargo with a time-sensitive delivery need.",
        fit: "Urgent orders, samples and smaller shipments", highlights: ["Air & express options", "Cargo review before booking"],
        linkLabel: "Explore air freight", title: "Air freight for time-sensitive shipments.",
        intro: "Start with your delivery deadline and packed cargo details. We review air or express options and confirm the route and delivery scope at quotation.",
        guideTitle: "Prepare the details that shape your air quote",
        topics: [
          { title: "Share both weight and dimensions", body: "The space a package occupies can affect its chargeable weight. Provide the length, width, height and gross weight of each packed piece; the applicable calculation is confirmed for the quoted service." },
          { title: "Tell us what is inside", body: "Describe the product accurately and flag any batteries or other contents that may require review. Supporting documents and carrier acceptance must be checked before a route can be confirmed." },
          { title: "Define the delivery deadline", body: "Give us the cargo-ready date and the date you need the goods. Specify airport collection or delivery to an address, as flight arrival and final delivery are different milestones." },
        ],
        requirements: ["Pickup city and destination postcode", "Product name, photos and any battery information", "Package count and dimensions of each piece", "Gross weight of each piece", "Cargo-ready date and delivery deadline"],
        steps: [
          { title: "Review the cargo", body: "Check product details, packing information and any required documents." },
          { title: "Confirm the service", body: "Agree the available route, chargeable weight basis and delivery scope." },
          { title: "Coordinate the shipment", body: "Arrange the agreed handover and share confirmed transport and delivery updates." },
        ],
        note: "A delivery estimate is not a guaranteed arrival date. Cargo acceptance, route availability and customs processing can affect the shipment; the quoted service terms apply.",
        faq: [
          { question: "Can I get an accurate quote with only the total weight?", answer: "Weight is a starting point, but package dimensions, quantity, contents and destination are also needed to confirm a suitable service and its chargeable weight." },
          { question: "Can you accept products containing batteries?", answer: "Send the product and battery details first. Available options depend on the documents, packing, destination and carrier acceptance; do not send the goods before confirmation." },
        ],
      },
      doorToDoor: {
        name: "Door-to-Door Shipping", summary: "Coordinate pickup, international transport and delivery under one agreed plan.",
        fit: "Importers who need delivery to a specific address", highlights: ["Sea or air transport", "DDP options subject to review"],
        linkLabel: "Explore door-to-door shipping", title: "Door-to-door shipping, with a clear scope.",
        intro: "Connect supplier pickup with final delivery in the USA or Europe. Sea, air and DDP options are reviewed against your goods, destination and receiving arrangements.",
        guideTitle: "Agree what happens at each end",
        topics: [
          { title: "Start at the supplier", body: "Share the collection address, supplier contact and cargo-ready date. Let us know if goods from multiple suppliers need to be combined or repacked before international transport." },
          { title: "Make the quotation explicit", body: "Before booking, confirm which party handles export and import clearance, duties and taxes, destination charges and final delivery. DDP availability is reviewed for each shipment; door-to-door alone is not a promise that every charge is included." },
          { title: "Check the receiving address", body: "Tell us whether delivery is residential or commercial, and whether there are unloading, access or appointment requirements. Special arrangements need confirmation; do not assume inside delivery or installation is included." },
        ],
        requirements: ["Supplier collection address and contact", "Destination address, postcode and address type", "Cargo description, value and packing information", "Package count, dimensions and gross weight", "Receiving access, unloading needs and target date"],
        steps: [
          { title: "Map the journey", body: "Review pickup, consolidation, transport and receiving requirements together." },
          { title: "Agree responsibilities", body: "Confirm service availability, the cost breakdown and any exclusions in writing." },
          { title: "Coordinate delivery", body: "Follow the agreed shipment milestones through final delivery and available delivery documents." },
        ],
        note: "DDP and other delivery options are subject to cargo and destination review. The accepted quotation sets out the included services, responsibilities and exclusions.",
        faq: [
          { question: "Does door-to-door automatically mean duties are included?", answer: "No. Check the agreed trade terms and quotation. Ask explicitly who handles clearance, duties and taxes instead of relying on the words 'door-to-door'." },
          { question: "Can you deliver to a home or a business?", answer: "Both can be considered. Send the full address and explain access and unloading needs so the delivery option and any special arrangements can be confirmed before shipping." },
        ],
      },
      warehousing: {
        name: "Warehousing & Consolidation", summary: "Bring supplier orders together in Shenzhen and prepare them for onward shipping.",
        fit: "Multi-supplier orders or cargo needing repacking", highlights: ["Receiving & consolidation", "Packing & labeling coordination"],
        linkLabel: "Explore warehousing", title: "Bring your supplier orders together.",
        intro: "Coordinate receiving, consolidation and cargo preparation in Shenzhen before onward transport. Storage and handling arrangements are agreed for the goods you plan to send.",
        guideTitle: "Plan the work before goods arrive",
        topics: [
          { title: "Give each delivery a reference", body: "Share the supplier list, expected package counts and ready dates before dispatch. Confirm the receiving instructions with Chris so incoming deliveries can be linked to your shipment." },
          { title: "Choose the preparation needed", body: "Tell us whether the cargo needs sorting, repacking, palletizing, wooden crating or labeling. Share product photos and handling concerns; packing materials, work scope and charges are confirmed for your order." },
          { title: "Plan the onward shipment", body: "Let us know when all supplier orders are expected and how the combined goods will travel. Measurements and cargo photos can be requested to help confirm the final shipment plan." },
        ],
        requirements: ["Supplier list and expected arrival dates", "Product descriptions and package counts", "Approximate dimensions, weights and cargo photos", "Required packing, crating or labeling work", "Expected storage period and onward destination"],
        steps: [
          { title: "Agree receiving", body: "Confirm cargo acceptance, references and delivery instructions before supplier dispatch." },
          { title: "Prepare the cargo", body: "Coordinate the agreed consolidation, packing or labeling work." },
          { title: "Confirm dispatch", body: "Review the prepared cargo details and arrange the agreed onward transport." },
        ],
        note: "Short-term storage, cargo acceptance and handling charges need advance confirmation. Receiving or packing photos are not a product-quality inspection or certification.",
        faq: [
          { question: "Can I ask suppliers to send goods immediately?", answer: "Please confirm receiving instructions and acceptance first. Send supplier names, cargo details and expected arrival dates before arranging deliveries." },
          { question: "Can you provide packing photos?", answer: "Photos and measurements can be requested as part of the agreed handling work. Let Chris know what needs to be documented before the goods are prepared." },
        ],
      },
      ecommerceLogistics: {
        name: "E-Commerce Logistics", summary: "Supplier coordination and first-mile freight for Amazon FBA inventory.",
        fit: "Sellers preparing stock for fulfillment centers", highlights: ["Multi-supplier pickup", "Carton & shipment-label coordination"],
        linkLabel: "Explore e-commerce logistics", title: "Prepare your inventory for its next destination.",
        intro: "Coordinate supplier pickup, consolidation and Amazon FBA first-mile transport from China to the USA and Europe, using the destination and shipment information you provide.",
        guideTitle: "Prepare the shipment, not just the transport",
        topics: [
          { title: "Confirm the destination first", body: "Provide the current shipment plan and assigned receiving address. If inventory is split between destinations, tell us the package allocation before the transport plan is finalized." },
          { title: "Keep labels and cartons aligned", body: "Send the relevant carton and shipment labels, packing list and package counts. If repacking or carton quantities change, confirm whether labels or shipment information need updating before dispatch." },
          { title: "Plan around your inventory deadline", body: "Share supplier-ready dates and the date you want stock available. We can review sea or air options, but delivery to a facility and the platform making stock available are separate events." },
        ],
        requirements: ["Destination facility address and shipment reference", "Product description and supplier-ready dates", "Carton counts, packed dimensions and gross weight", "Current carton labels and packing list", "Target delivery date and any split destinations"],
        steps: [
          { title: "Check the plan", body: "Review supplier readiness, destination details and cargo requirements." },
          { title: "Prepare and consolidate", body: "Coordinate agreed pickup, carton preparation and shipment-label work." },
          { title: "Arrange first-mile freight", body: "Follow the agreed transport plan and share confirmed delivery updates." },
        ],
        note: "This service covers the agreed freight and cargo preparation. Platform account management, fulfillment after receiving and inventory check-in timing are outside that transport scope.",
        faq: [
          { question: "Do you create or manage my Amazon seller account?", answer: "No. You provide the shipment plan, destination and labels. Our role is to coordinate the cargo preparation and freight services agreed for your shipment." },
          { question: "Can goods from different factories travel together?", answer: "Yes, subject to cargo review and the receiving plan. Send the supplier list and ready dates; goods for different destination facilities may need separate shipment arrangements." },
        ],
      },
    },
  },
  zh: {
    ui: {
      eyebrow: "服务项目", title: "为你的货物，找到合适的运输方案。",
      intro: "从中国供应商到美国、欧洲。比较运输方式，也了解运输前后可以协调的服务。",
      choiceTitle: "这票货物，需要什么服务？", choiceNote: "以下服务可以组合安排，其他目的地可按需咨询。",
      fitLabel: "适合这些需求", helpTitle: "还不确定选哪种服务？",
      helpBody: "告诉 Chris Yu 货物情况、目的地和期望送达日期，我们可以一起比较可行的方案。",
      helpButton: "帮我规划这票货物", allServices: "全部服务",
      quoteTitle: "询价时请提供", quoteNote: "资料还不齐也可以先联系，把已知信息发给我们，再一起确认其余细节。",
      quoteButton: "获取运输报价", stepsTitle: "我们如何协调这票货物",
      faqTitle: "订舱前，你可能想了解", noteTitle: "出货前请确认",
      photoTitle: "真实操作，真实包装。", photoNote: "来自货物操作现场及已完成客户货物的包装照片。具体包装方式根据每票货物确认。",
      operationsAlt: "焕发货物操作现场的叉车与货物搬运", packingAlt: "已完成客户货物的四张防护包装照片拼图",
    },
    services: {
      seaFreight: {
        name: "海运服务", summary: "整箱或拼箱运输，可按需安排到港或门到门交付。",
        fit: "货量较大、交付时间相对灵活的货物", highlights: ["整箱 FCL / 拼箱 LCL", "到港或到门选项"],
        linkLabel: "了解海运方案", title: "根据货物情况，安排合适的海运。",
        intro: "比较中国至美国、欧洲的整箱与拼箱方案。货物体积、包装和交付要求，共同决定如何安排运输。",
        guideTitle: "先确定适合你的海运组合",
        topics: [
          { title: "选择整箱，还是拼箱？", body: "整箱是为这票货物安排一个完整集装箱；拼箱是与其他货物共享集装箱空间。请提供包装后的尺寸、重量和件数，我们会据此比较适用方案，而不是只看总重量。" },
          { title: "服务需要做到哪一步？", body: "请说明是到目的港交付，还是送到指定地址。报价时应明确提货、清关、目的港操作和末端派送由谁负责，让交接范围清楚。" },
          { title: "提前考虑包装与装卸", body: "家具、大件或特殊尺寸货物，请先提供照片及包装后尺寸。订舱前会审核搬运需求、装载条件及可用的整箱或拼箱方案。" },
        ],
        requirements: ["提货城市与目的港或目的地邮编", "货物品名及照片", "件数、包装后尺寸与毛重", "备货日期与期望到达日期", "需要到港还是门到门交付"],
        steps: [
          { title: "比较运输方案", body: "审核货物信息，比较整箱或拼箱，并确认交付范围。" },
          { title: "协调出运准备", body: "按约定安排提货、包装、单证和订舱事项。" },
          { title: "跟进目的地交接", body: "提供经确认的运输节点，协调约定的目的地服务。" },
        ],
        note: "船期、预计时效、箱型舱位和额外操作按所选航线确认。货物保险可以另外提出需求。",
        faq: [
          { question: "多个供应商的货物可以一起发吗？", answer: "可以。请提供各供应商所在地及预计备货时间，以便规划深圳收货和集货。包装与存放需求须在货物发出前确认。" },
          { question: "海运报价是否包含全部目的地费用？", answer: "不能默认全部包含。接受报价前，请核对费用明细和不包含的项目，尤其是适用的目的港操作、清关与派送费用。" },
        ],
      },
      airFreight: {
        name: "空运服务", summary: "根据送达需求，审核空运或国际快递运输选项。",
        fit: "急件、样品及较小批量的货物", highlights: ["空运与国际快递选项", "订舱前审核货物资料"],
        linkLabel: "了解空运方案", title: "为时间紧的货物，规划空运方案。",
        intro: "先提供送达期限与包装后的货物信息，再审核空运或快递选项。具体路线和交付范围在报价时确认。",
        guideTitle: "这些信息，决定空运如何报价",
        topics: [
          { title: "重量和尺寸都要提供", body: "包裹占用的空间可能影响计费重量。请提供每件包装后的长、宽、高和毛重，所选服务适用的计费方式会在报价时确认。" },
          { title: "准确说明货物内容", body: "请如实说明产品，主动注明电池或其他需要审核的内容。所需资料和承运人接受情况确认后，才能确定可用路线。" },
          { title: "区分到达时间与送达时间", body: "请告诉我们何时备好货、何时需要收到货，以及是在机场提货还是送到指定地址。航班到达与最终派送是不同的运输节点。" },
        ],
        requirements: ["提货城市与目的地邮编", "品名、照片及相关电池信息", "包裹件数及每件尺寸", "每件包装后的毛重", "备货日期与最迟送达需求"],
        steps: [
          { title: "审核货物资料", body: "核对产品、包装情况以及所需的支持文件。" },
          { title: "确认运输服务", body: "确认可用路线、计费重量依据和交付范围。" },
          { title: "协调运输交接", body: "安排约定的交接，并提供经确认的运输和派送进度。" },
        ],
        note: "预计时效不等于保证送达日期。货物接受情况、路线和清关进度都可能影响运输，具体以确认的服务条款为准。",
        faq: [
          { question: "只提供总重量，能拿到准确报价吗？", answer: "总重量可以作为初步参考，但确认服务及计费重量还需要包裹尺寸、件数、货物内容和目的地。" },
          { question: "含电池产品可以运输吗？", answer: "请先提供产品及电池信息。可用方案取决于资料、包装、目的地和承运人的接受情况，确认前请不要直接发货。" },
        ],
      },
      doorToDoor: {
        name: "门到门运输", summary: "按一份确认的方案，协调供应商提货、国际运输与末端交付。",
        fit: "希望货物送到指定地址的进口客户", highlights: ["海运或空运组合", "DDP 选项须提前审核"],
        linkLabel: "了解门到门方案", title: "门到门运输，先把服务范围讲清楚。",
        intro: "从中国供应商提货，到美国、欧洲指定地址交付。海运、空运及 DDP 选项，根据货物、目的地和收货条件审核。",
        guideTitle: "把起点、终点和费用责任说清楚",
        topics: [
          { title: "从供应商交接开始", body: "请提供提货地址、供应商联系人和备货日期。如果多个供应商的货物需要合并或重新包装，也请在国际运输前提前说明。" },
          { title: "报价要写明包含与不包含", body: "订舱前确认出口及进口清关、关税税费、目的地杂费和派送分别由谁负责。DDP 按每票货物审核；仅写“门到门”，不代表所有费用无条件包含。" },
          { title: "确认实际收货条件", body: "请说明住宅或商业地址，以及卸货、车辆通行或预约需求。特殊交付须提前确认，不应默认包含入户搬运或安装。" },
        ],
        requirements: ["供应商提货地址和联系人", "目的地地址、邮编及地址类型", "品名、货值及包装情况", "包裹件数、尺寸和毛重", "收货通行条件、卸货需求及目标日期"],
        steps: [
          { title: "梳理全程需求", body: "一起核对提货、集货、运输与收货条件。" },
          { title: "明确服务责任", body: "书面确认可用服务、费用明细和不包含的项目。" },
          { title: "跟进最终交付", body: "按约定跟进运输节点至交付，并提供可获得的交付资料。" },
        ],
        note: "DDP 及其他交付方案须根据货物和目的地审核。接受的报价应明确服务内容、责任分工和不包含的项目。",
        faq: [
          { question: "门到门就一定包含关税吗？", answer: "不是。请核对约定的贸易条款和报价，明确由谁负责清关及关税税费，不要仅凭“门到门”判断。" },
          { question: "可以送到住宅或公司吗？", answer: "两类地址都可以提出需求。请提供完整地址，并说明通行和卸货条件，以便在发货前确认派送方式及特殊安排。" },
        ],
      },
      warehousing: {
        name: "仓储与集货", summary: "把多个供应商的订单集中到深圳，为后续运输做好准备。",
        fit: "多供应商集货或需要重新包装的货物", highlights: ["收货与合并出运", "包装及贴标协调"],
        linkLabel: "了解仓储与集货", title: "把供应商的订单，汇成一票货物。",
        intro: "在后续运输前，协调深圳收货、集货与货物整理。存放条件和操作内容，按你计划发来的货物提前确认。",
        guideTitle: "货物到仓前，先确认要做哪些事",
        topics: [
          { title: "每批来货都要有对应信息", body: "供应商发货前，请提供供应商清单、预计件数与备货日期，并向 Chris 确认收货指引，方便将各批货物对应到你的出运计划。" },
          { title: "按需确定包装操作", body: "请说明是否需要分拣、重新包装、打托、木架或贴标，并提供产品照片与搬运注意事项。材料、操作范围和费用按订单确认。" },
          { title: "一起安排后续出运", body: "请说明所有供应商预计何时到齐，以及合并后的运输方式。可以按需提出测量和拍照要求，用于确认最终出货计划。" },
        ],
        requirements: ["供应商清单与预计到仓日期", "货物品名与预计件数", "大致尺寸、重量及货物照片", "包装、木架或贴标需求", "预计存放时间及后续目的地"],
        steps: [
          { title: "确认收货安排", body: "供应商发货前，确认货物接受情况、对应信息和收货指引。" },
          { title: "整理与准备货物", body: "按约定协调集货、包装或贴标操作。" },
          { title: "核对后续出运", body: "确认整理后的货物信息，再安排约定的后续运输。" },
        ],
        note: "短期存放、货物接受情况和操作收费须提前确认。收货或包装照片不等同于产品质量检验或认证。",
        faq: [
          { question: "可以直接让供应商发货到仓吗？", answer: "请先确认收货指引及接受情况。安排来货前，将供应商名称、货物信息和预计到达日期提供给我们。" },
          { question: "可以提供包装照片吗？", answer: "可以在约定的操作中提出照片和测量需求。请在货物整理前，告诉 Chris 需要记录哪些内容。" },
        ],
      },
      ecommerceLogistics: {
        name: "跨境电商物流", summary: "为 Amazon FBA 备货协调供应商、货物准备与头程运输。",
        fit: "准备向履约仓补货的电商卖家", highlights: ["多供应商提货集货", "外箱与运输标签协调"],
        linkLabel: "了解电商物流", title: "为库存的下一站，做好出运准备。",
        intro: "根据你提供的目的仓与货件信息，协调中国至美国、欧洲的供应商提货、集货及 Amazon FBA 头程运输。",
        guideTitle: "准备好货件，才能安排好运输",
        topics: [
          { title: "先确认货物发往哪里", body: "请提供当前货件计划和分配的收货地址。如果库存需要分到多个目的地，请在运输方案确定前，说明每个目的地对应的包裹。" },
          { title: "让标签和外箱信息保持一致", body: "请提供相关外箱及货件标签、装箱单和件数。如果重新包装或外箱数量发生变化，请在出运前确认是否需要更新标签和货件信息。" },
          { title: "围绕补货时间规划", body: "请提供供应商备货日期，以及希望库存可售的时间。我们可审核海运或空运方案，但送达仓库与平台完成上架是不同的环节。" },
        ],
        requirements: ["目的仓地址与货件参考信息", "品名和供应商备货日期", "外箱件数、包装后尺寸和毛重", "当前外箱标签与装箱单", "目标送达时间及是否分仓"],
        steps: [
          { title: "核对出货计划", body: "确认供应商备货情况、目的地和货物要求。" },
          { title: "协调整理与集货", body: "安排约定的提货、外箱整理和运输标签操作。" },
          { title: "安排头程运输", body: "按确认的方案协调运输，并提供经确认的交付进度。" },
        ],
        note: "本服务覆盖约定的运输和货物准备。平台账号管理、收货后的订单履约及库存入库上架时效，不属于该运输服务范围。",
        faq: [
          { question: "你们会创建或管理我的亚马逊卖家账户吗？", answer: "不会。货件计划、目的地和标签由你提供，我们负责协调约定的货物准备及运输服务。" },
          { question: "不同工厂的货物能一起出运吗？", answer: "可以提出集货需求，具体按货物及收货计划审核。请提供供应商清单和备货时间；不同目的仓可能需要分别安排运输。" },
        ],
      },
    },
  },
};
