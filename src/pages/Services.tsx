import { BookOpen, Clock, MonitorCheck, Wrench } from "lucide-react";
import Reveal from "../components/Reveal";
import eyeTestImage from "../photos/eyetest machine.webp";

const services = [
  {
    icon: BookOpen,
    title: "Reading glasses",
    copy: "Near-vision glasses for books, phones, paperwork, and close desk work, with fit and lens advice in store.",
  },
  {
    icon: MonitorCheck,
    title: "Computerised eye check up",
    copy: "A measured eye check using in-store equipment, followed by practical prescription and lens recommendations.",
  },
  {
    icon: Wrench,
    title: "Repairing work",
    copy: "Repairs, adjustments, screws, nose pads, and alignment checks. Typical repair turnaround is 1 to 2 days.",
  },
];

export default function Services() {
  return (
    <section className="page-pad bg-von-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow">Services</p>
            <h1 className="page-title">Optical services handled with care and clear timelines.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              From a computerised eye check up to reading glasses and repairs, VON Optical keeps the process direct and properly documented.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-md border border-von-blue-100 shadow-soft">
              <img src={eyeTestImage} alt="Computerised eye check up equipment" className="max-h-[560px] w-full rounded-md object-contain" />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90} className="rounded-md border border-von-blue-100 bg-white p-6 shadow-sm">
              <service.icon className="text-von-blue-900" size={28} />
              <h2 className="mt-5 font-display text-2xl font-semibold text-von-blue-900">{service.title}</h2>
              <p className="mt-4 leading-7 text-von-ink/70">{service.copy}</p>
              {service.title === "Repairing work" && (
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-von-blue-100 px-4 py-2 text-sm font-bold text-von-blue-900">
                  <Clock size={17} />
                  1 to 2 days
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
