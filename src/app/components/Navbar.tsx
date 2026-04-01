import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Invitation", href: "#invitation" },
  { label: "Story", href: "#story" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Wishes", href: "#wishes" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-6 md:px-12 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(139,0,0,0.92)"
            : "rgba(139,0,0,0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNav("#hero")}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C9A84C", fontSize: "22px", fontWeight: 700, letterSpacing: "0.05em" }}>
            Roshni ♥ Deepak
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-[13px] tracking-widest uppercase transition-colors duration-200"
                style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", letterSpacing: "0.12em" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#E8C97A")}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#C9A84C" }}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className="fixed inset-0 z-40 transition-all duration-300 md:hidden"
        style={{
          pointerEvents: menuOpen ? "all" : "none",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(61,0,0,0.7)" }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute top-0 right-0 h-full w-[280px] flex flex-col pt-[90px] px-8 gap-6"
          style={{
            background: "#3D0000",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease",
            borderLeft: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left py-2 text-base tracking-widest uppercase border-b"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "#E8C97A",
                borderColor: "rgba(201,168,76,0.2)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
