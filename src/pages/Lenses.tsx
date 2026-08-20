import { CheckCircle2 } from "lucide-react";
import LensSection from "../components/LensSection";
import Reveal from "../components/Reveal";

const lensServices = [
  "Single-vision lenses for reading, distance, and everyday use",
  "Progressive lenses with corridor selection and fitting height checks",
  "High-index lenses for stronger prescriptions and slimmer edges",
  "Anti-glare, scratch-resistant, UV, and blue-light coating guidance",
  "Office and occupational lenses for desk, screen, and near work",
  "Sunglass prescription and polarized lens recommendations",
];

export default function Lenses() {
  return (
    <>
      <section className="page-pad bg-white swiss-grid-pattern">
        <div className="container-wide">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <Reveal>
              <p className="section-eyebrow">Prescription lenses</p>
              <h1 className="page-title">Lens advice that starts with how you actually use your eyes.</h1>
              <p className="mt-5 text-lg leading-8 text-von-ink/70">
                VON Optical works with Essilor, Zeiss, Nikon, and Rodenstock lens technology for clear prescriptions, sharper coatings, and better day-to-day comfort.
              </p>
            </Reveal>
            <Reveal delay={120} className="border-4 border-von-blue-900 bg-von-mist p-6 swiss-diagonal">
              <div className="grid gap-3 sm:grid-cols-2">
                {lensServices.map((service) => (
                  <p key={service} className="flex gap-3 border-2 border-von-blue-900 bg-white p-4 text-sm font-bold leading-6 text-von-blue-900/70">
                    <CheckCircle2 className="mt-1 shrink-0 text-von-accent" size={18} strokeWidth={2.5} />
                    {service}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <LensSection compact />
    </>
  );
}
