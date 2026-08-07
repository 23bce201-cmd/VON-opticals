import BrandLogoGrid from "../components/BrandLogoGrid";
import Reveal from "../components/Reveal";
import { eyewearBrandNames } from "../data/frameBrands";
import sunglassImage from "../photos/shop1.jpeg";

export default function Sunglasses() {
  return (
    <section className="page-pad bg-von-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow">Sunglasses</p>
            <h1 className="page-title">Premium sunglasses from international eyewear houses.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              VON Optical showcases designer and performance sunglasses for everyday glare, driving, holidays, and prescription sun lens discussions. This is an in-store brand acknowledgement, not online shopping.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img src={sunglassImage} alt="Premium eyewear display at VON Optical" className="aspect-[16/10] w-full rounded-md object-cover shadow-soft" />
          </Reveal>
        </div>
        <div className="mt-12">
          <BrandLogoGrid brands={eyewearBrandNames} context="sunglasses" includeKids />
        </div>
      </div>
    </section>
  );
}
