export type ContactLensBrand = {
  name: string;
  focus: string;
};

export const contactLensBrands: ContactLensBrand[] = [
  { name: "Bausch + Lomb", focus: "Daily comfort, monthly options, and dependable toric fitting ranges." },
  { name: "Alcon", focus: "Water-gradient daily lenses, multifocals, and high-comfort silicone hydrogel designs." },
  { name: "CooperVision", focus: "Strong toric and multifocal ranges with practical monthly and daily choices." },
  { name: "Johnson & Johnson", focus: "ACUVUE daily and reusable lenses for active, screen-heavy routines." },
];

export const contactWearTypes = [
  "Daily disposables for convenience and hygiene",
  "Monthly lenses for routine wearers",
  "Toric lenses for astigmatism",
  "Multifocal lenses for near and distance vision",
];
