import type { Metadata } from "next";

import { HomePage } from "@/components/pages/home-page";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: "MockMSP Nederland",
  description:
    "Tweetalige managed services voor Microsoft 365, security en automatisering. Ontdek hoe MockMSP Nederlandse en Britse teams ondersteunt.",
};

export default function Page() {
  const locale = "nl" as const;
  const { header, footer, home } = copy.nl;

  return <HomePage locale={locale} header={header} footer={footer} content={home} />;
}
