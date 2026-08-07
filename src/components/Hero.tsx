import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTransition } from "./PageTransitionProvider";
import heroImage from "../photos/shop.jpeg";
import opticalShopImage from "../photos/optical shop.jpeg";

export default function Hero() {
  const { navigateWithTransition } = usePageTransition();

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden pt-20">
      <img src={heroImage} alt="VON Optical store interior with premium eyewear displays" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.86)_38%,rgba(231,238,250,0.62)_68%,rgba(255,255,255,0.32)_100%)]" />
      <div className="mx-auto grid min-h-[calc(92vh-5rem)] max-w-7xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Authorized multi-brand optical retailer</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] text-von-blue-900 sm:text-6xl lg:text-7xl">
            VON Optical
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-von-ink/80">
            Designer frames, sunglasses, prescription glasses, contact lenses, and Ray-Ban Meta and Oakley Meta smart glasses, guided by opticians who measure carefully and advise plainly.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/visit-us" className="btn-primary">
              <MapPin size={19} />
              Visit Us
            </Link>
            <button type="button" onClick={() => navigateWithTransition("/frames", "left")} className="btn-secondary">
              View Brands
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {["Prescription glasses", "Designer frames", "Contact lenses", "Meta AI glasses"].map((item) => (
              <span key={item} className="rounded-md border border-white/80 bg-white/80 px-3 py-3 text-sm font-semibold text-von-blue-900 shadow-sm backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-white/70 bg-white/60 p-3 shadow-soft backdrop-blur">
          <img src={opticalShopImage} alt="Full VON Optical shop display" className="max-h-[520px] w-full rounded-md object-contain" />
        </div>
      </div>
    </section>
  );
}
