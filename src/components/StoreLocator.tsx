import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import storeImage from "../photos/optical shop.jpeg";

const mapLink = "https://maps.app.goo.gl/qx9pbyBiud7KHF916";

export default function StoreLocator() {
  return (
    <div className="overflow-hidden rounded-md border border-von-blue-100 bg-von-mist">
      <div className="relative bg-white p-3">
        <img src={storeImage} alt="VON Optical shop display" className="max-h-[560px] w-full rounded-md object-contain" />
        <a href={mapLink} target="_blank" rel="noreferrer" className="absolute bottom-5 right-5 inline-flex max-w-[220px] items-center gap-2 rounded-full bg-von-blue-900 px-4 py-2 text-xs font-bold text-white shadow-lift transition hover:bg-von-blue-700">
          Google Map
          <ExternalLink size={14} />
        </a>
      </div>
      <div className="grid gap-5 p-5 sm:p-6">
        <div className="flex gap-3">
          <MapPin className="mt-1 shrink-0 text-von-blue-900" size={21} />
          <div>
            <h3 className="font-display text-xl font-semibold text-von-blue-900">Visit VON Optical</h3>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-von-ink/70">4, Pramukh Plaza, Opp. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad - 380015</p>
          </div>
        </div>
        <div className="grid gap-3 text-sm text-von-ink/70 sm:grid-cols-2">
          <p className="flex gap-2"><Clock size={18} className="shrink-0 text-von-blue-700" /> Store hours: 10 AM to 8 PM</p>
          <p className="flex gap-2"><Phone size={18} className="shrink-0 text-von-blue-700" /> +91 - 9724885555</p>
        </div>
      </div>
    </div>
  );
}
