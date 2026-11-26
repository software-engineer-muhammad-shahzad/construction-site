import type { Metadata } from "next";
import { Footer, StickyCta } from "@/features/footer";
import { Navbar } from "@/features/navbar";
import { site } from "@/shared/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: `${site.name} – remodeling and construction services. Call ${site.phone.label}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
