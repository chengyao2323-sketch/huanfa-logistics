"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n, useT } from "@/i18n";
import { serviceOrder, servicePaths, servicesContent, type ServiceKey } from "@/content/services";
import styles from "./HomeServices.module.css";

// The six supplied photographs follow the same order as the service directory.
const photos: Record<ServiceKey, { src: string; position: string }> = {
  seaFreight: { src: "ocean-freight.jpg", position: "50% 65%" },
  airFreight: { src: "air-freight.jpg", position: "50% 55%" },
  doorToDoor: { src: "door-to-door.jpg", position: "50% 63%" },
  warehousing: { src: "warehousing.jpg", position: "50% 58%" },
  ecommerceLogistics: { src: "ecommerce-logistics.jpg", position: "50% 57%" },
  customsInsurance: { src: "customs-insurance.jpg", position: "50% 47%" },
};

function ServiceCard({ service }: { service: ServiceKey }) {
  const { locale } = useI18n();
  const svc = servicesContent[locale].services[service];
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const open = expanded || (hovered && !dismissed);
  const detailId = `home-service-${service}-details`;
  const titleId = `home-service-${service}-title`;

  const close = () => {
    setExpanded(false);
    setDismissed(true);
  };

  return <article
    className={styles.card}
    data-service={service}
    data-open={open}
    aria-labelledby={titleId}
    onPointerEnter={event => {
      if (event.pointerType === "mouse") { setHovered(true); setDismissed(false); }
    }}
    onPointerLeave={event => {
      if (event.pointerType === "mouse") { setHovered(false); setDismissed(false); }
    }}
    onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
    }}
    onFocus={event => {
      // Keep the revealed content open while its link is used from the keyboard.
      if (event.target instanceof HTMLAnchorElement) setExpanded(true);
    }}
    onKeyDown={event => {
      if (event.key === "Escape" && open) {
        event.preventDefault();
        close();
        toggleRef.current?.focus();
      }
    }}
  >
    <div className={styles.front} aria-hidden="true">
      <Image src={`/images/services/${photos[service].src}`} alt="" fill sizes="(min-width: 1280px) 390px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw" className={styles.photo} style={{ objectPosition: photos[service].position }} />
      <div className={styles.shade} />
      <div className={styles.frontTitle}>{svc.name}</div>
    </div>
    <h3 id={titleId} className="sr-only">{svc.name}</h3>
    <button
      ref={toggleRef}
      type="button"
      className={styles.toggle}
      aria-expanded={open}
      aria-controls={detailId}
      aria-label={`${open ? (locale === "zh" ? "收起详情" : "Hide details") : (locale === "zh" ? "展开详情" : "Show details")}: ${svc.name}`}
      onClick={() => {
        if (open) close();
        else { setExpanded(true); setDismissed(false); }
      }}
    >
      <span className={styles.toggleIcon} aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 12h14M12 5v14" /></svg>
      </span>
    </button>
    <div id={detailId} className={styles.details} aria-hidden={!open}>
      <p className={styles.detailTitle} aria-hidden="true">{svc.name}</p>
      <p className={styles.description}>{svc.summary}</p>
      <p className={styles.highlights}>{svc.highlights.join(" · ")}</p>
      <Link href={servicePaths[service]} tabIndex={open ? 0 : -1} className={styles.link} aria-label={svc.linkLabel}>
        {locale === "zh" ? "了解服务详情" : "Explore service"}<span aria-hidden="true">→</span>
      </Link>
    </div>
  </article>;
}

export default function HomeServices() {
  const t = useT();
  const { locale } = useI18n();
  return <section className="bg-gray-50 py-12 lg:py-16" id="services" aria-labelledby="home-services-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center lg:mb-10">
        <h2 id="home-services-title" className="mb-4 text-3xl font-bold text-brand-800 lg:text-4xl">{t.services.title}</h2>
        <p className="mx-auto max-w-2xl text-gray-600">{t.services.description}</p>
        <p className={styles.hint}>
          <span className={styles.mouseHint}>{locale === "zh" ? "鼠标移入图片，了解服务详情" : "Hover over a service to discover more"}</span>
          <span className={styles.touchHint}>{locale === "zh" ? "轻点图片展开详情，点击关闭按钮可收起" : "Tap a service to explore; use the close button to return"}</span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {serviceOrder.map(service => <ServiceCard key={service} service={service} />)}
      </div>
    </div>
  </section>;
}
