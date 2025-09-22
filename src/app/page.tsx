import { HomePage } from "@/components/pages/home-page";
import { copy } from "@/lib/copy";

export default function Page() {
  const locale = "en" as const;
  const { header, footer, home } = copy.en;

  return <HomePage locale={locale} header={header} footer={footer} content={home} />;
}
