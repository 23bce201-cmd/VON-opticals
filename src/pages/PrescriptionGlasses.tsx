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
      <section className="page-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <Reveal>
            <p className="section-eyebrow">Prescription glasses</p>
            <h1 className="page-title">Clear prescription glasses, measured properly before dispensing.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              The team helps match your prescription to the right frame, lens material, coating, and wearing purpose, from reading glasses to progressives.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-md bg-von-mist p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {prescriptionServices.map((service) => (
                <p key={service} className="flex gap-3 rounded-md bg-white p-4 text-sm leading-6 text-von-ink/70">
                  <CheckCircle2 className="mt-1 shrink-0 text-von-blue-700" size={18} />
                  {service}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <LensSection compact />
    </>
  );
}
