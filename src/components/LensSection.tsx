import { ArrowRight, ScanEye } from "lucide-react";
import { Link } from "react-router-dom";
import { getBrandLogoUrl } from "../data/brandLogoAssets";
import { lensBrands } from "../data/lensBrands";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type LensSectionProps = {
  compact?: boolean;
};

export default function LensSection({ compact = false }: LensSectionProps) {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Precision lens technology"
              title="Prescription lenses matched to your eyes, frame, and daily routine."
              copy="From flexible coatings to precision corridors, your lenses are engineered around your lifestyle — not the other way around."
            />
            {!compact && (
              <Link to="/lenses" className="link-pill">
                View lens options
                <ArrowRight size={16} />
              </Link>
            )}
          </div>

          <Reveal className="mt-12 overflow-hidden border-4 border-von-blue-900 bg-von-mist swiss-dots">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {lensBrands.map((brand, index) => (
                <article key={brand.name} className="group border-b-4 border-von-blue-900 bg-white p-6 transition-all duration-200 hover:bg-von-blue-900 hover:text-white hover:shadow-[0_12px_40px_rgba(37,58,121,0.3)] md:border-r-4 xl:border-b-0 last:border-r-0">
                  <p className="swiss-number">0{index + 1}. Lens</p>
                  {getBrandLogoUrl(brand.name) ? (
                    <div className="brand-logo-frame mb-5 mt-5 group-hover:border-white transition-colors duration-150">
                      <img src={getBrandLogoUrl(brand.name) ?? undefined} alt={`${brand.name} logo`} className="brand-logo-img" />
                    </div>
                  ) : (
                    <div className="mb-5 mt-5 inline-flex h-14 w-14 items-center justify-center border-2 border-von-blue-900 bg-white text-von-blue-900 group-hover:border-white transition-colors duration-150">
                      <ScanEye size={20} />
                    </div>
                  )}
                  <h3 className="font-display text-3xl font-black uppercase leading-none text-current">{brand.name}</h3>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-von-accent group-hover:text-white">{brand.specialty}</p>
                  <p className="mt-4 text-sm font-medium leading-6 text-von-blue-900/70 group-hover:text-white/80">{brand.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>

          {!compact && (
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {["Anti-glare and scratch-resistant coatings", "Blue-light and office lens recommendations", "Progressive, single-vision, and high-index fitting"].map((item) => (
                <Reveal key={item} className="border-2 border-von-blue-900 bg-white p-5 text-sm font-black uppercase leading-6 tracking-[0.08em] text-von-blue-900">
                  {item}
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
