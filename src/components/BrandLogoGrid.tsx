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

function masonrySizeClass(index: number) {
  if (index % 9 === 0) return "masonry-logo-card-tall";
  if (index % 5 === 0) return "masonry-logo-card-wide";
  if (index % 4 === 0) return "masonry-logo-card-compact";
  return "";
}

export default function BrandLogoGrid({ brands, includeKids = false }: BrandLogoGridProps) {
  return (
    <div className="brand-masonry">
      {brands.map((brand, index) => (
        <Reveal key={brand} className="brand-masonry-item" delay={index < 12 ? index * 45 : 0}>
          <article className={`logo-card masonry-logo-card ${masonrySizeClass(index)}`}>
            {getBrandLogoUrl(brand) ? (
              <>
                <div className="brand-logo-frame">
                  <img src={getBrandLogoUrl(brand) ?? undefined} alt={`${brand} logo`} className="brand-logo-img" />
                </div>
                <p className="mt-4 text-center text-sm font-bold text-von-blue-900">{brand}</p>
              </>
            ) : (
              <p className={`wordmark ${brandClassName(brand)}`}>{brand}</p>
            )}
          </article>
        </Reveal>
      ))}
      {includeKids && (
        <Reveal className="brand-masonry-item" delay={brands.length * 30}>
          <article className="logo-card masonry-logo-card masonry-logo-card-wide border-von-blue-500 bg-von-blue-100">
            <p className="wordmark">Kids Collection</p>
            <p className="mt-4 text-sm font-semibold leading-6 text-von-blue-900">
              Child-friendly frame and sunglass options are also available in store.
            </p>
          </article>
        </Reveal>
      )}
    </div>
  );
}
