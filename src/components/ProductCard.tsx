import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  title: string;
  copy: string;
  link: string;
  linkLabel: string;
};

export default function ProductCard({ title, copy, link, linkLabel }: ProductCardProps) {
  return (
    <article className="brand-card group">
      <h3 className="font-display text-2xl font-black uppercase leading-none text-current">{title}</h3>
      <p className="mt-4 leading-7 text-von-blue-900/70 group-hover:text-white/85">{copy}</p>
      <Link to={link} className="mt-6 inline-flex min-h-11 items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-current">
        {linkLabel}
        <ArrowUpRight size={17} className="-rotate-45 transition duration-150 group-hover:rotate-0" />
      </Link>
    </article>
  );
}
