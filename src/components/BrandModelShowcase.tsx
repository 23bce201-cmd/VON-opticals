import modelBalmain from "../photos/models/model_balmain.jpg";
import modelCarrera from "../photos/models/model_carrera.jpg";
import modelChloe from "../photos/models/model_chloe.jpg";
import modelDita from "../photos/models/model_dita.jpg";
import modelGucci from "../photos/models/model_gucci.jpg";
import modelOakley from "../photos/models/model_oakley.jpg";
import modelPersol from "../photos/models/model_persol.jpg";
import modelPrada from "../photos/models/model_prada.jpg";
import modelRayBan from "../photos/models/model_rayban.jpg";
import modelSaintLaurent from "../photos/models/model_saintlaurent.jpg";
import modelTomFord from "../photos/models/model_tomford.jpg";
import modelVersace from "../photos/models/model_versace.jpg";
import modelVogue from "../photos/models/model_vogue.jpg";
import Reveal from "./Reveal";

const modelBrands = [
  { brand: "Gucci", image: modelGucci, line: "Luxury fashion frames" },
  { brand: "Prada", image: modelPrada, line: "Architectural Italian opticals" },
  { brand: "Ray-Ban", image: modelRayBan, line: "Iconic sun and optical styles" },
  { brand: "Oakley", image: modelOakley, line: "Performance eyewear geometry" },
  { brand: "Tom Ford", image: modelTomFord, line: "Signature luxury silhouettes" },
  { brand: "DITA", image: modelDita, line: "Collector-grade craftsmanship" },
  { brand: "Persol", image: modelPersol, line: "Italian eyewear heritage" },
  { brand: "Saint Laurent", image: modelSaintLaurent, line: "Parisian statement frames" },
  { brand: "Carrera", image: modelCarrera, line: "Racing-inspired sunglasses" },
  { brand: "Versace", image: modelVersace, line: "Bold Italian glamour" },
  { brand: "Vogue", image: modelVogue, line: "Everyday fashion eyewear" },
  { brand: "Chloe", image: modelChloe, line: "Effortless Parisian chic" },
  { brand: "Balmain", image: modelBalmain, line: "Architectural luxury shapes" },
];

type BrandModelShowcaseProps = {
  compact?: boolean;
};

export default function BrandModelShowcase({ compact = false }: BrandModelShowcaseProps) {
  const visibleBrands = compact ? modelBrands.slice(0, 6) : modelBrands;

  return (
    <Reveal className="mt-12 border-4 border-von-blue-900 bg-white">
      <div className="flex flex-col justify-between gap-4 border-b-4 border-von-blue-900 p-5 sm:flex-row sm:items-end">
        <div>
          <p className="swiss-number">02. Brand imagery</p>
          <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-von-blue-900 sm:text-6xl">Model worn icons</h3>
        </div>
        <p className="max-w-md text-sm font-bold uppercase leading-6 tracking-[0.08em] text-von-blue-900/70">
          The houses that define eyewear — worn the way they were designed, from the runway to our walls.
        </p>
      </div>
      <div className="grid gap-4 border-l-2 border-t-2 border-von-blue-900 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {visibleBrands.map((item, index) => (
          <article key={item.brand} className="group border-2 border-von-blue-900 bg-white overflow-hidden transition-all duration-200 hover:shadow-[0_12px_40px_rgba(37,58,121,0.15)] hover:-translate-y-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-von-mist">
              <img src={item.image} alt={`${item.brand} eyewear model`} className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105" />
              <span className="absolute left-4 top-4 bg-von-accent px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="border-t-2 border-von-blue-900 p-4 transition-all duration-150 group-hover:bg-von-blue-900 group-hover:text-white">
              <h4 className="font-display text-2xl font-black uppercase leading-none text-current">{item.brand}</h4>
              <p className="mt-3 text-xs font-black uppercase leading-5 tracking-[0.14em] text-von-blue-900/70 group-hover:text-white/80">{item.line}</p>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
