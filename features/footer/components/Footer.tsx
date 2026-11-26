import "../styles/footer.css";
import BackToTop from "./BackToTop";
import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import FooterPayments from "./FooterPayments";
import ReviewBar from "./ReviewBar";

export default function Footer() {
  return (
    <footer className="mt-16 text-white">
      <BackToTop />
      <div className="h-1 bg-gradient-to-r from-[#fbb713] via-[#ffd45e] to-[#fbb713]" />

      <div className="footer-main relative overflow-hidden px-6 pt-14 pb-6 text-[12px]">
        <span className="footer-watermark" aria-hidden="true">
          WCSS
        </span>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
            <FooterBrand />
            <FooterLinks />
            <FooterContact />
            <FooterPayments />
          </div>
          <FooterCopyright />
        </div>
      </div>

      <ReviewBar />
    </footer>
  );
}
