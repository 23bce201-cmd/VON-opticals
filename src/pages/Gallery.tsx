import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import { getGalleryImages } from "../data/galleryAssets";
import businessCardImage from "../photos/shop/business card.jpeg";
import eyeTestImage from "../photos/shop/eyetest machine.jpg";
import opticalShopImage from "../photos/shop/optical shop.jpeg";
import shop1Image from "../photos/shop/shop1.jpeg";
import shop2Image from "../photos/shop/shop2.jpeg";
import shop3Image from "../photos/shop/shop3.jpeg";
import shop4Image from "../photos/shop/shop4.jpeg";
import shop5Image from "../photos/shop/shop5.jpg";
import shopImage from "../photos/shop/shop.jpeg";

const shopFloorImages = [
  { image: shopImage, label: "The VON storefront" },
  { image: shop1Image, label: "Inside the display wall" },
  { image: shop2Image, label: "Frame displays" },
  { image: shop3Image, label: "The eyewear wall" },
  { image: shop4Image, label: "On the shelves" },
  { image: shop5Image, label: "Store detail" },
  { image: opticalShopImage, label: "VON Optical, Ambawadi" },
  { image: eyeTestImage, label: "Computerised eye test" },
  { image: businessCardImage, label: "Find our card" },
];

export default function Gallery() {
  const userImages = useMemo(() => getGalleryImages(), []);
  const [lightbox, setLightbox] = useState<{ url: string; name: string } | null>(null);

  return (
    <section className="page-pad bg-von-mist swiss-grid-pattern">
      <div className="container-wide">
        <Reveal>
          <p className="section-eyebrow">Gallery</p>
          <h1 className="page-title">Inside VON Optical.</h1>
          <p className="mt-5 text-lg leading-8 text-von-ink/70">
            Snapshots from the shop floor, the walls, and the everyday craft behind your eyewear.
          </p>
        </Reveal>

        {userImages.length > 0 && (
          <>
            <Reveal className="mt-14 border-4 border-von-blue-900 bg-white">
              <div className="flex flex-col justify-between gap-4 border-b-4 border-von-blue-900 p-5 sm:flex-row sm:items-end">
                <div>
                  <p className="swiss-number">01. Gallery</p>
                  <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-von-blue-900 sm:text-5xl">New arrivals from the wall</h3>
                </div>
                <p className="max-w-md text-sm font-bold uppercase leading-6 tracking-[0.08em] text-von-blue-900/70">
                  Fresh photos land here automatically the moment they are added.
                </p>
              </div>
              <div className="grid gap-4 border-l-2 border-t-2 border-von-blue-900 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {userImages.map((photo, index) => (
                  <button
                    key={`${photo.name}-${index}`}
                    type="button"
                    onClick={() => setLightbox(photo)}
                    className="group overflow-hidden border-2 border-von-blue-900 bg-white text-left"
                  >
                    <img src={photo.url} alt={photo.name} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="border-t-2 border-von-blue-900 p-3">
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-von-blue-900">{photo.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          </>
        )}

        <Reveal className="mt-14 border-4 border-von-blue-900 bg-white">
          <div className="flex flex-col justify-between gap-4 border-b-4 border-von-blue-900 p-5 sm:flex-row sm:items-end">
            <div>
              <p className="swiss-number">02. Shop floor</p>
              <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-von-blue-900 sm:text-5xl">The store, as seen</h3>
            </div>
            <p className="max-w-md text-sm font-bold uppercase leading-6 tracking-[0.08em] text-von-blue-900/70">
              Where the frames live — a look around VON Optical, Ambawadi.
            </p>
          </div>
          <div className="grid gap-4 border-l-2 border-t-2 border-von-blue-900 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shopFloorImages.map((photo) => (
              <button
                key={photo.label}
                type="button"
                onClick={() => setLightbox({ url: photo.image, name: photo.label })}
                className="group overflow-hidden border-2 border-von-blue-900 bg-white text-left"
              >
                <img src={photo.image} alt={photo.label} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="border-t-2 border-von-blue-900 p-3">
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-von-blue-900">{photo.label}</p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-von-blue-900/90 p-6 backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button
            type="button"
            className="absolute right-6 top-6 border-2 border-white bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-von-blue-900 hover:bg-von-accent hover:text-white"
          >
            Close
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.name} className="max-h-[80vh] w-auto border-4 border-white bg-white object-contain" />
            <figcaption className="mt-4 text-center font-display text-xl font-black uppercase tracking-[0.08em] text-white">{lightbox.name}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
