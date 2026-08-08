import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { pageSequence } from "../data/navigation";
import logoUrl from "../photos/logoNoBG.png";
import { usePageTransition } from "./PageTransitionProvider";

const navItems = pageSequence.filter((page) => page.href !== "/visit-us");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigateWithTransition } = usePageTransition();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (event: React.MouseEvent, href: string, direction: "left" | "right" = "left") => {
    event.preventDefault();
    setOpen(false);
    navigateWithTransition(href, direction);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-4 border-von-blue-900 bg-von-blue-900 text-white transition-all duration-150 ${scrolled ? "bg-von-blue-900/95 backdrop-blur-sm" : "bg-von-blue-900"}`}
    >
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-150 sm:px-6 lg:px-8 ${scrolled ? "h-18" : "h-20"}`}>
        <Link to="/home" onClick={(event) => goTo(event, "/home")} className="focus-ring flex min-h-12 items-center pr-6" aria-label="VON Optical home">
          <img src={logoUrl} alt="VON Optical" className="h-16 w-auto object-contain" />
        </Link>

        <div className="hidden h-12 flex-1 items-center border-2 border-white xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/home"}
              onClick={(event) => goTo(event, item.href)}
              className={({ isActive }) =>
                `focus-ring relative flex h-full flex-1 items-center justify-center border-r-2 border-white px-2 text-[11px] font-black uppercase tracking-[0.13em] transition duration-150 last:border-r-0 ${
                  isActive ? "bg-white text-von-blue-900" : "text-white hover:bg-von-accent hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-stretch xl:flex">
          <Link to="/visit-us" onClick={(event) => goTo(event, "/visit-us")} className="nav-visit-btn ml-4 self-center">
            Visit Us
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex min-h-12 min-w-12 items-center justify-center border-2 border-white bg-white text-von-blue-900 xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l-4 border-von-blue-900 bg-white px-6 pt-6 text-von-blue-900 transition-transform duration-200 xl:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <img src={logoUrl} alt="VON Optical" className="h-14 w-auto object-contain " />
          <button
            type="button"
            className="focus-ring inline-flex min-h-12 min-w-12 items-center justify-center border-2 border-von-blue-900 bg-von-blue-900 text-white"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>
        <div className="mt-8 grid gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/home"}
              onClick={(event) => goTo(event, item.href)}
              className={({ isActive }) =>
                `focus-ring border-2 px-4 py-4 text-sm font-black uppercase tracking-[0.18em] ${
                  isActive ? "border-von-blue-900 bg-von-blue-900 text-white" : "border-von-blue-900/30 bg-white text-von-blue-900 hover:border-von-accent hover:bg-von-accent hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/visit-us" onClick={(event) => goTo(event, "/visit-us")} className="btn-primary mt-4">
            Visit Us
          </Link>
        </div>
      </div>
      {open && <button className="fixed inset-0 z-40 bg-von-blue-900/45 xl:hidden" aria-label="Close menu overlay" onClick={() => setOpen(false)} />}
    </header>
  );
}
