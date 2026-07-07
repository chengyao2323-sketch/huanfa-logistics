export type I18nDict = {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
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
      addressLabel: string;
      addressValue: string;
      phoneLabel: string;
      phoneValue: string;
      emailLabel: string;
      emailValue: string;
      hoursLabel: string;
      hoursValue: string;
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
};

export type Locale = "zh" | "en";

