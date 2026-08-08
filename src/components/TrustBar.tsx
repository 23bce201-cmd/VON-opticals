import { BadgeCheck, Glasses, ShieldCheck, Stethoscope } from "lucide-react";

const claims = [
  { icon: BadgeCheck, label: "Authorized Dealer", detail: "International eyewear houses" },
  { icon: Glasses, label: "25+ Brands", detail: "Fashion, sport, lenses, contacts" },
  { icon: Stethoscope, label: "In-house Optometrist", detail: "Eye tests and fitting checks" },
  { icon: ShieldCheck, label: "Warranty Support", detail: "Genuine products, documented service" },
];

export default function TrustBar() {
  return (
    <section className="border-y-4 border-von-blue-900 bg-white">
      <div className="container-wide">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {claims.map((claim, index) => (
            <div key={claim.label} className="group flex min-h-32 items-center gap-4 border-b-4 border-von-blue-900 bg-white py-5 transition-all duration-200 hover:bg-von-accent hover:text-white sm:border-r-4 sm:px-5 lg:border-b-0 last:border-r-0">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center border-2 border-von-blue-900 bg-von-mist text-von-blue-900 group-hover:border-white group-hover:bg-white group-hover:text-von-blue-900 transition-all duration-200">
                <claim.icon size={24} strokeWidth={2.5} />
              </span>
              <span>
                <span className="swiss-number">0{index + 1}.</span>
                <strong className="mt-2 block font-display text-base font-black uppercase leading-tight text-current">{claim.label}</strong>
                <span className="mt-1 block text-sm font-medium leading-6 text-von-blue-900/70 group-hover:text-white/85">{claim.detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
