import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConstructionPage, constructionDetails, getConstructionDetail } from "@/features/construction";
import { site } from "@/shared/config/site";

// Prerender one page per construction type; unknown slugs 404.
export function generateStaticParams() {
  return constructionDetails.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/construction/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getConstructionDetail(slug);
  if (!item) return {};
  return { title: `${item.title} | ${site.name}`, description: item.summary };
}

export default async function Page({ params }: PageProps<"/construction/[slug]">) {
  const { slug } = await params;
  const item = getConstructionDetail(slug);
  if (!item) notFound();
  return <ConstructionPage item={item} />;
}
