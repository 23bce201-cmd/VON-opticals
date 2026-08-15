import {
  BookOpen,
  CheckCircle2,
  Clock,
  Contrast,
  Eye,
  Layers,
  MonitorCheck,
  Palette,
  Sliders,
  Sun,
  SunMedium,
  Wrench,
} from "lucide-react";
import Reveal from "../components/Reveal";
import eyeTestImage from "../photos/shop/eyetest machine.jpg";

const coreServices = [
  {
    icon: BookOpen,
    title: "Reading Glasses",
    copy: "Near-vision prescription glasses tailored for books, smartphones, paperwork, and close desk work with custom optical centering.",
  },
  {
    icon: MonitorCheck,
    title: "Computerised Eye Check Up",
    copy: "Comprehensive digital auto-refraction and subjective vision evaluation, followed by precise prescription and lens guidance.",
  },
  {
    icon: Wrench,
    title: "Frame Repairing & Maintenance",
    copy: "Frame alignment, laser soldering, screw replacement, nose pad upgrades, and structural adjustments. Typical turnaround is 1 to 2 days.",
  },
];

const photochromicFeatures = [
  {
    icon: Sun,
    label: "Transitions",
    title: "Photochromic (Transitions) Lenses",
    copy: "Advanced light-intelligent lenses that stay crystal clear indoors and automatically darken into rich sunglass tints when exposed to outdoor UV sunlight.",
    tag: "UV Activated",
  },
  {
    icon: Palette,
    label: "Color Customization",
    title: "Custom Prescription Tinting",
    copy: "Personalize your spectacle or sunglass lenses with custom solid, dual-tone gradient, or metallic mirror tinting engineered precisely to your vision power.",
    tag: "Custom Colors",
  },
  {
    icon: Sliders,
    label: "VLT Opacity",
    title: "VLT & Opacity Customization",
    copy: "Choose exact Visible Light Transmission (VLT %) levels and tint density—from 15% light indoor fashion tints to 85% deep sun opacity.",
    tag: "Density Control",
  },
  {
    icon: Contrast,
    label: "Polarized Shield",
    title: "Polarized Glare Elimination",
    copy: "Combine custom tinting with polarizing filters to block blinding horizontal glare from water, wet roads, and windshields while driving.",
    tag: "Anti-Glare",
  },
];

const tintDensityCategories = [
  { category: "Cat 0 (80%-100% VLT)", description: "Ultra-light cosmetic tint or indoor anti-fatigue filter for office lighting." },
  { category: "Cat 1 (43%-80% VLT)", description: "Mild tint suited for overcast weather, yellow night-driving, or low sunlight." },
  { category: "Cat 2 (18%-43% VLT)", description: "Medium shade tint ideal for average sunlight, city walking, and bright indoors." },
  { category: "Cat 3 (8%-18% VLT)", description: "Dark sunglass tint for intense sun, beach, highway driving, and daily UV defense." },
];

export default function Services() {
  return (
    <div className="page-pad bg-von-mist swiss-grid-pattern">
      <div className="container-wide">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="section-eyebrow">Optical Services & Customization</p>
              <h1 className="page-title">Precision services & custom lens engineering.</h1>
              <p className="mt-5 text-lg leading-8 text-von-ink/75 sm:text-xl">
                From computerised eye check-ups and frame repairs to photochromic light-adaptive lenses and custom VLT tint density adjustments, VON Optical delivers complete optical solutions.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="border-4 border-von-blue-900 bg-white p-3">
                <img src={eyeTestImage} alt="Computerised eye check up equipment" className="max-h-[520px] w-full object-contain" />
              </div>
            </Reveal>
          </div>

          {/* Core Services Grid */}
          <div className="mt-14 grid gap-0 border-l-2 border-t-2 border-von-blue-900 md:grid-cols-3">
            {coreServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 90} className="group -ml-0.5 -mt-0.5 border-2 border-von-blue-900 bg-white p-6 transition duration-200 hover:bg-von-accent hover:text-white">
                <service.icon className="text-von-blue-900 transition-colors group-hover:text-white" size={30} strokeWidth={2.3} />
                <p className="mt-6 swiss-number group-hover:text-white">0{index + 1}. Service</p>
                <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight text-current">{service.title}</h2>
                <p className="mt-4 font-medium leading-7 text-von-blue-900/75 group-hover:text-white/85">{service.copy}</p>
                {service.title.includes("Repair") && (
                  <p className="mt-5 inline-flex items-center gap-2 border-2 border-von-blue-900 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-von-blue-900">
                    <Clock size={17} strokeWidth={2.5} />
                    1 to 2 days turnaround
                  </p>
                )}
              </Reveal>
            ))}
          </div>

          {/* PHOTOCHROMIC & CUSTOM LENS TINTING SECTION */}
          <div className="mt-20 border-t-4 border-von-blue-900 pt-16">
            <Reveal className="mb-12">
              <p className="swiss-label text-von-accent">02. Light Adaptation & Tint Customization</p>
              <h2 className="section-title">Photochromic Lenses & Prescription Tinting</h2>
              <p className="section-copy">
                Tailor your optical experience with smart photochromic light-adapting lenses, custom tint density levels, and precise visible light transmission (VLT) opacity controls.
              </p>
            </Reveal>

            {/* Photochromic & Tinting Feature Grid */}
            <div className="grid gap-0 border-l-2 border-t-2 border-von-blue-900 md:grid-cols-2 lg:grid-cols-4">
              {photochromicFeatures.map((item, index) => (
                <Reveal key={item.title} delay={index * 70} className="group -ml-0.5 -mt-0.5 border-2 border-von-blue-900 bg-white p-6 transition duration-200 hover:bg-von-blue-900 hover:text-white">
                  <div className="flex items-center justify-between">
                    <item.icon size={28} className="text-von-blue-900 transition-colors group-hover:text-white" strokeWidth={2.3} />
                    <span className="border border-von-blue-900/30 bg-von-mist px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-von-blue-900 group-hover:border-white/40 group-hover:bg-white/10 group-hover:text-white">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-6 swiss-number group-hover:text-white">0{index + 4}. {item.label}</p>
                  <h3 className="mt-2 font-display text-2xl font-black uppercase leading-tight text-current">{item.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-von-blue-900/75 group-hover:text-white/80">{item.copy}</p>
                </Reveal>
              ))}
            </div>

            {/* VLT & Tint Density Breakdown Banner */}
            <div className="mt-12 border-4 border-von-blue-900 bg-white p-6 sm:p-10">
              <Reveal>
                <div className="flex items-center gap-3 border-b-4 border-von-blue-900 pb-4">
                  <SunMedium className="text-von-accent" size={30} strokeWidth={2.5} />
                  <h3 className="font-display text-3xl font-black uppercase text-von-blue-900 sm:text-4xl">
                    Visible Light Transmission (VLT %) & Opacity Guide
                  </h3>
                </div>
                <p className="mt-4 text-sm font-medium leading-7 text-von-blue-900/80 sm:text-base">
                  Visible Light Transmission measures the percentage of light that passes through your tinted lenses. Whether you want light gradient fashion tints or intense sun reduction, VON Optical custom-calibrates your lens density:
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {tintDensityCategories.map((cat) => (
                    <div key={cat.category} className="border-2 border-von-blue-900 bg-von-mist p-5 transition hover:border-von-accent hover:bg-white">
                      <span className="inline-block border-2 border-von-blue-900 bg-von-blue-900 px-2 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                        {cat.category}
                      </span>
                      <p className="mt-3 text-xs font-medium leading-6 text-von-blue-900/85">{cat.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4 border-t-2 border-von-blue-900/20 pt-6 text-xs font-black uppercase tracking-[0.14em] text-von-blue-900">
                  <span className="flex items-center gap-2 border-2 border-von-blue-900 bg-white px-3 py-2">
                    <CheckCircle2 size={16} className="text-von-accent" /> Classic G-15 Green Tint
                  </span>
                  <span className="flex items-center gap-2 border-2 border-von-blue-900 bg-white px-3 py-2">
                    <CheckCircle2 size={16} className="text-von-accent" /> Neutral Solid Grey Tints
                  </span>
                  <span className="flex items-center gap-2 border-2 border-von-blue-900 bg-white px-3 py-2">
                    <CheckCircle2 size={16} className="text-von-accent" /> Contrast Warm Brown & Amber
                  </span>
                  <span className="flex items-center gap-2 border-2 border-von-blue-900 bg-white px-3 py-2">
                    <CheckCircle2 size={16} className="text-von-accent" /> Dual-Tone Gradient Customization
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
