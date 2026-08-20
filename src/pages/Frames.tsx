import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BrandLogoGrid from "../components/BrandLogoGrid";
import BrandModelShowcase from "../components/BrandModelShowcase";
import BrandProductShowcase from "../components/BrandProductShowcase";
import CategoryTabs from "../components/CategoryTabs";
import Reveal from "../components/Reveal";
import { eyewearBrandNames, frameBrands } from "../data/frameBrands";
import shop3Image from "../photos/shop/shop3.jpeg";

export default function Frames() {
  const [searchParams] = useSearchParams();
  const selectedBrand = searchParams.get("brand");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBrands = useMemo(() => {
    if (selectedBrand) return frameBrands.filter((brand) => brand.name === selectedBrand);
    if (activeCategory === "All") return frameBrands;
    return frameBrands.filter((brand) => brand.category === activeCategory);
  }, [activeCategory, selectedBrand]);

  return (
    <section className="page-pad bg-von-mist swiss-grid-pattern">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow">Frames</p>
            <h1 className="page-title">Frame brands available at VON Optical.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              Gallery of the world's most coveted eyewear names — where fashion, craft, and optical science meet on our shelves.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-4 border-von-blue-900 bg-white p-2">
              <img src={shop3Image} alt="VON Optical frame display" className="w-full h-auto max-h-[580px] object-contain" />
            </div>
          </Reveal>
        </div>

        <BrandModelShowcase type="frames" />
        <BrandProductShowcase type="frames" />

        <div className="mt-8">
          <CategoryTabs active={selectedBrand ? "All" : activeCategory} onChange={setActiveCategory} />
          {selectedBrand && (
            <Link to="/frames" className="mt-4 inline-flex min-h-12 items-center border-2 border-von-blue-900 bg-white px-4 text-xs font-black uppercase tracking-[0.18em] text-von-blue-900 hover:bg-von-blue-900 hover:text-white">
              Clear brand filter
            </Link>
          )}
        </div>

        <div className="mt-8">
          <BrandLogoGrid brands={selectedBrand || activeCategory !== "All" ? filteredBrands.map((brand) => brand.name) : eyewearBrandNames} context="frames" includeKids />
        </div>
      </div>
    </section>
  );
}
