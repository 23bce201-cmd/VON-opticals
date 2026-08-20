import { getBrandLogoUrl } from "../data/brandLogoAssets";
import Reveal from "./Reveal";

type BrandLogoGridProps = {
  brands: readonly string[];
  context?: "frames" | "sunglasses" | "contact lenses";
  includeKids?: boolean;
};

function brandClassName(name: string) {
  const normalized = name.toLowerCase();
  if (normalized.includes("ray-ban")) return "font-bold";
  if (normalized.includes("dita")) return "font-extrabold";
  if (normalized.includes("saint") || normalized.includes("ysl")) return "font-semibold";
  if (normalized.includes("tom ford") || normalized.includes("prada")) return "font-medium";
  return "font-semibold";
}

export default function BrandLogoGrid({ brands, includeKids = false, context }: BrandLogoGridProps) {
  const gridClass = context === "contact lenses"
    ? "grid grid-cols-2 gap-4 sm:grid-cols-4"
    : "brand-masonry gap-4";

  return (
    <div className={gridClass}>
      {brands.map((brand, index) => (
        <Reveal key={brand} className="brand-masonry-item" delay={index < 12 ? index * 45 : 0}>
          <article className="logo-card masonry-logo-card group transition-all duration-200 hover:shadow-[0_8px_30px_rgba(37,58,121,0.15)] hover:-translate-y-1">
            {getBrandLogoUrl(brand) ? (
              <>
                <div className="brand-logo-frame group-hover:border-white transition-colors duration-150">
                  <img src={getBrandLogoUrl(brand) ?? undefined} alt={`${brand} logo`} className="brand-logo-img" />
                </div>
                <p className="mt-4 text-center text-xs font-black uppercase tracking-[0.18em] text-current">{brand}</p>
              </>
            ) : (
              <p className={`wordmark ${brandClassName(brand)}`}>{brand}</p>
            )}
          </article>
        </Reveal>
      ))}
      {includeKids && (
        <Reveal className="brand-masonry-item" delay={brands.length * 30}>
          <article className="logo-card masonry-logo-card border-von-blue-500 bg-von-mist swiss-diagonal">
            <p className="wordmark">Kids Collection</p>
            <p className="mt-4 text-sm font-bold leading-6 text-current">
              Child-friendly frame and sunglass options are also available in store.
            </p>
          </article>
        </Reveal>
      )}
    </div>
  );
}
