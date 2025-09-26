"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FooterCopy, Locale } from "@/lib/copy";

import { Sparkles, ArrowUpRight } from "lucide-react";

type SiteFooterProps = {
  locale: Locale;
  copy: FooterCopy;
};

export function SiteFooter({ locale, copy }: SiteFooterProps) {
  const pathname = usePathname();
  const homePath = locale === "nl" ? "/nl" : "/";
  const isOnHome = pathname === homePath;
  const resolveHref = (href: string) => {
    if (href.startsWith("#")) {
      return isOnHome ? href : `${homePath}${href}`;
    }
    return href;
  };

  return (
    <footer className="mt-24 bg-gradient-to-br from-slate-900 via-sky-950 to-emerald-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr] items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-lg font-semibold tracking-tight">MockMSP</span>
                <p className="text-xs text-slate-300">{copy.localeNote}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-200 max-w-xl">{copy.tagline}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            {copy.columns.map((column) => (
              <div key={column.title} className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  {column.title}
                </div>
                <ul className="space-y-2 text-slate-200">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={resolveHref(link.href)}
                        className="inline-flex items-center gap-1 text-slate-200/90 transition hover:text-white focus-visible:outline-none focus-visible:text-white focus-visible:underline focus-visible:decoration-sky-300 focus-visible:underline-offset-4"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-300">
          <span>© {new Date().getFullYear()} MockMSP. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-4">
            {copy.legal.map((item) => (
              <Link
                key={item.label}
                href={resolveHref(item.href)}
                className="hover:text-white focus-visible:outline-none focus-visible:text-white focus-visible:underline focus-visible:decoration-sky-300 focus-visible:underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
