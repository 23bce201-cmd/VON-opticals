const brandLogoModules = import.meta.glob("../assets/brand-logos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const photoLogoModules = import.meta.glob("../photos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const logoModules = {
  ...brandLogoModules,
  ...photoLogoModules,
};

const logoAliases: Record<string, string[]> = {
  "Michael Kors": ["michael-kors", "micheal-kors"],
  "David Beckham Eyewear": ["david-beckham-eyewear", "david-beckham"],
  "Bausch + Lomb": ["bausch-plus-lomb", "bausch-and-lomb"],
  CooperVision: ["coopervision", "cooper-vision"],
};

export function brandLogoSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getBrandLogoUrl(name: string) {
  const slugs = logoAliases[name] ?? [brandLogoSlug(name)];
  const match = Object.entries(logoModules).find(([path]) => {
    const filename = path.split("/").pop()?.toLowerCase() ?? "";
    const fileSlug = brandLogoSlug(filename.replace(/\.(png|jpe?g|webp|svg)$/i, ""));
    return slugs.includes(fileSlug);
  });

  return match?.[1] ?? null;
}
