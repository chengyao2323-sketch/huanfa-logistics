import type { ServiceKey } from "@/content/services";

const paths: Record<ServiceKey, React.ReactNode> = {
  seaFreight: <><path d="m3 15 9-4 9 4-3 5H6l-3-5Z" /><path d="M7 13V6h10v7M10 6V3h4v3M2 21c2-1 3-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0" /></>,
  airFreight: <><path d="m3 10 7 2 4 9 2-1-1-8 6-6c2-2-1-5-3-3l-6 6-8-1-1 2Z" /><path d="m5 16-2 5 5-2" /></>,
  doorToDoor: <><path d="M3 11 12 3l9 8M5 10v11h14V10M9 21v-7h6v7" /></>,
  warehousing: <><path d="M3 21V8l9-5 9 5v13M7 21V11h10v10M7 15h10M7 18h10M1 21h22" /></>,
  ecommerceLogistics: <><path d="m3 7 9-4 9 4v11l-9 4-9-4V7Zm0 0 9 4 9-4M12 11v11M7 5l10 4" /></>,
};

export default function ServiceIcon({ service, className = "h-6 w-6" }: { service: ServiceKey; className?: string }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[service]}</svg>;
}
