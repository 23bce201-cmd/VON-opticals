import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type PageTransitionContextValue = {
  navigateWithTransition: (href: string, direction?: "left" | "right") => void;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export function PageTransitionProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"cover" | "reveal" | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const value = useMemo<PageTransitionContextValue>(
    () => ({
      navigateWithTransition: (href: string, nextDirection = "left") => {
        setDirection(nextDirection);
        setPhase("cover");
        window.setTimeout(() => {
          navigate(href);
          setPhase("reveal");
        }, 460);
        window.setTimeout(() => setPhase(null), 1020);
      },
    }),
    [navigate],
  );

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
      <div className={`page-slide-overlay ${phase ? `page-slide-overlay-${phase}-${direction}` : ""}`} />
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used inside PageTransitionProvider");
  }
  return context;
}
