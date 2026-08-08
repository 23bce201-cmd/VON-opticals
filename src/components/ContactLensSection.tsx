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
    <section className="section-pad bg-von-mist swiss-diagonal">
      <div className="container-wide">
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

          <div className="mt-12 grid gap-4 border-4 border-von-blue-900 bg-white lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="bg-von-blue-900 p-7 text-white sm:p-9">
              <p className="swiss-label text-white">03. Method</p>
              <h3 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Fitting callouts</h3>
              <div className="mt-6 grid gap-4">
                {contactWearTypes.map((type) => (
                  <div key={type} className="flex gap-3 border-t-2 border-white pt-4">
                    <CheckCircle2 className="mt-1 shrink-0 text-white" size={19} strokeWidth={2.5} />
                    <p className="font-medium leading-7 text-white/80">{type}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="border-t-4 border-von-blue-900 p-4 lg:border-l-4 lg:border-t-0">
              <BrandLogoGrid brands={contactLensBrands.map((brand) => brand.name)} context="contact lenses" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
