import { frameBrandCategories } from "../data/frameBrands";

type CategoryTabsProps = {
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  const categories = ["All", ...frameBrandCategories];

  return (
    <div className="flex flex-wrap gap-4 border-l-2 border-t-2 border-von-blue-900 pb-2" role="tablist" aria-label="Frame categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={active === category}
          className={`focus-ring -ml-0.5 -mt-0.5 min-h-12 shrink-0 border-2 border-von-blue-900 px-5 text-xs font-black uppercase tracking-[0.18em] transition-all duration-200 ${
            active === category ? "bg-von-blue-900 text-white" : "bg-white text-von-blue-900 hover:bg-von-accent hover:text-white hover:border-von-accent hover:shadow-[0_8px_30px_rgba(255,74,28,0.3)]"
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
