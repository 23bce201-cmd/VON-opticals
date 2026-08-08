import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTransition } from "./PageTransitionProvider";
import heroImage from "../photos/shop/shop.jpeg";

export default function Hero() {
  const { navigateWithTransition } = usePageTransition();

  return (
    <section className="relative isolate min-h-[74vh] overflow-hidden border-b-4 border-von-blue-900 bg-white pt-20">
      <div className="absolute inset-0 -z-10 swiss-grid-pattern" />

      <div className="container-full">
        <div className="mx-auto grid min-h-[calc(74vh-5rem)] max-w-[1600px] px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-12 lg:px-8">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between border-4 border-von-blue-900 bg-white p-6 sm:p-8 lg:col-span-7 lg:min-h-[570px] lg:p-10">
            <div>
              <p className="section-eyebrow">
                01. Authorized optical system
              </p>

              <h1 className="mt-5 font-display font-black uppercase leading-[0.82] tracking-normal text-von-blue-900 text-[clamp(2.5rem,8vw,11rem)]">
                VON
                <br />
                Opticals
              </h1>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
              <div className="swiss-diagonal flex flex-col justify-between border-4 border-von-blue-900 bg-von-mist p-5">
                <p className="swiss-label">
                  Ambawadi / Ahmedabad
                </p>

                <p className="mt-8 text-5xl font-black uppercase leading-none text-von-accent">
                  380015
                </p>
              </div>

              <div className="flex flex-col justify-between border-none border-von-blue-900 bg-white p-5">
                <p className="max-w-2xl text-base font-medium leading-7 text-von-blue-900/75">
                  Designer frames, sunglasses, prescription glasses, contact
                  lenses, and Meta smart glasses — measured carefully,
                  advised plainly.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/visit-us"
                    className="btn-primary"
                  >
                    <MapPin size={19} strokeWidth={2.6} />
                    Visit Us
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      navigateWithTransition("/frames", "left")
                    }
                    className="btn-secondary"
                  >
                    View Brands
                    <ArrowRight
                      size={18}
                      strokeWidth={2.6}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="grid border-x-4 border-b-4 border-von-blue-900 bg-von-mist lg:col-span-5 lg:border-l-0 lg:border-t-4">

            <div className="grid min-h-[340px] grid-rows-[1fr_auto] p-4 sm:p-5 lg:min-h-[400px]">

              {/* STORE IMAGE */}
              <div className="relative overflow-hidden border-4 border-von-blue-900 bg-white">
                <img
                  src={heroImage}
                  alt="VON Optical store interior with premium eyewear displays"
                  className="min-h-[300px] w-full object-contain p-4"
                />
              </div>

              {/* LOWER CARDS */}
              <div className="mt-4 grid grid-cols-1 gap-4 lg:mt-6 lg:grid-cols-[0.8fr_1.2fr]">

                <div className="flex min-h-[150px] flex-col justify-between border-4 border-von-blue-900 bg-white p-4 py-8">
                  <p className="max-w-[260px] text-2xl font-black uppercase leading-[0.95] text-von-blue-900">
                    Vision,
                    <br />
                    measured
                    <br />
                    precisely.
                  </p>
                </div>

               {/* Brand stats block */}
              <div className="relative flex min-h-[150px] flex-col justify-between overflow-hidden border-4 border-von-blue-900 bg-von-blue-900 p-4 pt-8 text-white">
                <p className="font-display text-5xl font-black uppercase leading-none text-white">
                  56<span className="text-von-accent">+</span>
                </p>
                <p className="text-sm font-black uppercase tracking-[0.15em] text-white/80">
                  Brands under one roof
                </p>

              </div>
              </div>
            </div>

            {/* CATEGORY STRIP */}
            <div className="grid grid-cols-2 border-t-4 border-von-blue-900 sm:grid-cols-4 lg:grid-cols-2">
              {["Prescription", "Designer", "Contact", "Meta AI"].map(
                (item, index) => (
                  <span
                    key={item}
                    className="border-r-4 border-von-blue-900 bg-white p-4 text-xs font-black uppercase tracking-[0.2em] text-von-blue-900 last:border-r-0 even:lg:border-r-0 sm:even:border-r-4"
                  >
                    <span className="block text-von-accent">
                      0{index + 2}.
                    </span>
                    {item}
                  </span>
                )
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
