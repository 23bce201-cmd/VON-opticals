import Reveal from "../components/Reveal";
import StoreLocator from "../components/StoreLocator";

export default function Contact() {
  return (
    <section className="page-pad bg-von-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Visit Us</p>
          <h1 className="page-title">Visit VON Optical for eyewear and optical services.</h1>
          <p className="mt-5 text-lg leading-8 text-von-ink/70">
            Find us in Ambawadi, Ahmedabad for frames, sunglasses, contact lenses, prescription glasses, repairs, and computerised eye check up.
          </p>
        </Reveal>
        <div className="mt-10">
          <StoreLocator />
        </div>
      </div>
    </section>
  );
}
