"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-brand-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Huanfa Logistics</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">{t.footer.home}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.services}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t.footer.about}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t.footer.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.ocean}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.air}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.land}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.footer.warehouse}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{t.footer.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.icp}</p>
        </div>
      </div>
    </footer>
  );
}

