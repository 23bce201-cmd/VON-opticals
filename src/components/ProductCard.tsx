import { Link } from "react-router-dom";

type ProductCardProps = {
  title: string;
  copy: string;
  link: string;
  linkLabel: string;
};

export default function ProductCard({ title, copy, link, linkLabel }: ProductCardProps) {
  return (
    <article className="brand-card">
      <h3 className="font-display text-xl font-semibold text-von-blue-900">{title}</h3>
      <p className="mt-3 leading-7 text-von-ink/70">{copy}</p>
      <Link to={link} className="mt-5 inline-flex min-h-11 items-center text-sm font-bold text-von-blue-700 hover:text-von-blue-900">
        {linkLabel}
      </Link>
    </article>
  );
}
