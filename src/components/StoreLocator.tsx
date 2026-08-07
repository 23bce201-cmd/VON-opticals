import { useState } from "react";
import { Clock, ExternalLink, Mail, MapPin, Navigation, Phone, Sparkles, Store, UserRound } from "lucide-react";
import storeImage from "../photos/optical shop.jpeg";

const MAP_LINK = "https://maps.app.goo.gl/qx9pbyBiud7KHF916";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.916892543949!2d72.5456534!3d23.0242905!2m3!1f0!f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ac868a27ca9%3A0x90ec6ca095e14388!2sVon%20Opticals!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin";

export default function StoreLocator() {
  const [activeTab, setActiveTab] = useState<"map" | "photo">("map");

  return (
    <div className="overflow-hidden rounded-2xl border border-von-blue-100 bg-white shadow-lift transition duration-300">
      <div className="grid gap-0 lg:grid-cols-12">
        {/* Left Column - Store Details Card */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 border-b border-von-blue-100 lg:border-b-0 lg:border-r">
          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open Today • 10 AM - 8 PM
              </span>
              <span className="text-xs font-semibold text-von-ink/50">Ambawadi, Ahmedabad</span>
            </div>

            {/* Title & Proprietor */}
            <div className="mt-4">
              <h3 className="font-display text-2xl font-bold text-von-blue-900 sm:text-3xl">VON Optical</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-von-blue-700">
                <UserRound size={14} className="shrink-0" />
                Proprietor: Niraj Doshi
              </p>
            </div>

            {/* Address */}
            <div className="mt-6 flex gap-3 rounded-xl bg-von-mist p-4 border border-von-blue-100/60">
              <MapPin className="mt-0.5 shrink-0 text-von-blue-900" size={22} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-von-blue-700">Store Address</p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-von-ink/80">
                  4, Pramukh Plaza, Opp. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad - 380015
                </p>
              </div>
            </div>

            {/* Quick Contact & Timings Grid */}
            <div className="mt-5 space-y-3 text-sm text-von-ink/80">
              <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-3 shadow-xs">
                <Clock className="shrink-0 text-von-blue-700" size={18} />
                <div>
                  <p className="text-xs font-semibold text-von-ink/50">Business Hours</p>
                  <p className="font-semibold text-von-blue-900">10:00 AM – 8:00 PM (Daily)</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-lg border border-slate-100 bg-white p-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <Phone className="shrink-0 text-von-blue-700" size={18} />
                  <div>
                    <p className="text-xs font-semibold text-von-ink/50">Mobile & WhatsApp</p>
                    <p className="font-semibold text-von-blue-900">+91 9724885555</p>
                  </div>
                </div>
                <a
                  href="tel:+919724885555"
                  className="rounded-full bg-von-blue-100 px-3 py-1 text-xs font-bold text-von-blue-900 transition hover:bg-von-blue-900 hover:text-white"
                >
                  Call
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-lg border border-slate-100 bg-white p-3 shadow-xs">
                <div className="flex items-center gap-3">
                  <Phone className="shrink-0 text-von-blue-700" size={18} />
                  <div>
                    <p className="text-xs font-semibold text-von-ink/50">Landline</p>
                    <p className="font-semibold text-von-blue-900">079 - 40194400</p>
                  </div>
                </div>
                <a
                  href="tel:07940194400"
                  className="rounded-full bg-von-blue-100 px-3 py-1 text-xs font-bold text-von-blue-900 transition hover:bg-von-blue-900 hover:text-white"
                >
                  Call
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 rounded-lg border border-slate-100 bg-white p-3 shadow-xs">
                <div className="flex items-center gap-3 truncate">
                  <Mail className="shrink-0 text-von-blue-700" size={18} />
                  <div className="truncate">
                    <p className="text-xs font-semibold text-von-ink/50">Email Us</p>
                    <p className="truncate font-semibold text-von-blue-900">vonopticals1@gmail.com</p>
                  </div>
                </div>
                <a
                  href="mailto:vonopticals1@gmail.com"
                  className="shrink-0 rounded-full bg-von-blue-100 px-3 py-1 text-xs font-bold text-von-blue-900 transition hover:bg-von-blue-900 hover:text-white"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-von-blue-100">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full shadow-md justify-center"
            >
              <Navigation size={18} />
              Get Driving Directions
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Right Column - Interactive Google Map / Photo View */}
        <div className="relative min-h-[420px] lg:min-h-[540px] lg:col-span-7 bg-von-mist flex flex-col">
          {/* View Toggle Tabs */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-white/90 p-1.5 shadow-md backdrop-blur-md border border-white/60">
            <button
              type="button"
              onClick={() => setActiveTab("map")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                activeTab === "map"
                  ? "bg-von-blue-900 text-white shadow-xs"
                  : "text-von-blue-900 hover:bg-von-mist"
              }`}
            >
              <MapPin size={14} />
              Interactive Map
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("photo")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                activeTab === "photo"
                  ? "bg-von-blue-900 text-white shadow-xs"
                  : "text-von-blue-900 hover:bg-von-mist"
              }`}
            >
              <Store size={14} />
              Store Photo
            </button>
          </div>

          {/* Direct Link Badge */}
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noreferrer"
            className="absolute top-4 right-4 z-10 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-von-blue-900 shadow-md backdrop-blur-md border border-white/60 transition hover:bg-von-blue-900 hover:text-white"
          >
            <Sparkles size={13} className="text-amber-500" />
            Open in Google Maps
            <ExternalLink size={13} />
          </a>

          {/* Interactive Map View */}
          {activeTab === "map" ? (
            <div className="relative h-full min-h-[420px] w-full overflow-hidden">
              <iframe
                title="VON Optical Location Map"
                src={MAP_EMBED_URL}
                className="h-full w-full border-0 min-h-[420px] lg:min-h-[540px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : (
            /* Store Photo View */
            <div className="relative flex h-full min-h-[420px] lg:min-h-[540px] items-center justify-center bg-slate-900 p-4">
              <img
                src={storeImage}
                alt="VON Optical Storefront in Ambawadi"
                className="max-h-[480px] w-full rounded-xl object-contain shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-900/80 p-3 text-center text-white backdrop-blur-md border border-white/10 sm:left-auto sm:right-4 sm:max-w-xs">
                <p className="text-xs font-bold">VON Optical Storefront</p>
                <p className="text-[11px] text-white/70">Ambawadi, Ahmedabad</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
