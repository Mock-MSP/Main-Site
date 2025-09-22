import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-page";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Over MockMSP",
  description:
    "Leer het Nederlandse en Britse team achter MockMSP kennen en ontdek hoe onze tweetalige Microsoft 365-pod security, automatisering en adoptie combineert.",
};

export default function Page() {
  const locale = "nl" as const;
  const { header, footer, about } = copy.nl;

  return <AboutPage locale={locale} header={header} footer={footer} content={about} />;
}
