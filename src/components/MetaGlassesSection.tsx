import { Camera, Headphones, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import raybanMeta from "../photos/products/rayban meta ai.webp";
import oakleyMeta from "../photos/products/oakley meta ai.webp";
import Reveal from "./Reveal";

type MetaGlassesSectionProps = {
  compact?: boolean;
};

export default function MetaGlassesSection({ compact = false }: MetaGlassesSectionProps) {
  return (
    <section className="section-pad bg-white swiss-grid-pattern">
      <div className="container-wide">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="overflow-hidden border-4 border-von-blue-900 bg-white text-von-blue-900">
            <div className="grid min-h-[620px] lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex flex-col justify-center border-b-4 border-von-blue-900 bg-von-blue-900 p-7 text-white sm:p-10 lg:border-b-0 lg:border-r-4 lg:p-12">
                <p className="swiss-label text-white">04. Meta AI smart glasses</p>
                <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.92] sm:text-6xl">
                  The future of eyewear, fitted by an optical store.
                </h2>
                <p className="mt-6 max-w-xl border-l-4 border-white pl-5 text-lg font-medium leading-8 text-white/80">
                  Ray-Ban Meta and Oakley Meta bring camera capture, open-ear audio, calls, and AI assistance into frames you can actually try on, adjust, and understand before buying.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Camera, label: "Hands-free capture" },
                    { icon: Sparkles, label: "Meta AI assistant" },
                    { icon: Headphones, label: "Open-ear audio" },
                  ].map((item) => (
                    <div key={item.label} className="border-2 border-white bg-von-blue-900 p-4 transition-all duration-200 hover:bg-von-accent hover:shadow-[0_8px_30px_rgba(255,74,28,0.3)]">
                      <item.icon size={22} strokeWidth={2.5} />
                      <p className="mt-3 text-xs font-black uppercase leading-5 tracking-[0.14em] text-white">{item.label}</p>
                    </div>
                  ))}
                </div>
                {!compact && (
                  <Link to="/meta-glasses" className="mt-9 inline-flex min-h-14 w-fit items-center border-2 border-white bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-von-blue-900 transition-all duration-200 hover:border-von-accent hover:bg-von-accent hover:text-white focus-ring">
                    Explore Meta glasses
                  </Link>
                )}
              </div>
              <div className="relative grid min-h-[620px] content-center gap-5 overflow-hidden bg-white p-5 text-von-blue-900 sm:p-7 swiss-dots">
                <div className="border-4 border-von-blue-900 bg-white p-4">
                  <img src={raybanMeta} alt="Ray-Ban Meta smart glasses" className="meta-float h-[340px] w-full object-contain  sm:h-[420px]" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <img src={oakleyMeta} alt="Oakley Meta smart glasses" className="h-56 w-full border-4 border-von-blue-900 bg-white object-contain p-4  sm:h-64" />
                  <div className="border-4 border-von-blue-900 bg-von-mist p-5 text-sm font-black uppercase leading-6 tracking-[0.08em] text-von-blue-900 swiss-diagonal">
                    Ray-Ban Meta and Oakley Meta pair smart technology with premium eyewear design, bringing hands-free imaging, audio, and AI into frames worth wearing daily.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
