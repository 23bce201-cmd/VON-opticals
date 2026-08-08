import { BadgeCheck, Handshake, Ruler, WalletCards } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const values = [
  {
    icon: Ruler,
    title: "Measured, not guessed",
    copy: "Pupillary distance, fitting height, frame wrap, and bridge comfort are checked before lenses are ordered.",
  },
  {
    icon: BadgeCheck,
    title: "Genuine product support",
    copy: "Designer frames and branded lenses are supplied with documentation, warranty guidance, and after-sales adjustment.",
  },
  {
    icon: Handshake,
    title: "Practical try-on advice",
    copy: "Opticians help narrow options by face shape, prescription strength, usage, and how the frame sits through the day.",
  },
  {
    icon: WalletCards,
    title: "Insurance and service help",
    copy: "The team can help with optical paperwork, invoice details, repairs, nose pads, screws, and routine maintenance.",
  },
];

export default function WhyVon() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why VON Optical"
            title="Boutique selection with clinical discipline."
            copy="The experience is deliberately calm: no rushed dispensing, no vague lens promises, and no pressure to choose a frame before the prescription and fit make sense."
            align="center"
          />
          <div className="mt-12 grid gap-4 border-l-2 border-t-2 border-von-blue-900 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90} className="group -ml-0.5 -mt-0.5 border-2 border-von-blue-900 bg-von-mist p-6 transition-all duration-200 hover:bg-von-accent hover:text-white hover:shadow-[0_12px_40px_rgba(255,74,28,0.3)] hover:-translate-y-1">
                <span className="inline-flex h-14 w-14 items-center justify-center border-2 border-von-blue-900 bg-white text-von-blue-900 group-hover:border-white transition-all duration-200">
                  <value.icon size={22} strokeWidth={2.5} />
                </span>
                <p className="mt-6 swiss-number group-hover:text-white">0{index + 1}. Advantage</p>
                <h3 className="mt-3 font-display text-2xl font-black uppercase leading-none text-current">{value.title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-von-blue-900/70 group-hover:text-white/85">{value.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
