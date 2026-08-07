import { Camera, Headphones, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import raybanMeta from "../photos/rayban meta ai.webp";
import oakleyMeta from "../photos/oakley meta ai.webp";
import Reveal from "./Reveal";

type MetaGlassesSectionProps = {
  compact?: boolean;
};

export default function MetaGlassesSection({ compact = false }: MetaGlassesSectionProps) {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="overflow-hidden rounded-md bg-von-blue-900 text-white shadow-lift">
          <div className="grid min-h-[620px] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase text-white/70">Meta AI smart glasses</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
                The future of eyewear, fitted by an optical store.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                Ray-Ban Meta and Oakley Meta bring camera capture, open-ear audio, calls, and AI assistance into frames you can actually try on, adjust, and understand before buying.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Camera, label: "Hands-free capture" },
                  { icon: Sparkles, label: "Meta AI assistant" },
                  { icon: Headphones, label: "Open-ear audio" },
                ].map((item) => (
                  <div key={item.label} className="rounded-md border border-white/20 bg-white/10 p-4">
                    <item.icon size={22} />
                    <p className="mt-3 text-sm font-semibold leading-5 text-white/90">{item.label}</p>
                  </div>
                ))}
              </div>
              {!compact && (
                <Link to="/meta-glasses" className="mt-9 inline-flex min-h-11 w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-von-blue-900 transition hover:bg-von-blue-100 focus-ring">
                  Explore Meta glasses
                </Link>
              )}
            </div>
            <div className="relative grid min-h-[620px] content-center gap-5 overflow-hidden bg-white p-5 text-von-ink sm:p-7">
              <div className="rounded-md border border-von-blue-100 bg-white p-4 shadow-soft">
                <img src={raybanMeta} alt="Ray-Ban Meta smart glasses" className="meta-float h-[340px] w-full object-contain sm:h-[420px]" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <img src={oakleyMeta} alt="Oakley Meta smart glasses" className="h-56 w-full rounded-md border border-von-blue-100 bg-white object-contain p-4 shadow-sm sm:h-64" />
                <div className="rounded-md border border-von-blue-100 bg-von-mist p-5 text-sm font-semibold leading-6 text-von-blue-900">
                  Ray-Ban Meta and Oakley Meta are shown with clean white product backgrounds for a realistic in-store smart glasses presentation.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
