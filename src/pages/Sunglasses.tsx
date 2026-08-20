import BrandLogoGrid from "../components/BrandLogoGrid";
import BrandModelShowcase from "../components/BrandModelShowcase";
import BrandProductShowcase from "../components/BrandProductShowcase";
import Reveal from "../components/Reveal";
import { eyewearBrandNames } from "../data/frameBrands";
import shop2Image from "../photos/shop/shop2.jpeg";

export default function Sunglasses() {
  return (
    <section className="page-pad bg-von-mist swiss-grid-pattern">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow">Sunglasses</p>
            <h1 className="page-title">Premium sunglasses from international eyewear houses.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              A curated wall of designer and performance eyewear for the drive, the beach, or the boardroom — named houses, worn in real light.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-4 border-von-blue-900 bg-white p-2 shadow-2xl">
              <img
                src={shop2Image}
                alt="Premium sunglasses display at VON Optical"
                className="w-full aspect-[4/3] min-h-[380px] object-cover sm:min-h-[460px] lg:min-h-[520px]"
              />
            </div>
          </Reveal>
        </div>
        <BrandModelShowcase type="sunglasses" />
        <BrandProductShowcase type="sunglasses" />
        <div className="mt-12">
          <BrandLogoGrid brands={eyewearBrandNames} context="sunglasses" includeKids />
        </div>
      </div>
    </section>
  );
}
