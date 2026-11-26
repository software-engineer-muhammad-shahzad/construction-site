import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRemodelingDetail, RemodelingPage, remodelingDetails } from "@/features/remodeling";
import { site } from "@/shared/config/site";

// Prerender one page per remodeling type; unknown slugs 404.
export function generateStaticParams() {
  return remodelingDetails.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/remodeling/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getRemodelingDetail(slug);
  if (!item) return {};
  return { title: `${item.title} | ${site.name}`, description: item.summary };
}

export default async function Page({ params }: PageProps<"/remodeling/[slug]">) {
  const { slug } = await params;
  const item = getRemodelingDetail(slug);
  if (!item) notFound();
  return <RemodelingPage item={item} />;
}
