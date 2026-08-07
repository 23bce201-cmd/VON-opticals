import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { pageSequence } from "../data/navigation";
import logoUrl from "../photos/logo.jpeg";

const navItems = pageSequence;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-von-blue-900 text-white backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-lift" : "shadow-none"
      }`}
    >
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? "h-16" : "h-20"}`}>
        <Link to="/home" className="focus-ring flex min-h-11 items-center rounded-md" aria-label="VON Optical home">
          <img src={logoUrl} alt="VON Optical" className="h-11 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/home"}
              className={({ isActive }) =>
                `focus-ring rounded-full px-4 py-3 text-sm font-semibold transition ${
                  isActive ? "bg-white text-von-blue-900" : "text-white/80 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link to="/visit-us" className="nav-visit-btn">
            Get Directions
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/40 bg-white text-von-blue-900 xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-von-blue-900 px-6 pt-6 text-white shadow-lift transition-transform duration-300 xl:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <img src={logoUrl} alt="VON Optical" className="h-10 w-auto object-contain" />
          <button
            type="button"
            className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/30 bg-white text-von-blue-900"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>
        <div className="mt-8 grid gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/home"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `focus-ring rounded-md px-4 py-4 text-base font-semibold ${
                  isActive ? "bg-white text-von-blue-900" : "text-white/80 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/visit-us" onClick={() => setOpen(false)} className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-von-blue-900">
            Get Directions
          </Link>
        </div>
      </div>
      {open && <button className="fixed inset-0 z-40 bg-von-ink/30 xl:hidden" aria-label="Close menu overlay" onClick={() => setOpen(false)} />}
    </header>
  );
}
