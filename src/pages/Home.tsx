import BrandMarquee from "../components/BrandMarquee";
import ContactLensSection from "../components/ContactLensSection";
import Hero from "../components/Hero";
import LensSection from "../components/LensSection";
import MetaGlassesSection from "../components/MetaGlassesSection";
import TrustBar from "../components/TrustBar";
import WhyVon from "../components/WhyVon";
import StoreLocator from "../components/StoreLocator";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BrandMarquee />
      <LensSection />
      <ContactLensSection />
      <MetaGlassesSection />
      <WhyVon />
      <section className="section-pad bg-von-mist/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visit Us"
            title="Find VON Optical in Ambawadi, Ahmedabad."
            copy="Visit the store for frames, sunglasses, prescription glasses, contact lenses, repairs, and computerised eye check up."
          />
          <Reveal className="mt-10" delay={100}>
            <StoreLocator />
          </Reveal>
        </div>
      </section>
    </>
  );
}
