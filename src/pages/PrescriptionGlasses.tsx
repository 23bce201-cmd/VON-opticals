import LensSection from "../components/LensSection";
import Reveal from "../components/Reveal";
import shop1Image from "../photos/shop/shop1.jpeg";

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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <Reveal>
                <p className="section-eyebrow">Prescription glasses</p>
                <h1 className="page-title">Clear prescription glasses, measured properly before dispensing.</h1>
                <p className="mt-5 text-lg leading-8 text-von-ink/70">
                  The team helps match your prescription to the right frame, lens material, coating, and wearing purpose, from reading glasses to progressives.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="border-4 border-von-blue-900 bg-white p-2 shadow-lg">
                  <img src={shop1Image} alt="Prescription glasses display at VON Optical" className="w-full h-auto max-h-[580px] object-contain" />
                </div>
              </Reveal>
            </div>

            <Reveal delay={180} className="mt-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {prescriptionServices.map((service) => (
                  <div
                    key={service}
                    className="group flex items-start gap-3 border-2 border-von-blue-900 bg-von-mist p-5 text-sm font-bold leading-6 text-von-blue-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-von-blue-900 hover:text-white hover:shadow-[0_8px_25px_rgba(37,58,121,0.25)]"
                  >
                    <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" className="stroke-von-accent" strokeWidth="2" fill="white" />
                      <path d="M6.5 10.2l2.3 2.3 4.7-4.7" className="stroke-von-blue-900" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-von-blue-900 transition-colors group-hover:text-white">{service}</span>
                  </div>
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
