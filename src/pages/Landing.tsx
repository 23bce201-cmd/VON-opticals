import { useEffect } from "react";
import { usePageTransition } from "../components/PageTransitionProvider";
import logoUrl from "../photos/logoNoBG.png";

export default function Landing() {
  const { navigateWithTransition } = usePageTransition();

  useEffect(() => {
    const timer = window.setTimeout(() => navigateWithTransition("/home"), 4300);
    return () => window.clearTimeout(timer);
  }, [navigateWithTransition]);

  return (
    <section className="splash-screen">
      <div className="splash-wash" />
      <div className="splash-content">
        <div className="splash-logo-wrap">
          <div className="splash-orbit" />
          <img src={logoUrl} alt="VON Optical" className="splash-logo" />
        </div>
        <span className="splash-wordmark">VON Optical</span>
        <div className="splash-loader" role="progressbar" aria-label="Loading VON Optical">
          <div className="splash-loader-bar" />
        </div>
      </div>
    </section>
  );
}