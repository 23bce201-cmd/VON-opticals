import {
  AlertTriangle,
  CheckCircle2,
  Droplets,
  Eye,
  Layers,
  Microscope,
  ShieldCheck,
  Sparkles,
  Timer,
  Waves,
  XCircle,
} from "lucide-react";
import BrandLogoGrid from "../components/BrandLogoGrid";
import ContactLensSection from "../components/ContactLensSection";
import Reveal from "../components/Reveal";
import { contactLensBrands } from "../data/contactLensBrands";
import { Link } from "react-router-dom";

const howLensesWork = [
  {
    icon: Eye,
    title: "Tear Film Hydro-Levitation",
    copy: "Contact lenses do not sit directly on the cornea. They float on a microscopic liquid layer of your natural tear film, allowing comfortable movement with every eye blink.",
  },
  {
    icon: Layers,
    title: "Direct Corneal Light Refraction",
    copy: "By sitting directly on the eye's surface, contact lenses bend incoming light rays right at the cornea, eliminating image magnification distortion experienced with thick spectacle lenses.",
  },
  {
    icon: Droplets,
    title: "High Silicone Hydrogel Oxygenation",
    copy: "Modern silicone hydrogel materials feature extremely high oxygen transmissibility (Dk/t), enabling vital atmospheric oxygen to pass directly through the lens to keep your cornea healthy.",
  },
  {
    icon: Microscope,
    title: "Customized Base Curve Optical Fit",
    copy: "Every cornea has a unique curvature. Optometrists calculate your exact Base Curve (BC) and Diameter (DIA) so the lens centers precisely over the pupil without pinching or sliding.",
  },
];

const precautionsList = [
  {
    title: "Daily Wear Schedule Limit",
    copy: "Limit continuous wear to 8–12 hours daily. Give your eyes rest hours without lenses every evening to allow natural corneal oxygenation.",
    icon: Timer,
  },
  {
    title: "Water & Humidity Avoidance",
    copy: "Remove lenses before swimming, showering, or using saunas to prevent dangerous waterborne microbes like Acanthamoeba from trapping against the eye.",
    icon: Waves,
  },
  {
    title: "Hygiene & Disinfection Protocol",
    copy: "Always wash hands with antibacterial soap and dry with a lint-free towel before touching lenses. Never re-use old solution sitting in your lens case.",
    icon: ShieldCheck,
  },
  {
    title: "Immediate Discontinuation Signals",
    copy: "If you experience eye redness, persistent irritation, light sensitivity, or blurred vision, remove lenses immediately and visit VON Optical for examination.",
    icon: AlertTriangle,
  },
];

const dosList = [
  "Wash and dry hands with a lint-free towel before inserting or removing contact lenses.",
  "Use fresh, multi-purpose contact lens solution every single time you store reusable lenses.",
  "Replace your lens storage case every 30 days and rinse it daily with fresh solution.",
  "Put contact lenses in BEFORE applying makeup, and remove lenses BEFORE washing off makeup.",
  "Stick strictly to your recommended replacement schedule (Daily disposables = Discard daily).",
  "Use preservative-free re-wetting drops prescribed by your optometrist when using digital screens.",
];

const dontsList = [
  "NEVER use tap water, bottled water, or saliva to rinse, clean, or store your contact lenses.",
  "NEVER sleep or take naps with your contact lenses in unless prescribed for extended wear.",
  "NEVER wear contact lenses while swimming, in hot tubs, or showering due to severe infection risk.",
  "NEVER wear expired contact lenses or use lens solution past its expiration date.",
  "NEVER share contact lenses, cosmetic lenses, or trial pairs with anyone else under any circumstance.",
  "NEVER ignore persistent eye pain, redness, or blurry vision—remove the lens and seek care immediately.",
];

const fittingSteps = [
  { title: "Prescription Conversion", copy: "Your spectacle prescription is converted for vertex distance to match contact lens power." },
  { title: "On-Eye Trial Fitting", copy: "Movement, centration, hydration, and visual sharpness are tested on-eye with diagnostic trial lenses." },
  { title: "Care & Insertion Guidance", copy: "Our specialists walk you step-by-step through easy insertion, removal, hygiene routines, and wear schedules." },
];

export default function ContactLenses() {
  return (
    <>
      {/* Hero Header */}
      <section className="page-pad bg-white swiss-grid-pattern">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-4xl">
              <p className="section-eyebrow">Contact Lenses & Precision Care</p>
              <h1 className="page-title">Comfortable contact lenses require accurate fitting & proper care.</h1>
              <p className="mt-5 text-lg leading-8 text-von-ink/75 sm:text-xl">
                VON Optical provides premium diagnostic contact lens fitting across leading brands including Bausch + Lomb, Alcon, CooperVision, and Johnson & Johnson for daily, monthly, toric, and multifocal needs.
              </p>
            </Reveal>

            {/* Quick Metrics */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                { icon: Eye, label: "Crisp Peripheral Vision", note: "No spectacle edge distortion" },
                { icon: Waves, label: "Hydration & Oxygen", note: "Breathable Silicone Hydrogel" },
                { icon: Timer, label: "Safe Wear Schedules", note: "Daily, Bi-weekly & Monthly" },
              ].map((item, index) => (
                <Reveal key={item.label} delay={index * 90} className="group border-2 border-von-blue-900 bg-von-mist p-6 transition duration-200 hover:bg-von-accent hover:text-white">
                  <item.icon className="text-von-blue-900 transition-colors group-hover:text-white" size={28} strokeWidth={2.5} />
                  <p className="mt-5 swiss-number group-hover:text-white">0{index + 1}. Advantage</p>
                  <h2 className="mt-2 font-display text-2xl font-black uppercase leading-tight text-current">{item.label}</h2>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-von-blue-900/60 group-hover:text-white/80">{item.note}</p>
                </Reveal>
              ))}
            </div>

            {/* Brand Logo Grid */}
            <div className="mt-12">
              <BrandLogoGrid brands={contactLensBrands.map((brand) => brand.name)} context="contact lenses" />
            </div>
          </div>
        </div>
      </section>

      {/* How Contact Lenses Work Section */}
      <section className="section-pad bg-von-mist swiss-diagonal">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12">
              <p className="swiss-label">01. Optical Science & Mechanics</p>
              <h2 className="section-title">How Contact Lenses Work On The Eye</h2>
              <p className="section-copy">
                Understanding the science behind contact lens design helps you achieve optimal comfort, crisp sight, and healthy corneal function.
              </p>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {howLensesWork.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  className="group border-2 border-von-blue-900 bg-white p-6 transition duration-200 hover:bg-von-blue-900 hover:text-white"
                >
                  <item.icon className="text-von-blue-900 transition-colors group-hover:text-white" size={30} strokeWidth={2.2} />
                  <p className="mt-5 swiss-number group-hover:text-white">0{index + 1}. Science</p>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase leading-tight text-current">{item.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-von-blue-900/75 group-hover:text-white/80">{item.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Precautions Section */}
      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12">
              <p className="swiss-label">02. Corneal Safety & Care</p>
              <h2 className="section-title">Essential Contact Lens Precautions</h2>
              <p className="section-copy">
                Your eyes need proper oxygen and hygiene to remain infection-free. Follow these fundamental clinical precautions.
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {precautionsList.map((precaution, index) => (
                <Reveal
                  key={precaution.title}
                  delay={index * 80}
                  className="border-4 border-von-blue-900 bg-von-mist p-6 transition-all duration-200 hover:-translate-y-1 hover:border-von-accent"
                >
                  <precaution.icon size={28} className="text-von-accent" strokeWidth={2.3} />
                  <h3 className="mt-4 font-display text-2xl font-black uppercase text-von-blue-900">{precaution.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-von-blue-900/80">{precaution.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DO'S & DON'TS WITH VIBRANT BLUE & ORANGE CONTRAST */}
      <section className="section-pad bg-white swiss-grid-pattern">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-12 text-center max-w-3xl mx-auto">
              <p className="swiss-label text-von-accent">03. Eye Safety Standard</p>
              <h2 className="font-display text-4xl font-black uppercase leading-tight text-von-blue-900 sm:text-6xl">
                Contact Lens Do's & Don'ts
              </h2>
              <p className="mt-4 text-base font-medium text-von-blue-900/70">
                Notice the clear contrast between recommended eye hygiene practices (Electric Blue) and dangerous habits to avoid (Vibrant Orange).
              </p>
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* DO'S COLUMN - ELECTRIC BLUE THEME */}
              <Reveal>
                <div className="border-4 border-von-blue-900 bg-von-blue-900 p-6 text-white sm:p-8 shadow-[0_12px_40px_rgba(37,58,121,0.25)]">
                  <div className="flex items-center justify-between border-b-4 border-white pb-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-white" size={32} strokeWidth={2.8} />
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/70">Recommended Habits</span>
                        <h3 className="font-display text-3xl font-black uppercase tracking-wider text-white sm:text-4xl">DO'S (ALWAYS FOLLOW)</h3>
                      </div>
                    </div>
                    <span className="border-2 border-white bg-white px-3 py-1 text-xs font-black uppercase text-von-blue-900">
                      SAFETY FIRST
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {dosList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 border-2 border-white/20 bg-white/10 p-4 transition hover:bg-white/20">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-white" strokeWidth={2.8} />
                        <span className="text-sm font-bold leading-6 text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* DON'TS COLUMN - VIBRANT ORANGE THEME */}
              <Reveal delay={150}>
                <div className="border-4 border-von-accent bg-von-accent p-6 text-white sm:p-8 shadow-[0_12px_40px_rgba(255,74,28,0.3)]">
                  <div className="flex items-center justify-between border-b-4 border-white pb-4">
                    <div className="flex items-center gap-3">
                      <XCircle className="text-white" size={32} strokeWidth={2.8} />
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.24em] text-white/80">Hazardous Practices</span>
                        <h3 className="font-display text-3xl font-black uppercase tracking-wider text-white sm:text-4xl">DON'TS (NEVER DO)</h3>
                      </div>
                    </div>
                    <span className="border-2 border-white bg-white px-3 py-1 text-xs font-black uppercase text-von-accent">
                      CRITICAL RISK
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {dontsList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 border-2 border-white/30 bg-black/10 p-4 transition hover:bg-black/20">
                        <XCircle size={20} className="mt-0.5 shrink-0 text-white" strokeWidth={2.8} />
                        <span className="text-sm font-bold leading-6 text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Fitting Steps Section */}
      <section className="section-pad bg-von-mist">
        <div className="container-wide">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-10">
              <p className="swiss-label">04. The VON Optical Process</p>
              <h2 className="section-title">Our Contact Lens Fitting Method</h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {fittingSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 90} className="border-2 border-von-blue-900 bg-white p-6">
                  <p className="swiss-number">Step 0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-black uppercase leading-none text-von-blue-900">{step.title}</h3>
                  <p className="mt-4 text-sm font-medium leading-6 text-von-blue-900/75">{step.copy}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/visit-us" className="btn-primary">
                Book A Contact Lens Trial Fitting
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactLensSection compact />
    </>
  );
}
