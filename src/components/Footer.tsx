import { Clock, Facebook, Instagram, Mail, MapPin, Phone, UserRound } from "lucide-react";
import logoUrl from "../photos/logo.jpeg";

export default function Footer() {
  return (
    <footer className="bg-von-blue-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[0.85fr_1.15fr_auto] lg:items-center lg:px-8">
        <div>
          <img src={logoUrl} alt="VON Optical" className="h-10 w-auto object-contain" />
          <p className="mt-3 text-sm leading-6 text-white/70">
            Premium eyewear, contact lenses, repairs, and computerised eye check up.
          </p>
        </div>

        <div className="grid gap-2 text-sm text-white/75 sm:grid-cols-2">
          <span className="flex gap-2"><UserRound size={16} className="mt-0.5 shrink-0" /> Proprietor: Niraj Doshi</span>
          <span className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0" /> 10 AM to 8 PM</span>
          <span className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> +91 - 9724885555</span>
          <span className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /> 079 - 40194400</span>
          <span className="flex gap-2 sm:col-span-2"><Mail size={16} className="mt-0.5 shrink-0" /> vonopticals1@gmail.com</span>
          <span className="flex gap-2 sm:col-span-2"><MapPin size={16} className="mt-0.5 shrink-0" /> 4, Pramukh Plaza, Opp. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad - 380015</span>
        </div>

        <div className="flex gap-2 lg:justify-end">
          <a href="https://www.instagram.com/von_opticals?igsh=MW15b2VuOWZhb2o1bQ==" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 hover:text-white" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com/p/Von-opticals-100057077844663/" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 hover:text-white" aria-label="Facebook">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
