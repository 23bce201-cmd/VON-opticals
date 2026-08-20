import productFramesBurberry from "../photos/products/product_frames_burberry.webp";
import productFramesCalvinKlein from "../photos/products/product_frames_calvinklein.webp";
import productFramesCoach from "../photos/products/product_frames_coach.webp";
import productFramesDolceGabbana from "../photos/products/product_frames_dolcegabbana.webp";
import productFramesGucci from "../photos/products/product_frames_gucci.webp";
import productFramesMichaelKors from "../photos/products/product_frames_michaelkors.webp";
import productFramesPrada from "../photos/products/product_frames_prada.jpg";
import productFramesSaintLaurent from "../photos/products/product_frames_saintlaurent.jpg";
import productFramesSilhouette from "../photos/products/product_frames_silhouette.webp";
import productFramesTommyHilfiger from "../photos/products/product_frames_tommyhilfiger.webp";
import productSunglassesDita from "../photos/products/product_sunglasses_dita.webp";
import productSunglassesGucci from "../photos/products/product_sunglasses_gucci.jpg";
import productSunglassesJimmyChoo from "../photos/products/product_sunglasses_jimmychoo.webp";
import productSunglassesMauiJim from "../photos/products/product_sunglasses_mauijim.webp";
import productSunglassesOakley from "../photos/products/product_sunglasses_oakley.webp";
import productSunglassesPrada from "../photos/products/product_sunglasses_prada.jpeg";
import productSunglassesRayBan from "../photos/products/product_sunglasses_rayban.webp";
import productSunglassesSaintLaurent from "../photos/products/product_sunglasses_saintlaurent.webp";
import productSunglassesTomFord from "../photos/products/product_sunglasses_tomford.jpg";
import productSunglassesVersace from "../photos/products/product_sunglasses_versace.jpg";
import Reveal from "./Reveal";

const frameProducts = [
  { brand: "Gucci", image: productFramesGucci, line: "Luxury fashion frames" },
  { brand: "Prada", image: productFramesPrada, line: "Architectural Italian opticals" },
  { brand: "Saint Laurent", image: productFramesSaintLaurent, line: "Parisian statement frames" },
  { brand: "Burberry", image: productFramesBurberry, line: "British heritage eyewear" },
  { brand: "Coach", image: productFramesCoach, line: "Modern American style" },
  { brand: "Calvin Klein", image: productFramesCalvinKlein, line: "Clean minimalist design" },
  { brand: "Dolce & Gabbana", image: productFramesDolceGabbana, line: "Bold Italian glamour" },
  { brand: "Michael Kors", image: productFramesMichaelKors, line: "Chic everyday luxury" },
  { brand: "Silhouette", image: productFramesSilhouette, line: "Featherlight Austrian frames" },
  { brand: "Tommy Hilfiger", image: productFramesTommyHilfiger, line: "Classic American prep" },
];

const sunglassesProducts = [
  { brand: "Gucci", image: productSunglassesGucci, line: "Luxury fashion sunglasses" },
  { brand: "Prada", image: productSunglassesPrada, line: "Italian minimalism" },
  { brand: "Ray-Ban", image: productSunglassesRayBan, line: "Iconic sun styles" },
  { brand: "Tom Ford", image: productSunglassesTomFord, line: "Signature luxury" },
  { brand: "DITA", image: productSunglassesDita, line: "Collector-grade craft" },
  { brand: "Jimmy Choo", image: productSunglassesJimmyChoo, line: "Fashion-forward finish" },
  { brand: "Oakley", image: productSunglassesOakley, line: "Performance build" },
  { brand: "Saint Laurent", image: productSunglassesSaintLaurent, line: "Parisian edge" },
  { brand: "Maui Jim", image: productSunglassesMauiJim, line: "Polarized clarity" },
  { brand: "Versace", image: productSunglassesVersace, line: "Bold Italian glamour" },
];

type BrandProductShowcaseProps = {
  type?: "frames" | "sunglasses";
};

export default function BrandProductShowcase({ type = "sunglasses" }: BrandProductShowcaseProps) {
  const products = type === "frames" ? frameProducts : sunglassesProducts;

  return (
    <Reveal className="mt-12 border-4 border-von-blue-900 bg-white">
      <div className="flex flex-col justify-between gap-4 border-b-4 border-von-blue-900 p-5 sm:flex-row sm:items-end">
        <div>
          <p className="swiss-number">03. Product picks</p>
          <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-von-blue-900 sm:text-6xl">Brand picks on display</h3>
        </div>
        <p className="max-w-md text-sm font-bold uppercase leading-6 tracking-[0.08em] text-von-blue-900/70">
          The {type === "frames" ? "frames" : "sunglasses"} worth trying first — showcase pieces from the houses that set the standard.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((item, index) => (
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

