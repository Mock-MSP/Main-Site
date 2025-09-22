"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Outcomes", href: "/#outcomes" },
  { label: "Industries", href: "/#industries" },
  { label: "Onboarding", href: "/#process" },
  { label: "Plans", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => href === "/about" && pathname === "/about";

  return (
    <div>
      <div className="sticky top-0 z-[60] bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="font-medium">MSP done the right way — founded in 2025 between Amsterdam &amp; London</p>
          <Button variant="secondary" size="sm" className="h-7 rounded-full" asChild>
            <Link href="/#contact">Book discovery</Link>
          </Button>
        </div>
      </div>

      <header className="sticky top-8 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60 rounded-t-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="h-8 w-8 rounded-2xl bg-slate-900 text-white grid place-items-center shadow-sm">
                <Sparkles className="h-4 w-4" />
              </Link>
              <Link href="/" className="font-semibold text-lg tracking-tight">MockMSP</Link>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`hover:text-slate-900 transition-colors ${
                    isActive(link.href) ? "text-slate-900" : "text-slate-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" className="rounded-2xl" asChild>
                <Link href="/#contact">Client Portal</Link>
              </Button>
              <Button className="rounded-2xl" asChild>
                <Link href="/#contact">Get a quote</Link>
              </Button>
            </div>
            <button
              aria-label="Toggle menu"
              className="md:hidden rounded-xl p-2 hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" className="rounded-2xl w-full" asChild>
                  <Link href="/#contact" onClick={() => setOpen(false)}>
                    Client Portal
                  </Link>
                </Button>
                <Button className="rounded-2xl w-full" asChild>
                  <Link href="/#contact" onClick={() => setOpen(false)}>
                    Get a quote
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
