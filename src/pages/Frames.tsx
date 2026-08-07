import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BrandLogoGrid from "../components/BrandLogoGrid";
import CategoryTabs from "../components/CategoryTabs";
import Reveal from "../components/Reveal";
import { eyewearBrandNames, frameBrands } from "../data/frameBrands";
import shop2Image from "../photos/shop2.jpeg";

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
    <section className="page-pad bg-von-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow">Frames</p>
            <h1 className="page-title">Frame brands available at VON Optical.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              This page acknowledges the designer, performance, and luxury frame brands available in store. It is not an online shopping catalogue.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img src={shop2Image} alt="VON Optical frame display" className="max-h-[560px] w-full rounded-md object-contain shadow-soft" />
          </Reveal>
        </div>

        <div className="mt-8">
          <CategoryTabs active={selectedBrand ? "All" : activeCategory} onChange={setActiveCategory} />
          {selectedBrand && (
            <Link to="/frames" className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-von-blue-700 hover:text-von-blue-900">
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
