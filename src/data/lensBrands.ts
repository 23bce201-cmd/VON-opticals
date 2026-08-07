export type LensBrand = {
  name: string;
  specialty: string;
  detail: string;
};

export const lensBrands: LensBrand[] = [
  {
    name: "Essilor",
    specialty: "Progressive and daily clarity",
    detail: "A strong choice for varifocals, anti-glare coatings, and lenses built around long working days.",
  },
  {
    name: "Zeiss",
    specialty: "Precision optics and coatings",
    detail: "Known for sharp visual fields, premium anti-reflective finishes, and digital-screen comfort options.",
  },
  {
    name: "Nikon",
    specialty: "Thin, clear prescription lenses",
    detail: "Well suited to higher prescriptions where lightweight lens design and clean edge finishing matter.",
  },
  {
    name: "Rodenstock",
    specialty: "Individualized lens design",
    detail: "Personalized measurements help refine progressive, occupational, and premium single-vision lenses.",
  },
];
