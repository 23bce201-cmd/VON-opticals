import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </Reveal>
  );
}
