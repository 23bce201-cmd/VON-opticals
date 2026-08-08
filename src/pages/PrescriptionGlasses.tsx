import { CheckCircle2 } from "lucide-react";
import LensSection from "../components/LensSection";
import Reveal from "../components/Reveal";

const prescriptionServices = [
  "Reading glasses for near work and comfortable close focus",
  "Distance glasses for daily wear, driving, and classroom or office use",
  "Computer glasses for long screen sessions and desk posture",
  "Progressive lenses for near, intermediate, and distance correction",
  "Thin high-index lenses for stronger prescriptions",
  "Prescription sunglasses and glare-control lens options",
];

export default function PrescriptionGlasses() {
  return (
    <>
      <section className="page-pad bg-white swiss-grid-pattern">
        <div className="container-wide">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <Reveal>
              <p className="section-eyebrow">Prescription glasses</p>
              <h1 className="page-title">Clear prescription glasses, measured properly before dispensing.</h1>
              <p className="mt-5 text-lg leading-8 text-von-ink/70">
                The team helps match your prescription to the right frame, lens material, coating, and wearing purpose, from reading glasses to progressives.
              </p>
            </Reveal>
            <Reveal delay={120} className="border-4 border-von-blue-900 bg-von-mist p-6 swiss-diagonal">
              <div className="grid gap-0 border-l-2 border-t-2 border-von-blue-900 sm:grid-cols-2">
                {prescriptionServices.map((service) => (
                  <p key={service} className="-ml-0.5 -mt-0.5 flex gap-3 border-2 border-von-blue-900 bg-white p-4 text-sm font-bold leading-6 text-von-blue-900/70">
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
