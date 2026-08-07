import { Eye, Timer, Waves } from "lucide-react";
import BrandLogoGrid from "../components/BrandLogoGrid";
import ContactLensSection from "../components/ContactLensSection";
import Reveal from "../components/Reveal";
import { contactLensBrands } from "../data/contactLensBrands";

const fittingSteps = [
  { title: "Prescription review", copy: "The optometrist checks whether your spectacle prescription needs a contact lens conversion." },
  { title: "Trial lens assessment", copy: "Lens movement, centration, comfort, and vision are checked on-eye before finalizing." },
  { title: "Wear schedule", copy: "You leave with cleaning guidance, wearing time, replacement cycle, and review advice." },
];

export default function ContactLenses() {
  return (
    <>
      <section className="page-pad bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="section-eyebrow">Contact lenses</p>
            <h1 className="page-title">Comfortable contact lenses need careful fitting first.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              VON Optical carries Bausch + Lomb, Alcon, CooperVision, and Johnson & Johnson for daily, monthly, toric, and multifocal needs.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: Eye, label: "Vision clarity" },
              { icon: Waves, label: "Moisture and comfort" },
              { icon: Timer, label: "Safe wearing schedule" },
            ].map((item, index) => (
              <Reveal key={item.label} delay={index * 90} className="rounded-md border border-von-blue-100 bg-von-mist p-6">
                <item.icon className="text-von-blue-900" size={26} />
                <h2 className="mt-4 font-display text-2xl font-semibold text-von-blue-900">{item.label}</h2>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <BrandLogoGrid brands={contactLensBrands.map((brand) => brand.name)} context="contact lenses" />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {fittingSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90} className="rounded-md border border-von-blue-100 bg-von-mist p-6">
                <h2 className="font-display text-xl font-semibold text-von-blue-900">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-von-ink/70">{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ContactLensSection compact />
    </>
  );
}
