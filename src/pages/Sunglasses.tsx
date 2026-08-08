import BrandLogoGrid from "../components/BrandLogoGrid";
import BrandModelShowcase from "../components/BrandModelShowcase";
import BrandProductShowcase from "../components/BrandProductShowcase";
import Reveal from "../components/Reveal";
import { eyewearBrandNames } from "../data/frameBrands";
import sunglassImage from "../photos/shop/shop3.jpeg";

export default function Sunglasses() {
  return (
    <section className="page-pad bg-von-mist swiss-grid-pattern">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow">Sunglasses</p>
            <h1 className="page-title">Premium sunglasses from international eyewear houses.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              A curated wall of designer and performance eyewear for the drive, the beach, or the boardroom — named houses, worn in real light.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img src={sunglassImage} alt="Premium eyewear display at VON Optical" className="aspect-[16/10] w-full border-4 border-von-blue-900 object-contain " />
          </Reveal>
        </div>
        <BrandModelShowcase compact />
        <BrandProductShowcase />
        <div className="mt-12">
          <BrandLogoGrid brands={eyewearBrandNames} context="sunglasses" includeKids />
        </div>
      </div>
    </section>
  );
}
