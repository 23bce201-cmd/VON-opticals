import { getBrandLogoUrl } from "../data/brandLogoAssets";
import { frameBrandCategories, frameBrands } from "../data/frameBrands";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { usePageTransition } from "./PageTransitionProvider";
import BrandModelShowcase from "./BrandModelShowcase";

type BrandMarqueeProps = {
  compact?: boolean;
};

export default function BrandMarquee({ compact = false }: BrandMarqueeProps) {
  const { navigateWithTransition } = usePageTransition();

  return (
    <section className={compact ? "section-pad bg-white swiss-grid-pattern" : "section-pad bg-von-mist swiss-grid-pattern"}>
      <div className="container-wide">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Designer frames"
              title="International eyewear, curated with an optician's eye."
              copy="World-class eyewear houses, one wall — from Italian craftsmanship to American iconography, displayed the way connoisseurs expect."
            />
            {!compact && (
              <button type="button" onClick={() => navigateWithTransition("/frames", "left")} className="link-pill">
                View all frames
              </button>
            )}
          </div>

          {!compact && <BrandModelShowcase compact />}

          <div className="mt-12 space-y-12">
            {frameBrandCategories.map((category, shelfIndex) => {
              const brands = frameBrands.filter((brand) => brand.category === category);
              const isBordered = shelfIndex >= 1; // 03. Sport & Performance
              return (
                <Reveal key={category} delay={shelfIndex * 120}>
                  <div
                    className={`bg-white p-6 sm:p-8 ${
                      isBordered ? "border-4 border-von-blue-900" : ""
                    }`}
                  >
                    <div className="mb-6 flex items-end justify-between gap-4 border-b-4 border-von-blue-900 pb-5">
                      <div>
                        <p className="swiss-number">{String(shelfIndex + 2).padStart(2, "0")}. Category</p>
                        <h3 className="mt-2 font-display text-3xl font-black uppercase leading-none text-von-blue-900 sm:text-5xl">{category}</h3>
                      </div>
                    </div>
                    <div className="brand-masonry gap-4">
                      {brands.map((brand, index) => (
                        <Reveal key={brand.name} className="brand-masonry-item" delay={index < 8 ? index * 45 : 0}>
                          <article className="logo-card masonry-logo-card group transition-all duration-200 hover:shadow-[0_8px_30px_rgba(37,58,121,0.15)] hover:-translate-y-1">
                            {getBrandLogoUrl(brand.name) ? (
                              <div className="brand-logo-frame group-hover:border-white transition-colors duration-150">
                                <img src={getBrandLogoUrl(brand.name) ?? undefined} alt={`${brand.name} logo`} className="brand-logo-img" />
                              </div>
                            ) : (
                              <p className="wordmark">{brand.name}</p>
                            )}
                            <p className="mt-3 min-h-16 text-sm font-medium leading-6 text-von-blue-900/70 group-hover:text-white/85">{brand.tagline}</p>
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
