import { constructionCatalog } from "@/shared/config/construction-catalog";
import { remodelingCatalog } from "@/shared/config/remodeling-catalog";
import { serviceCatalog } from "@/shared/config/service-catalog";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: serviceCatalog.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    label: "Remodeling",
    href: "/remodeling",
    children: remodelingCatalog.map((r) => ({ label: r.title, href: `/remodeling/${r.slug}` })),
  },
  {
    label: "Construction",
    href: "/construction",
    children: constructionCatalog.map((c) => ({ label: c.title, href: `/construction/${c.slug}` })),
  },
  { label: "F.A.Q.", href: "/faq" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Service Areas", href: "/service-areas" },
];
