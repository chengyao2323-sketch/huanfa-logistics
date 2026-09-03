export type I18nDict = {
  floatingWhatsApp: {
    label: string;
    regionLabel: string;
    linkLabel: string;
    closeLabel: string;
  };
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
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  homeSections: {
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
    };
    real: {
      title: string;
      desc: string;
      warehouse1: string;
      warehouse2: string;
      team: string;
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
    carriers: {
      title: string;
      desc: string;
    };
    specialist: {
      whatsapp: string;
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
      remarks: string;
      submit: string;
      successTitle: string;
      successDesc: string;
      sendAnother: string;
      requiredMsg: string;
      contactRequiredMsg: string;
      emailInvalidMsg: string;
    };
    info: {
      title: string;
      specialistTitle: string;
      specialistName: string;
      specialistRole: string;
      phoneLabel: string;
      phoneValue: string;
      emailLabel: string;
      emailValue: string;
      hoursLabel: string;
      hoursValue: string;
      whatsapp: string;
    };
  };
  faqPage: {
    page: { title: string; desc: string };
    items: Array<{ question: string; answer: string }>;
    cta: { title: string; desc: string; button: string };
  };
};

export type Locale = "zh" | "en";

