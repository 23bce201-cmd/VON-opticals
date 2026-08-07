import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { pageSequence } from "../data/navigation";
import { usePageTransition } from "./PageTransitionProvider";

export default function PageArrows() {
  const location = useLocation();
  const { navigateWithTransition } = usePageTransition();
  const currentIndex = pageSequence.findIndex((page) => page.href === location.pathname);

  if (currentIndex === -1) return null;

  const previous = pageSequence[(currentIndex - 1 + pageSequence.length) % pageSequence.length];
  const next = pageSequence[(currentIndex + 1) % pageSequence.length];

  return (
    <>
      <button type="button" className="page-arrow page-arrow-left" onClick={() => navigateWithTransition(previous.href, "right")} aria-label={`Go to ${previous.label}`}>
        <ChevronLeft size={24} />
      </button>
      <button type="button" className="page-arrow page-arrow-right" onClick={() => navigateWithTransition(next.href, "left")} aria-label={`Go to ${next.label}`}>
        <ChevronRight size={24} />
      </button>
    </>
  );
}
