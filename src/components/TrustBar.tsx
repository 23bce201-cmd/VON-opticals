import { BadgeCheck, Glasses, ShieldCheck, Stethoscope } from "lucide-react";

const claims = [
  { icon: BadgeCheck, label: "Authorized Dealer", detail: "International eyewear houses" },
  { icon: Glasses, label: "25+ Brands", detail: "Fashion, sport, lenses, contacts" },
  { icon: Stethoscope, label: "In-house Optometrist", detail: "Eye tests and fitting checks" },
  { icon: ShieldCheck, label: "Warranty Support", detail: "Genuine products, documented service" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-von-blue-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-0 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {claims.map((claim) => (
          <div key={claim.label} className="flex min-h-24 items-center gap-4 border-von-blue-100 py-5 sm:border-r sm:pr-5 last:border-r-0">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-von-blue-100 text-von-blue-900">
              <claim.icon size={21} />
            </span>
            <span>
              <strong className="block font-display text-base text-von-blue-900">{claim.label}</strong>
              <span className="text-sm leading-6 text-von-ink/70">{claim.detail}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
