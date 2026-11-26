import CtaButton from "@/shared/components/CtaButton";
import PageHero from "@/shared/components/PageHero";
import { faqs } from "../data/faqs";
import "../styles/faq.css";

// /faq — accordion built on native <details> (no JavaScript needed).
export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        image="https://picsum.photos/seed/wcss-faq/1600/600"
        subtitle="Quick answers about working with WCSS Construction"
        crumbs={[{ label: "Home", href: "/" }, { label: "F.A.Q." }]}
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="faq-list">
          {faqs.map((item, i) => (
            <details key={item.q} name="faq" className="faq-item" open={i === 0}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">Still have a question?</p>
          <CtaButton href="/contact">Contact us</CtaButton>
        </div>
      </section>
    </>
  );
}
