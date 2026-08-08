import { useState } from "react";
import { Clock, ExternalLink, Mail, MapPin, Navigation, Phone, Store, UserRound } from "lucide-react";
import storeImage from "../photos/shop/optical shop.jpeg";

const MAP_LINK = "https://maps.app.goo.gl/qx9pbyBiud7KHF916";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.916892543949!2d72.5456534!3d23.0242905!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ac868a27ca9%3A0x90ec6ca095e14388!2sVon%20Opticals!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin";

const contactRows = [
  { icon: UserRound, label: "Proprietor", value: "Niraj Doshi" },
  { icon: Clock, label: "Hours", value: "10:00 AM - 8:00 PM daily" },
  { icon: Phone, label: "Mobile", value: "+91 9724885555", href: "tel:+919724885555" },
  { icon: Phone, label: "Landline", value: "079 - 40194400", href: "tel:07940194400" },
  { icon: Mail, label: "Email", value: "vonopticals1@gmail.com", href: "mailto:vonopticals1@gmail.com" },
];

export default function StoreLocator() {
  const [activeTab, setActiveTab] = useState<"map" | "photo">("map");

  return (
    <div className="overflow-hidden border-4 border-von-blue-900 bg-white">
      <div className="grid lg:grid-cols-12">
        <div className="flex flex-col justify-between border-b-4 border-von-blue-900 bg-white p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r-4">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-4 border-von-blue-900 pb-5">
              <span className="border-2 border-von-blue-900 bg-von-mist px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-von-blue-900">
                Open 10 AM - 8 PM
              </span>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-von-accent">Ambawadi</span>
            </div>

            <div className="py-7">
              <p className="swiss-number">05. Visit</p>
              <h3 className="mt-3 font-display text-5xl font-black uppercase leading-none text-von-blue-900 sm:text-6xl">VON Optical</h3>
            </div>

            <div className="border-4 border-von-blue-900 bg-von-mist p-5 swiss-diagonal">
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-von-blue-900" size={25} strokeWidth={2.5} />
                <div>
                  <p className="swiss-label">Store address</p>
                  <p className="mt-3 text-base font-black uppercase leading-7 text-von-blue-900">
                    4, Pramukh Plaza, Opp. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad - 380015
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-l-2 border-t-2 border-von-blue-900">
              {contactRows.map((row) => (
                <div key={row.label} className="-ml-0.5 -mt-0.5 grid grid-cols-[3.25rem_1fr] border-2 border-von-blue-900 bg-white">
                  <span className="flex min-h-16 items-center justify-center border-r-2 border-von-blue-900 bg-von-mist text-von-blue-900">
                    <row.icon size={20} strokeWidth={2.5} />
                  </span>
                  <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3">
                    <span>
                      <span className="block text-[0.65rem] font-black uppercase tracking-[0.22em] text-von-accent">{row.label}</span>
                      <span className="mt-1 block break-words text-sm font-black uppercase leading-5 text-von-blue-900">{row.value}</span>
                    </span>
                    {row.href && (
                      <a href={row.href} className="focus-ring shrink-0 border-2 border-von-blue-900 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition hover:bg-von-blue-900 hover:text-white">
                        Open
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 border-t-4 border-von-blue-900 pt-5">
            <a href={MAP_LINK} target="_blank" rel="noreferrer" className="btn-primary w-full justify-center">
              <Navigation size={18} strokeWidth={2.6} />
              Get Directions
              <ExternalLink size={16} strokeWidth={2.6} />
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[460px] flex-col bg-von-mist lg:col-span-7 lg:min-h-[620px]">
          <div className="flex border-b-4 border-von-blue-900 bg-white">
            <button
              type="button"
              onClick={() => setActiveTab("map")}
              className={`focus-ring flex min-h-14 flex-1 items-center justify-center gap-2 border-r-4 border-von-blue-900 px-4 text-xs font-black uppercase tracking-[0.18em] transition ${
                activeTab === "map" ? "bg-von-blue-900 text-white" : "bg-white text-von-blue-900 hover:bg-von-accent hover:text-white"
              }`}
            >
              <MapPin size={16} strokeWidth={2.5} />
              Map
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("photo")}
              className={`focus-ring flex min-h-14 flex-1 items-center justify-center gap-2 px-4 text-xs font-black uppercase tracking-[0.18em] transition ${
                activeTab === "photo" ? "bg-von-blue-900 text-white" : "bg-white text-von-blue-900 hover:bg-von-accent hover:text-white"
              }`}
            >
              <Store size={16} strokeWidth={2.5} />
              Photo
            </button>
          </div>

          {activeTab === "map" ? (
            <iframe
              title="VON Optical Location Map"
              src={MAP_EMBED_URL}
              className="min-h-[460px] flex-1 border-0  lg:min-h-[620px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="grid min-h-[460px] flex-1 place-items-center bg-von-blue-900 p-5 lg:min-h-[620px]">
              <div className="w-full border-4 border-white bg-white p-4">
                <img src={storeImage} alt="VON Optical storefront in Ambawadi" className="max-h-[560px] w-full object-contain " />
                <p className="mt-4 border-t-4 border-von-blue-900 pt-4 text-xs font-black uppercase tracking-[0.2em] text-von-blue-900">
                  VON Optical Storefront / Ambawadi, Ahmedabad
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
