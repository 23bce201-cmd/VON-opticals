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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Precision lens technology"
            title="Prescription lenses matched to your eyes, frame, and daily routine."
            copy="VON Optical keeps lens makers visually distinct from frame brands. The consultation starts with your prescription, then refines coatings, thickness, corridor design, and screen use."
          />
          {!compact && (
            <Link to="/lenses" className="link-pill">
              View lens options
              <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-md border border-von-blue-100 bg-von-mist">
          <div className="grid divide-y divide-von-blue-100 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
            {lensBrands.map((brand) => (
              <article key={brand.name} className="p-6">
                {getBrandLogoUrl(brand.name) ? (
                  <div className="brand-logo-frame mb-5">
                    <img src={getBrandLogoUrl(brand.name) ?? undefined} alt={`${brand.name} logo`} className="brand-logo-img" />
                  </div>
                ) : (
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-von-blue-900">
                    <ScanEye size={20} />
                  </div>
                )}
                <h3 className="font-display text-2xl font-semibold text-von-blue-900">{brand.name}</h3>
                <p className="mt-2 font-semibold text-von-blue-700">{brand.specialty}</p>
                <p className="mt-4 text-sm leading-6 text-von-ink/70">{brand.detail}</p>
              </article>
            ))}
          </div>
        </Reveal>

        {!compact && (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Anti-glare and scratch-resistant coatings", "Blue-light and office lens recommendations", "Progressive, single-vision, and high-index fitting"].map((item) => (
              <Reveal key={item} className="rounded-md border border-von-blue-100 bg-white p-5 text-sm font-semibold text-von-blue-900 shadow-sm">
                {item}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
