import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const COUPLE_IMG = "/M.jpg";
const WA_URL = "https://wa.me/?text=You're+invited+to+Roshni+%26+Deepak's+Wedding!+🎊+Check+details+here:+[website-link]";

function GoldPetal({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: 10,
        height: 18,
        borderRadius: "50% 0 50% 50%",
        background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
        opacity: 0.7,
        animation: "floatPetal 6s ease-in infinite",
        ...style,
      }}
    />
  );
}

export function HeroSection() {
  const petals = Array.from({ length: 14 }, (_, i) => ({
    left: `${Math.random() * 90 + 5}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 4}s`,
  }));

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden"
      style={{ paddingTop: 70 }}
    >
      <style>{`
        @keyframes floatPetal {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100px) rotate(720deg); opacity: 0; }
        }
        @keyframes bokehFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.04; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 0.07; }
        }
        @keyframes archGlow {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(201,168,76,0.4)); }
          50% { filter: drop-shadow(0 0 24px rgba(201,168,76,0.7)); }
        }
        @keyframes whatsappPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          50% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
        }
      `}</style>

      {/* LEFT SIDE — Crimson + Arch */}
      <div
        className="relative w-full md:w-[60%] min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#5C0000" }}
      >
        {/* Bokeh texture */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              background: "#C9A84C",
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              animation: `bokehFloat ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
              opacity: 0.05,
            }}
          />
        ))}

        {/* Floating Petals */}
        {petals.map((p, i) => (
          <GoldPetal
            key={i}
            style={{
              left: p.left,
              bottom: "-20px",
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}

        {/* Photo with simple gold border */}
        <div className="relative flex items-center justify-center z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] px-4">
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{
              aspectRatio: "4/5",
              border: "4px solid #C9A84C",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <ImageWithFallback
              src={COUPLE_IMG}
              alt="Roshni & Deepak"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Bottom decorative text on photo side */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center px-4">
          <span
            className="px-4 sm:px-6 py-2 text-[10px] sm:text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#C9A84C",
              background: "rgba(61,0,0,0.6)",
              borderRadius: 999,
              border: "1px solid rgba(201,168,76,0.4)",
              letterSpacing: "0.15em",
            }}
          >
            <span className="hidden sm:inline">Roshni & Deepak · 20 April 2025</span>
            <span className="sm:hidden">R & D · 20 Apr 2025</span>
          </span>
        </div>
      </div>

      {/* RIGHT SIDE — Ivory */}
      <div
        className="relative w-full md:w-[40%] flex flex-col items-center justify-center px-8 md:px-12 py-16 md:py-0"
        style={{ background: "#FDF6E3" }}
      >
        {/* Mandala watermark */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 600"
          style={{ opacity: 0.06 }}
        >
          <circle cx="200" cy="300" r="160" fill="none" stroke="#C9A84C" strokeWidth="2" />
          <circle cx="200" cy="300" r="120" fill="none" stroke="#C9A84C" strokeWidth="2" />
          <circle cx="200" cy="300" r="80" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
          <circle cx="200" cy="300" r="40" fill="none" stroke="#C9A84C" strokeWidth="1" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={200 + 40 * Math.cos(angle)}
                y1={300 + 40 * Math.sin(angle)}
                x2={200 + 160 * Math.cos(angle)}
                y2={300 + 160 * Math.sin(angle)}
                stroke="#C9A84C"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        <div className="relative z-10 flex flex-col items-center text-center gap-5">
          {/* Top gold divider */}
          <div className="flex items-center gap-3 w-full justify-center">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <svg width="20" height="20" viewBox="0 0 20 20">
              <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="#C9A84C" />
            </svg>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          {/* Tag */}
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "'Lato', sans-serif", color: "#C9A84C", letterSpacing: "0.3em" }}
          >
            Wedding Invitation
          </span>

          {/* Names */}
          <div className="flex flex-col items-center gap-1">
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#8B0000",
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Roshni Pandey
            </h1>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#C9A84C",
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: 400,
                lineHeight: 1,
                fontStyle: "italic",
              }}
            >
              &
            </span>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#8B0000",
                fontSize: "clamp(36px, 5vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Deepak Tripathi
            </h1>
          </div>

          {/* Lotus divider */}
          <svg className="w-[140px] sm:w-[180px]" height="28" viewBox="0 0 180 28">
            <line x1="0" y1="14" x2="65" y2="14" stroke="#C9A84C" strokeWidth="1.5" />
            <ellipse cx="90" cy="14" rx="9" ry="6" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
            <ellipse cx="78" cy="18" rx="7" ry="5" fill="none" stroke="#C9A84C" strokeWidth="1" />
            <ellipse cx="102" cy="18" rx="7" ry="5" fill="none" stroke="#C9A84C" strokeWidth="1" />
            <ellipse cx="90" cy="8" rx="5" ry="4" fill="#C9A84C" opacity="0.6" />
            <line x1="115" y1="14" x2="180" y2="14" stroke="#C9A84C" strokeWidth="1.5" />
          </svg>

          {/* Date info */}
          <p
            className="italic text-base sm:text-lg md:text-xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#5C0000" }}
          >
            We're Getting Married
          </p>
          <p
            className="text-2xl sm:text-3xl md:text-[32px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#C9A84C",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            20 April 2025
          </p>
          <p className="text-sm sm:text-base" style={{ fontFamily: "'Lato', sans-serif", color: "#888" }}>
            Sanskar Garden, Panna Road Pateri Chauraha, Pateri
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-2 w-full px-4">
            <button
              onClick={() => document.querySelector("#story")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wider transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#8B0000",
                color: "#FDF6E3",
                borderRadius: 999,
                border: "none",
                letterSpacing: "0.08em",
              }}
            >
              View Our Story
            </button>
            <button
              onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wider transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "transparent",
                color: "#C9A84C",
                borderRadius: 999,
                border: "2px solid #C9A84C",
                letterSpacing: "0.08em",
              }}
            >
              See Events
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-1 cursor-pointer"
        style={{ textDecoration: "none" }}
      >
        <div
          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
          style={{
            background: "#25D366",
            animation: "whatsappPulse 2s ease-in-out infinite",
          }}
        >
          <svg className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2C7.373 2 2 7.373 2 14c0 2.15.56 4.17 1.54 5.92L2 26l4.24-1.51A11.94 11.94 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
              fill="white"
            />
            <path
              d="M19.5 16.6c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.19 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.19-.57-.34z"
              fill="#25D366"
            />
          </svg>
        </div>
        <span
          className="px-2 py-0.5 rounded text-[9px] sm:text-xs hidden sm:block"
          style={{
            fontFamily: "'Lato', sans-serif",
            background: "#25D366",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          Share Invite
        </span>
      </a>
    </section>
  );
}
