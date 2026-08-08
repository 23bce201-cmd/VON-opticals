import { BookOpen, Clock, MonitorCheck, Wrench } from "lucide-react";
import Reveal from "../components/Reveal";
import eyeTestImage from "../photos/shop/eyetest machine.jpg";

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
    <section className="page-pad bg-von-mist swiss-grid-pattern">
      <div className="container-wide">
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
              <div className="border-4 border-von-blue-900 bg-white p-3">
                <img src={eyeTestImage} alt="Computerised eye check up equipment" className="max-h-[560px] w-full object-contain " />
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-0 border-l-2 border-t-2 border-von-blue-900 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90} className="group -ml-0.5 -mt-0.5 border-2 border-von-blue-900 bg-white p-6 transition hover:bg-von-accent hover:text-white">
                <service.icon className="text-current" size={28} strokeWidth={2.5} />
                <p className="mt-6 swiss-number group-hover:text-white">0{index + 1}. Service</p>
                <h2 className="mt-3 font-display text-3xl font-black uppercase leading-none text-current">{service.title}</h2>
                <p className="mt-4 font-medium leading-7 text-von-blue-900/70 group-hover:text-white/85">{service.copy}</p>
                {service.title === "Repairing work" && (
                  <p className="mt-5 inline-flex items-center gap-2 border-2 border-von-blue-900 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-von-blue-900">
                    <Clock size={17} strokeWidth={2.5} />
                    1 to 2 days
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
