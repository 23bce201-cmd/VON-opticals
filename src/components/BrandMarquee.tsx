import { getBrandLogoUrl } from "../data/brandLogoAssets";
import { frameBrandCategories, frameBrands } from "../data/frameBrands";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { usePageTransition } from "./PageTransitionProvider";

type BrandMarqueeProps = {
  compact?: boolean;
};

export default function BrandMarquee({ compact = false }: BrandMarqueeProps) {
  const { navigateWithTransition } = usePageTransition();

  return (
    <section className={compact ? "section-pad bg-white" : "section-pad bg-von-mist"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Designer frames"
            title="International eyewear, curated with an optician's eye."
            copy="Official brand logo files are used when supplied in the project; any pending asset keeps a clean name fallback so the layout remains polished."
          />
          {!compact && (
            <button type="button" onClick={() => navigateWithTransition("/frames", "left")} className="link-pill">
              View all frames
            </button>
          )}
        </div>

        <div className="mt-10 space-y-10">
          {frameBrandCategories.map((category, shelfIndex) => {
            const brands = frameBrands.filter((brand) => brand.category === category);
            return (
              <Reveal key={category} delay={shelfIndex * 120}>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-von-blue-900">{category}</h3>
                  <span className="text-sm font-semibold text-von-ink/60">{brands.length} brands</span>
                </div>
                <div className="brand-masonry">
                  {brands.map((brand, index) => (
                    <Reveal key={brand.name} className="brand-masonry-item" delay={index < 8 ? index * 45 : 0}>
                      <article className="logo-card masonry-logo-card">
                        {getBrandLogoUrl(brand.name) ? (
                          <div className="brand-logo-frame">
                            <img src={getBrandLogoUrl(brand.name) ?? undefined} alt={`${brand.name} logo`} className="brand-logo-img" />
                          </div>
                        ) : (
                          <p className="wordmark">{brand.name}</p>
                        )}
                        <p className="mt-3 min-h-16 text-sm leading-6 text-von-ink/70">{brand.tagline}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
