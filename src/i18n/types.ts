export type I18nDict = {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    faq: string;
    getQuote: string;
    openMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    getQuote: string;
    learnMore: string;
  };
  stats: {
    countries: string;
    containers: string;
    onTime: string;
    experience: string;
  };
  services: {
    title: string;
    description: string;
    ocean: { title: string; subtitle: string; desc: string };
    air: { title: string; subtitle: string; desc: string };
    ddp: { title: string; subtitle: string; desc: string };
    warehouse: { title: string; subtitle: string; desc: string };
    ecommerce: { title: string; subtitle: string; desc: string };
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    learnMore: string;
    mission: { label: string; value: string };
    vision: { label: string; value: string };
    values: { label: string; value: string };
    promise: { label: string; value: string };
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  homeSections: {
    photoPlaceholder: string;
    verification: {
      title: string;
      desc: string;
      legalName: string;
      legalNameValue: string;
      chineseLegalName: string;
      chineseLegalNameValue: string;
      registration: string;
      registrationValue: string;
      founded: string;
      foundedValue: string;
      hq: string;
      hqValue: string;
      warehouse: string;
      warehouseValue: string;
      email: string;
      emailValue: string;
      licenseTitle: string;
      licenseDesc: string;
      licensePlaceholder: string;
    };
    real: {
      title: string;
      desc: string;
      warehouse1: string;
      warehouse2: string;
      team: string;
    };
    shipments: {
      title: string;
      desc: string;
      items: Array<{
        route: string;
        mode: string;
        volume: string;
        cargo: string;
        status: string;
      }>;
    };
    caseStudies: {
      title: string;
      desc: string;
      cargoLabel: string;
      volumeLabel: string;
      originLabel: string;
      destinationLabel: string;
      serviceLabel: string;
      transitLabel: string;
      includedLabel: string;
      placeholder: string;
      card: {
        title: string;
        cargo: string;
        volume: string;
        origin: string;
        destination: string;
        service: string;
        transit: string;
        included: string[];
      };
    };
    process: {
      title: string;
      desc: string;
      steps: string[];
    };
    insurance: {
      title: string;
      desc: string;
      steps: string[];
    };
    payment: {
      title: string;
      desc: string;
      items: string[];
    };
    testimonials: {
      title: string;
      desc: string;
      quote: string;
      customer: string;
      source: string;
      shipmentTitle: string;
        shipmentItems: Array<{ label: string; value: string }>;
        messagesTitle: string;
        messagesNote: string;
        packingTitle: string;
        packingLabel: string;
        packingDesc: string;
        viewOriginal: string;
        closeImage: string;
        imageAlts: string[];
        packingAlt: string;
    };
    tracking: {
      title: string;
      desc: string;
      inputPlaceholder: string;
      button: string;
      note: string;
    };
    carriers: {
      title: string;
      desc: string;
      placeholder: string;
    };
    specialist: {
      title: string;
      desc: string;
      name: string;
      role: string;
      photo: string;
      whatsapp: string;
      email: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
    icp: string;
    home: string;
    services: string;
    about: string;
    contact: string;
    faq: string;
    ocean: string;
    air: string;
    land: string;
    warehouse: string;
  };
  aboutPage: {
    page: { title: string; desc: string };
    story: {
      badge: string;
      title: string;
      companyInfo: string;
      p1: string;
      p2: string;
      p3: string;
      timeline: Array<{ year: string; event: string }>;
    };
    values: {
      title: string;
      desc: string;
      items: Array<{ title: string; desc: string }>;
    };
  };
  servicesPage: {
    page: { title: string; desc: string };
    details: Array<{
      title: string;
      subtitle: string;
      color: string;
      items: string[];
    }>;
    learnMore: string;
    cta: { title: string; desc: string; button: string };
  };
  contactPage: {
    page: { title: string; desc: string };
    form: {
      title: string;
      desc: string;
      companyName: string;
      contactPerson: string;
      email: string;
      phone: string;
      origin: string;
      destination: string;
      cargoType: string;
      weightVolume: string;
      cartonsPallets: string;
      dimensions: string;
      containsBattery: string;
      readyDate: string;
      serviceNeeded: string;
      serviceOcean: string;
      serviceAir: string;
      serviceDdp: string;
      serviceFba: string;
      serviceExpress: string;
      batteryYes: string;
      batteryNo: string;
      remarks: string;
      submit: string;
      successTitle: string;
      successDesc: string;
      sendAnother: string;
      requiredMsg: string;
      emailInvalidMsg: string;
    };
    info: {
      title: string;
      specialistTitle: string;
      specialistName: string;
      specialistRole: string;
      specialistPhoto: string;
      addressLabel: string;
      addressValue: string;
      officeAddressLabel: string;
      officeAddressValue: string;
      warehouseAddressLabel: string;
      warehouseAddressValue: string;
      mapsLabel: string;
      phoneLabel: string;
      phoneValue: string;
      emailLabel: string;
      emailValue: string;
      hoursLabel: string;
      hoursValue: string;
      whatsapp: string;
    };
  };
  servicePages: {
    seaFreight: {
      title: string;
      desc: string;
      features: string[];
      solutionsTitle: string;
      solutionsSubtitle: string;
      solutionsDesc: string;
      faq: Array<{ question: string; answer: string }>;
    };
    airFreight: { title: string; desc: string; features: string[] };
    doorToDoor: { title: string; desc: string; features: string[] };
    ecommerceLogistics: { title: string; desc: string; features: string[] };
    warehousing: { title: string; desc: string; features: string[] };
  };
  faqPage: {
    page: { title: string; desc: string };
    items: Array<{ question: string; answer: string }>;
    cta: { title: string; desc: string; button: string };
  };
};

export type Locale = "zh" | "en";

