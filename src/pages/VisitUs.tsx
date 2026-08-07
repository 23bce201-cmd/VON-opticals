import { Clock, ExternalLink, Mail, MapPin, Phone, UserRound } from "lucide-react";
import Reveal from "../components/Reveal";
import storeImage from "../photos/optical shop.jpeg";

const mapLink = "https://maps.app.goo.gl/qx9pbyBiud7KHF916";

export default function VisitUs() {
  return (
    <section className="page-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow">Visit Us</p>
            <h1 className="page-title">Visit VON Optical in Ambawadi, Ahmedabad.</h1>
            <p className="mt-5 text-lg leading-8 text-von-ink/70">
              Come in for frames, sunglasses, contact lenses, prescription glasses, computerised eye check up, and repair work.
            </p>
            <div className="mt-7 rounded-md border border-von-blue-100 bg-von-mist p-5">
              <p className="flex gap-3 text-sm font-bold text-von-blue-900">
                <UserRound className="shrink-0" size={18} />
                Proprietor: Niraj Doshi
              </p>
              <p className="flex gap-3 leading-7 text-von-ink/75">
                <MapPin className="mt-1 shrink-0 text-von-blue-900" size={22} />
                4, Pramukh Plaza, Opp. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad - 380015
              </p>
              <p className="mt-4 flex gap-3 text-sm font-semibold text-von-ink/70">
                <Clock className="shrink-0 text-von-blue-700" size={18} />
                Store hours: 10 AM to 8 PM
              </p>
              <p className="mt-3 flex gap-3 text-sm font-semibold text-von-ink/70">
                <Phone className="shrink-0 text-von-blue-700" size={18} />
                Mobile: +91 - 9724885555
              </p>
              <p className="mt-3 flex gap-3 text-sm font-semibold text-von-ink/70">
                <Phone className="shrink-0 text-von-blue-700" size={18} />
                Landline: 079 - 40194400
              </p>
              <p className="mt-3 flex gap-3 text-sm font-semibold text-von-ink/70">
                <Mail className="shrink-0 text-von-blue-700" size={18} />
                vonopticals1@gmail.com
              </p>
            </div>
            <a href={mapLink} target="_blank" rel="noreferrer" className="btn-primary mt-7">
              Open Google Map
              <ExternalLink size={18} />
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-md border border-von-blue-100 bg-von-mist shadow-soft">
              <div className="relative bg-white p-3">
                <img src={storeImage} alt="VON Optical storefront and display" className="max-h-[620px] w-full rounded-md object-contain" />
                <a href={mapLink} target="_blank" rel="noreferrer" className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-von-blue-900 px-4 py-2 text-xs font-bold text-white shadow-lift transition hover:bg-von-blue-700">
                  Google Map
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
