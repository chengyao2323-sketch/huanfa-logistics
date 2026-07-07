"use client";

import { useState } from "react";
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
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32 lg:h-36">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Huanfa International Logistics"
              width={140}
              height={140}
              className="rounded-lg"
              priority
            />
            <span className="text-2xl font-bold text-brand-800 leading-tight hidden sm:inline">
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
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.openMenu}
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
        <div className="md:hidden border-t border-gray-100 bg-white">
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






