import { Clock, Facebook, Instagram, Mail, MapPin, Phone, UserRound } from "lucide-react";
import logoUrl from "../photos/logoNoBG.png";

export default function Footer() {
  return (
    <footer className="bg-von-blue-900 text-white">
      <div className="container-full">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 py-6 sm:px-6 lg:grid-cols-[0.85fr_1.15fr_auto] lg:items-stretch lg:px-8">
          <div className="p-6">
            <img src={logoUrl} alt="VON Optical" className="h-10 w-auto object-contain " />
            <p className="mt-5 max-w-sm text-sm font-medium leading-6 text-white/70">
              Premium eyewear, contact lenses, repairs, and computerised eye check up.
            </p>
          </div>

          <div className="grid text-xs font-black uppercase tracking-[0.12em] text-white/75 sm:grid-cols-2">
            <span className="flex gap-2 p-4"><UserRound size={16} className="mt-0.5 shrink-0" /> Proprietor: Niraj Doshi</span>
            <span className="flex gap-2 p-4"><Clock size={16} className="mt-0.5 shrink-0" /> 10 AM to 8 PM</span>
            <span className="flex gap-2 p-4"><Phone size={16} className="mt-0.5 shrink-0" /> +91 - 9724885555</span>
            <span className="flex gap-2 p-4"><Phone size={16} className="mt-0.5 shrink-0" /> 079 - 40194400</span>
            <span className="flex gap-2 p-4 sm:col-span-2"><Mail size={16} className="mt-0.5 shrink-0" /> vonopticals1@gmail.com</span>
            <span className="flex gap-2 p-4 sm:col-span-2"><MapPin size={16} className="mt-0.5 shrink-0" /> 4, Pramukh Plaza, Opp. Ketav Petrol Pump, Polytechnic Road, Ambawadi, Ahmedabad - 380015</span>
          </div>

          <div className="flex gap-4 p-6 lg:justify-end">
            <a href="https://www.instagram.com/von_opticals?igsh=MW15b2VuOWZhb2o1bQ==" className="focus-ring" aria-label="Instagram">
              <Instagram size={22} className="text-white hover:text-von-accent" />
            </a>
            <a href="https://www.facebook.com/p/Von-opticals-100057077844663/" className="focus-ring" aria-label="Facebook">
              <Facebook size={22} className="text-white hover:text-von-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}