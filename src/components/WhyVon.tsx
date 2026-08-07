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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why VON Optical"
          title="Boutique selection with clinical discipline."
          copy="The experience is deliberately calm: no rushed dispensing, no vague lens promises, and no pressure to choose a frame before the prescription and fit make sense."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90} className="rounded-md border border-von-blue-100 bg-von-mist p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-von-blue-900">
                <value.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-von-blue-900">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-von-ink/70">{value.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
