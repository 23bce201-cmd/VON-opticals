import Reveal from "../components/Reveal";
import StoreLocator from "../components/StoreLocator";

export default function VisitUs() {
  return (
    <section className="page-pad bg-von-mist/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <p className="section-eyebrow">Visit Us</p>
            <h1 className="page-title">Visit VON Optical in Ambawadi, Ahmedabad.</h1>
            <p className="mt-4 text-lg leading-8 text-von-ink/70">
              Come in for international frames, designer sunglasses, contact lenses, computerised eye check up, and expert optical repairs.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <StoreLocator />
        </Reveal>
      </div>
    </section>
  );
}
