const galleryModules = import.meta.glob("../photos/gallery/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

export function getGalleryImages(): { url: string; name: string }[] {
  return Object.entries(galleryModules)
    .map(([path, url]) => ({
      url,
      name: path.split("/").pop()?.replace(/\.(jpg|jpeg|png|webp|avif)$/i, "") ?? "gallery photo",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}