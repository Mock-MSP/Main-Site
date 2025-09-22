"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import { HeaderCopy, Locale } from "@/lib/copy";

import { Sparkles, Menu, X, Languages } from "lucide-react";

type SiteHeaderProps = {
  locale: Locale;
  copy: HeaderCopy;
};

export function SiteHeader({ locale, copy }: SiteHeaderProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return false;
    }
    return pathname === href;
  };

  return (
    <div className="sticky top-0 z-[70]">
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-emerald-900 text-white text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 font-medium">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {copy.announcement}
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="h-7 rounded-full bg-white/20 text-white hover:bg-white/30"
            asChild
          >
            <Link href={copy.announcementCta.href}>{copy.announcementCta.label}</Link>
          </Button>
        </div>
      </div>

      <header className="backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/70 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Link
                href={locale === "nl" ? "/nl" : "/"}
                className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 via-teal-500 to-emerald-500 text-white shadow-lg"
              >
                <Sparkles className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">MockMSP home</span>
              </Link>
              <div className="flex flex-col">
                <Link href={locale === "nl" ? "/nl" : "/"} className="font-semibold text-lg tracking-tight text-slate-900">
                  MockMSP
                </Link>
                <span className="text-xs font-medium text-slate-500">{copy.tagline}</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
              {copy.nav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors hover:text-slate-900 ${
                    isActive(link.href) ? "text-slate-900" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={copy.languageToggle.href}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-sky-200 hover:text-slate-900"
              >
                <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                {copy.languageToggle.label}
              </Link>
              <Button variant="outline" className="rounded-full border-slate-200" asChild>
                <Link href={copy.secondaryAction.href}>{copy.secondaryAction.label}</Link>
              </Button>
              <Button className="rounded-full" asChild>
                <Link href={copy.primaryAction.href}>{copy.primaryAction.label}</Link>
              </Button>
            </div>
            <button
              aria-label="Toggle menu"
              className="md:hidden rounded-xl border border-slate-200 p-2 text-slate-600"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white/95">
            <div className="px-4 py-4 space-y-3">
              {copy.nav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={copy.languageToggle.href}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600"
                  onClick={() => setOpen(false)}
                >
                  <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.languageToggle.label}
                </Link>
                <Button variant="outline" className="rounded-full border-slate-200 flex-1" asChild>
                  <Link href={copy.secondaryAction.href} onClick={() => setOpen(false)}>
                    {copy.secondaryAction.label}
                  </Link>
                </Button>
                <Button className="rounded-full flex-1" asChild>
                  <Link href={copy.primaryAction.href} onClick={() => setOpen(false)}>
                    {copy.primaryAction.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
