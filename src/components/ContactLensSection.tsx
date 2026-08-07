import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { contactLensBrands, contactWearTypes } from "../data/contactLensBrands";
import BrandLogoGrid from "./BrandLogoGrid";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type ContactLensSectionProps = {
  compact?: boolean;
};

export default function ContactLensSection({ compact = false }: ContactLensSectionProps) {
  return (
    <section className="section-pad bg-von-mist">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Contact lenses"
            title="Clear choices for daily, monthly, toric, and multifocal wear."
            copy="Contact lens fitting at VON Optical checks comfort, movement, oxygen flow, and vision quality before you commit to a wearing schedule."
          />
          {!compact && (
            <Link to="/contact-lenses" className="link-pill">
              Compare contacts
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-md bg-von-blue-900 p-7 text-white">
            <h3 className="font-display text-2xl font-semibold">Fitting callouts</h3>
            <div className="mt-6 grid gap-4">
              {contactWearTypes.map((type) => (
                <div key={type} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-white" size={19} />
                  <p className="leading-7 text-white/80">{type}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div>
            <BrandLogoGrid brands={contactLensBrands.map((brand) => brand.name)} context="contact lenses" />
          </div>
        </div>
      </div>
    </section>
  );
}
