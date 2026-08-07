import logoUrl from "../photos/logo.jpeg";

export default function LogoIntro() {
  return (
    <div className="logo-intro" aria-label="Animated VON Optical logo">
      <div className="logo-orbit" />
      <img src={logoUrl} alt="VON Optical" className="relative z-10 h-20 w-auto sm:h-24" />
      <span className="logo-line logo-line-a" />
      <span className="logo-line logo-line-b" />
    </div>
  );
}
