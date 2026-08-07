import { frameBrandCategories } from "../data/frameBrands";

type CategoryTabsProps = {
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  const categories = ["All", ...frameBrandCategories];

  return (
    <div className="flex flex-wrap gap-2 pb-2" role="tablist" aria-label="Frame categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={active === category}
          className={`focus-ring min-h-11 shrink-0 rounded-full border px-5 text-sm font-bold transition ${
            active === category ? "border-von-blue-900 bg-von-blue-900 text-white" : "border-von-blue-100 bg-white text-von-blue-900 hover:border-von-blue-500"
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
