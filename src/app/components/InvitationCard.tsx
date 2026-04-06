import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function InvitationCard() {
  const handleDownload = () => {
    alert("Invitation download feature — connect to Supabase to enable PDF generation!");
  };

  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="invitation"
      ref={ref}
      className="py-20 px-4"
      style={{ background: "#f8f9fa" }}
    >
      {/* Section header */}
      <div 
        className="text-center mb-10 sm:mb-12 px-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#e94560",
            fontSize: "clamp(28px, 6vw, 48px)",
            fontWeight: 700,
          }}
        >
          Our Digital Invitation
        </h2>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "#636e72",
            fontSize: "clamp(13px, 3vw, 15px)",
            marginTop: 6,
          }}
        >
          Save & Share with your loved ones
        </p>
      </div>

      {/* Card */}
      <div 
        className="max-w-[820px] mx-auto px-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.8s ease-out 0.2s',
        }}
      >
        <div
          className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden flex flex-col items-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-16 gap-4 sm:gap-5 transition-all duration-300 active:shadow-2xl active:-translate-y-1"
          style={{
            background: "#ffffff",
            border: "3px solid #e94560",
            boxShadow: "0 4px 40px rgba(233,69,96,0.15)",
          }}
        >
          {/* Corner florals */}
          {["top-2 left-2 sm:top-3 sm:left-3", "top-2 right-2 sm:top-3 sm:right-3", "bottom-2 left-2 sm:bottom-3 sm:left-3", "bottom-2 right-2 sm:bottom-3 sm:right-3"].map((pos, i) => (
            <svg
              key={i}
              className={`absolute ${pos}`}
              width="32"
              height="32"
              viewBox="0 0 40 40"
            >
              <circle cx="8" cy="8" r="4" fill="#e94560" opacity="0.3" />
              <circle cx="20" cy="4" r="3" fill="#e94560" opacity="0.2" />
              <circle cx="4" cy="20" r="3" fill="#e94560" opacity="0.2" />
              <path d="M4,4 Q20,4 20,20" fill="none" stroke="#e94560" strokeWidth="1.5" opacity="0.3" />
            </svg>
          ))}

          {/* Outer decorative border line */}
          <div
            className="absolute inset-2 sm:inset-3 rounded-lg sm:rounded-xl pointer-events-none"
            style={{ border: "1px solid rgba(233,69,96,0.2)" }}
          />

          {/* Icon */}
          <div className="flex flex-col items-center gap-1">
            <svg width="44" height="44" viewBox="0 0 52 52" className="sm:w-[52px] sm:h-[52px]">
              <ellipse cx="26" cy="26" rx="24" ry="24" fill="#e94560" opacity="0.1" />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="32" fill="#e94560">
                🕉
              </text>
            </svg>
            <span style={{ fontFamily: "'Poppins', sans-serif", color: "#ff6b88", fontSize: "clamp(10px, 2.5vw, 11px)", letterSpacing: "0.2em" }}>
              शुभम् करोति
            </span>
          </div>

          {/* Floral garland divider */}
          <svg width="200" height="16" viewBox="0 0 240 16" className="sm:w-[240px]">
            <line x1="0" y1="8" x2="88" y2="8" stroke="#e94560" strokeWidth="1" opacity="0.5" />
            <ellipse cx="104" cy="8" rx="7" ry="4" fill="none" stroke="#e94560" strokeWidth="1.2" />
            <ellipse cx="120" cy="8" rx="7" ry="4" fill="none" stroke="#e94560" strokeWidth="1.2" />
            <ellipse cx="136" cy="8" rx="7" ry="4" fill="none" stroke="#e94560" strokeWidth="1.2" />
            <line x1="152" y1="8" x2="240" y2="8" stroke="#e94560" strokeWidth="1" opacity="0.5" />
          </svg>

          {/* शुभ विवाह */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#e94560",
              fontSize: "clamp(20px, 5vw, 26px)",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            शुभ विवाह
          </p>

          {/* Couple names */}
          <div className="text-center">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2d3436",
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              Roshni Pandey
            </h2>
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#e94560",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 400,
                margin: "12px 0",
              }}
            >
              weds
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2d3436",
                fontSize: "clamp(32px, 6vw, 52px)",
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              Deepak Tripathi
            </h2>
          </div>

          {/* Lotus separator */}
          <svg width="100" height="20" viewBox="0 0 120 20" className="sm:w-[120px]">
            <line x1="0" y1="10" x2="40" y2="10" stroke="#e94560" strokeWidth="1" />
            <ellipse cx="60" cy="10" rx="8" ry="5" fill="none" stroke="#e94560" strokeWidth="1.5" />
            <ellipse cx="60" cy="5" rx="4" ry="3" fill="#e94560" opacity="0.7" />
            <line x1="80" y1="10" x2="120" y2="10" stroke="#e94560" strokeWidth="1" />
          </svg>

          {/* Date */}
          <div className="text-center">
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#2d3436",
                fontSize: "clamp(16px, 4vw, 20px)",
                fontWeight: 500,
                borderBottom: "1px solid #e94560",
                paddingBottom: 4,
                display: "inline-block",
              }}
            >
              Sunday, 20th April 2026
            </p>
          </div>

          {/* Venue */}
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#636e72",
              fontSize: "clamp(13px, 3.5vw, 15px)",
              textAlign: "center",
              lineHeight: "1.6",
            }}
          >
            Sanskar Garden, Panna Road Pateri Chauraha, Pateri, Madhya Pradesh 485001
          </p>

          {/* Hosted by */}
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#b2bec3",
              fontSize: "clamp(12px, 3vw, 13px)",
              textAlign: "center",
            }}
          >
            Hosted by: Pandey & Tripathi Families
          </p>
        </div>
      </div>
    </section>
  );
}
