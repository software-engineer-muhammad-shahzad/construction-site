import Link from "next/link";
import "../styles/page-hero.css";

type Crumb = { label: string; href?: string };

// Banner for inner pages: photo background, title and breadcrumb. Sits under the translucent navbar.
export default function PageHero({
  title,
  image,
  crumbs,
  subtitle,
}: {
  title: string;
  image: string;
  crumbs: Crumb[];
  subtitle?: string;
}) {
  return (
    <section className="page-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" width={1600} height={600} className="page-hero-img" fetchPriority="high" decoding="async" />
      <div className="page-hero-inner">
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-sub">{subtitle}</p>}
        <nav aria-label="Breadcrumb">
          <ol className="crumbs">
            {crumbs.map((c, i) => (
              <li key={c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                {i < crumbs.length - 1 && <span aria-hidden="true"> / </span>}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
