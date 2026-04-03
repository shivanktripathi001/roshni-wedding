import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const COUPLE_IMG = "/M.jpg";

function GoldPetal({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: 10,
        height: 18,
        borderRadius: "50% 0 50% 50%",
        background: "linear-gradient(135deg, #e94560, #ff6b88)",
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ paddingTop: 70, background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)" }}
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

      `}</style>

      {/* Bokeh texture */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 80 + i * 40,
            height: 80 + i * 40,
            background: "#e94560",
            top: `${10 + i * 10}%`,
            left: `${5 + i * 12}%`,
            animation: `bokehFloat ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
            opacity: 0.03,
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

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-20">
        <div className="max-w-6xl w-full flex flex-col items-center gap-8">
          
          {/* We're Getting Married - Top Heading */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#e94560",
              fontWeight: 700,
              letterSpacing: "0.05em",
              marginBottom: "8px",
            }}
          >
            We're Getting Married
          </h1>

          {/* Top divider */}
          <div className="flex items-center gap-3 w-full max-w-md justify-center">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #e94560)" }} />
            <svg width="20" height="20" viewBox="0 0 20 20">
              <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="#e94560" />
            </svg>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #e94560)" }} />
          </div>

          {/* Names */}
          <div className="flex flex-col items-center gap-1 text-center">
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#2d3436",
                fontSize: "clamp(32px, 8vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Roshni Pandey
            </h1>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#e94560",
                fontSize: "clamp(40px, 10vw, 80px)",
                fontWeight: 400,
                lineHeight: 1,
                fontStyle: "italic",
              }}
            >
              Weds
            </span>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#2d3436",
                fontSize: "clamp(32px, 8vw, 58px)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Deepak Tripathi
            </h1>
          </div>

          {/* Photo - Positioned after names */}
          <div className="relative flex items-center justify-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] my-4">
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                border: "4px solid #e94560",
                boxShadow: "0 20px 60px rgba(233,69,96,0.25), 0 0 0 8px rgba(233,69,96,0.1)",
              }}
            >
              <ImageWithFallback
                src={COUPLE_IMG}
                alt="Roshni & Deepak"
                className="w-full h-full object-cover object-center"
              />
              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white opacity-60" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white opacity-60" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white opacity-60" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white opacity-60" />
            </div>
          </div>

          {/* Lotus divider */}
          <svg className="w-[140px] sm:w-[180px]" height="28" viewBox="0 0 180 28">
            <line x1="0" y1="14" x2="65" y2="14" stroke="#e94560" strokeWidth="1.5" />
            <ellipse cx="90" cy="14" rx="9" ry="6" fill="none" stroke="#e94560" strokeWidth="1.5" />
            <ellipse cx="78" cy="18" rx="7" ry="5" fill="none" stroke="#e94560" strokeWidth="1" />
            <ellipse cx="102" cy="18" rx="7" ry="5" fill="none" stroke="#e94560" strokeWidth="1" />
            <ellipse cx="90" cy="8" rx="5" ry="4" fill="#e94560" opacity="0.6" />
            <line x1="115" y1="14" x2="180" y2="14" stroke="#e94560" strokeWidth="1.5" />
          </svg>

          {/* Date info */}
          <p
            className="text-2xl sm:text-3xl md:text-4xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#e94560",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            20 April 2026
          </p>
          <p className="text-sm sm:text-base text-center max-w-md" style={{ fontFamily: "'Lato', sans-serif", color: "#636e72" }}>
            Sanskar Garden, Panna Road Pateri Chauraha, Pateri
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-4 w-full max-w-md">
            <button
              onClick={() => document.querySelector("#story")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-sm tracking-wider transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#e94560",
                color: "#ffffff",
                borderRadius: 999,
                border: "none",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              View Our Story
            </button>
            <button
              onClick={() => document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-sm tracking-wider transition-all duration-200 hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "transparent",
                color: "#e94560",
                borderRadius: 999,
                border: "2px solid #e94560",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              See Events
            </button>
          </div>
        </div>
      </div>


    </section>
  );
}
