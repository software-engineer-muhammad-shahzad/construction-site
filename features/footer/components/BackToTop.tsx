import { ChevronUpIcon } from "@/shared/components/icons";

// Fixed bottom-right button; appears after scrolling (see navbar ScrollWatcher flag).
export default function BackToTop() {
  return (
    <a href="#" aria-label="Back to top" className="to-top">
      <ChevronUpIcon size={20} />
    </a>
  );
}
