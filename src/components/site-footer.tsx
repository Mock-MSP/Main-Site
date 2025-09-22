import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-slate-900 text-white grid place-items-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-semibold">MockMSP</span>
            </div>
            <p className="mt-3 text-slate-600">
              Managed IT &amp; Security for modern businesses.
            </p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <Link href="/#services" className="hover:text-slate-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-slate-900">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-900">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Resources</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <Link href="#" className="hover:text-slate-900">
                  Service Catalog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900">
                  Incident Runbook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-900">
                  Security Baseline
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Compliance</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>ISO-aligned controls</li>
              <li>DPA on request</li>
              <li>EU data residency options</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} MockMSP. All rights reserved.</span>
          <span>Amsterdam · London</span>
        </div>
      </div>
    </footer>
  );
}
