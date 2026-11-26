import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceDetail, ServicePage, serviceDetails } from "@/features/services";
import { site } from "@/shared/config/site";

// Prerender one page per service; unknown slugs 404.
export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  return { title: `${service.title} | ${site.name}`, description: service.summary };
}

export default async function Page({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
