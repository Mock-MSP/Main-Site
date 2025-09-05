import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MockMSP — Not real. Just really good.",
  description: "AI‑automated demo MSP brand for proofs of concept.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}