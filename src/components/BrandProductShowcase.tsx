import ditaImg from "../photos/products/dita.jpeg";
import gucciImg from "../photos/products/gucci.jpg";
import jimmyChooImg from "../photos/products/jimmy-choo.jpeg";
import oakleyImg from "../photos/products/oakley.jpeg";
import opiumImg from "../photos/products/opium.jpeg";
import pradaImg from "../photos/products/prada.jpeg";
import rayBanAviatorImg from "../photos/products/ray-ban-aviator.jpeg";
import rayBanImg from "../photos/products/ray-ban.jpeg";
import tomFordImg from "../photos/products/tom-ford.jpeg";
import Reveal from "./Reveal";

const productBrands = [
  { brand: "Gucci", image: gucciImg, line: "Signature frames" },
  { brand: "Ray-Ban", image: rayBanImg, line: "Iconic Aviator" },
  { brand: "Ray-Ban Aviator", image: rayBanAviatorImg, line: "Classic aviator style" },
  { brand: "Tom Ford", image: tomFordImg, line: "Luxury statement" },
  { brand: "DITA", image: ditaImg, line: "Collector-grade craft" },
  { brand: "Jimmy Choo", image: jimmyChooImg, line: "Fashion-forward finish" },
  { brand: "Oakley", image: oakleyImg, line: "Performance build" },
  { brand: "Prada", image: pradaImg, line: "Italian minimalism" },
  { brand: "Opium", image: opiumImg, line: "Bold everyday edge" },
];

export default function BrandProductShowcase() {
  return (
    <Reveal className="mt-12 border-4 border-von-blue-900 bg-white">
      <div className="flex flex-col justify-between gap-4 border-b-4 border-von-blue-900 p-5 sm:flex-row sm:items-end">
        <div>
          <p className="swiss-number">Signature styles</p>
          <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-von-blue-900 sm:text-6xl">Brand picks on display</h3>
        </div>
        <p className="max-w-md text-sm font-bold uppercase leading-6 tracking-[0.08em] text-von-blue-900/70">
          The frames worth trying first — showcase pieces from the houses that set the standard.
        </p>
      </div>
      <div className="grid gap-4 border-l-2 border-t-2 border-von-blue-900 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {productBrands.map((item, index) => (
          <article key={`${item.brand}-${index}`} className="group border-2 border-von-blue-900 bg-white overflow-hidden transition-all duration-200 hover:shadow-[0_12px_40px_rgba(37,58,121,0.15)] hover:-translate-y-1">
            <div className="relative aspect-square overflow-hidden bg-white">
              <img src={item.image} alt={`${item.brand} eyewear`} className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105" />
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
