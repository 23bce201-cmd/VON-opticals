import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoIntro from "../components/LogoIntro";
import logoUrl from "../photos/logo.jpeg";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setTimeout(() => navigate("/home"), 4300);
    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="landing-page">
      <div className="landing-wash" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <img src={logoUrl} alt="VON Optical" className="mb-8 h-14 w-auto object-contain sm:h-16" />
        <LogoIntro />
        <p className="mt-8 max-w-xl text-lg leading-8 text-von-ink/75">
          Premium eyewear, prescription glasses, contact lenses, and smart optical technology in Ambawadi.
        </p>
        <Link to="/home" className="btn-primary mt-7">
          Open Home Page
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
