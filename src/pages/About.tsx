import { Glasses, ShieldCheck, Stethoscope } from "lucide-react";
import Reveal from "../components/Reveal";
import StoreLocator from "../components/StoreLocator";
import WhyVon from "../components/WhyVon";
import shopImage from "../photos/shop3.jpeg";

export default function About() {
  return (
    <>
      <section className="page-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <Reveal>
            <p className="section-eyebrow">About VON Optical</p>
            <h1 className="page-title">A premium optical store for people who care how they see and how their frames feel.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              VON Optical combines international frame houses, trusted lens manufacturers, contact lens fitting, and modern smart eyewear in one measured retail experience.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img src={shopImage} alt="VON Optical frame wall and store display" className="aspect-[4/3] w-full rounded-md object-cover shadow-soft" />
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-von-mist">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: Glasses, title: "Curated frame wall", copy: "Luxury, fashion, sport, and technical brands are grouped so the right choice is easier to compare." },
            { icon: Stethoscope, title: "Clinical fitting checks", copy: "Prescription, lens design, and frame geometry are reviewed together before dispensing." },
            { icon: ShieldCheck, title: "After-sales care", copy: "Adjustments, warranty guidance, lens care advice, and repairs are part of the relationship." },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="rounded-md bg-white p-6">
              <item.icon className="text-von-blue-900" size={25} />
              <h2 className="mt-4 font-display text-xl font-semibold text-von-blue-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-von-ink/70">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <WhyVon />
      <section className="section-pad bg-von-mist">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StoreLocator />
        </div>
      </section>
    </>
  );
}
