const carriers = [
  { name: "DHL", mark: <span className="bg-[#ffcc00] px-4 py-2 text-2xl font-black italic tracking-[-0.08em] text-[#d40511]">DHL</span> },
  { name: "FedEx", mark: <span className="text-2xl font-extrabold tracking-[-0.08em]"><span className="text-[#4d148c]">Fed</span><span className="text-[#ff6600]">Ex</span></span> },
  { name: "UPS", mark: <span className="rounded-b-xl rounded-t-md bg-[#351c15] px-4 py-2 text-xl font-bold text-[#ffb500]">UPS</span> },
  { name: "USPS", mark: <span className="text-2xl font-black italic tracking-tight text-[#004b87]">USPS</span> },
  { name: "SF Express", mark: <span className="text-xl font-black italic"><span className="text-[#d71920]">SF</span> <span className="text-gray-800">EXPRESS</span></span> },
  { name: "Maersk", mark: <span className="flex items-center gap-2 text-xl font-bold tracking-wide text-[#003f5c]"><span className="flex h-8 w-8 items-center justify-center rounded bg-[#42b0d5] text-xl text-white">✦</span>MAERSK</span> },
  { name: "COSCO Shipping", mark: <span className="text-center text-lg font-black leading-none tracking-tight text-[#005bac]">COSCO<br/><span className="text-xs tracking-[0.2em]">SHIPPING</span></span> },
  { name: "MSC", mark: <span className="border-2 border-[#f4b223] px-4 py-1 text-2xl font-black tracking-tight text-gray-900">MSC</span> },
] as const;

export default function CarrierNetwork() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
      {carriers.map((carrier) => (
        <div
          key={carrier.name}
          className="flex min-h-28 items-center justify-center rounded-2xl border border-gray-100 bg-white px-4 py-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
          aria-label={carrier.name}
          title={carrier.name}
        >
          {carrier.mark}
        </div>
      ))}
    </div>
  );
}
