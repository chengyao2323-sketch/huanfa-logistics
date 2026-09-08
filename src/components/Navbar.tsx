"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useI18n } from "@/i18n";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, toggleLocale } = useI18n();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/personal-shipping-from-china", label: locale === "zh" ? "个人运输" : "Personal Shipping" },
    { href: "/shipment-cases", label: locale === "zh" ? "真实案例" : "Shipping Cases" },
    { href: "/about", label: t.nav.about },
    { href: "/faq", label: t.nav.faq },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Huanfa International Logistics"
              width={80}
              height={80}
              className="h-16 w-16 rounded-lg lg:h-20 lg:w-20"
              priority
            />
            <span className="hidden text-xl font-bold leading-tight text-brand-800 sm:inline">
              {locale === "zh" ? (
                <span className="inline-grid grid-cols-6" style={{ width: '192px', verticalAlign: 'middle' }}>
                  <span className="text-center" style={{ transform: 'scale(1.09)' }}>焕</span>
                  <span className="text-center">发</span>
                  <span className="text-center">国</span>
                  <span className="text-center">际</span>
                  <span className="text-center">物</span>
                  <span className="text-center">流</span>
                </span>
              ) : "Huanfa Logistics"}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-5 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand-600 border-b-2 border-brand-600 pb-1"
                    : "text-gray-600 hover:text-brand-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md border border-gray-200 text-gray-500 hover:border-brand-300 hover:text-brand-600 transition-colors"
              aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
            >
              {locale === "zh" ? "EN" : "中文"}
            </button>

            <Link
              href="/contact"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-brand-700 transition-colors"
            >
              {t.nav.getQuote}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="min-h-11 min-w-11 rounded-lg p-2 text-gray-600 hover:bg-gray-100 xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? (locale === "zh" ? "关闭菜单" : "Close menu") : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gray-100 bg-white xl:hidden">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  isActive(link.href) ? "text-brand-600" : "text-gray-600 hover:text-brand-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile language toggle */}
            <button
              onClick={() => {
                toggleLocale();
                setMenuOpen(false);
              }}
              className="block w-full text-left text-sm font-medium py-2 text-gray-600 hover:text-brand-600"
            >
              {locale === "zh" ? "English" : "中文"}
            </button>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}






