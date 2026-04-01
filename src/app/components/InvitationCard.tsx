export function InvitationCard() {
  const handleDownload = () => {
    alert("Invitation download feature — connect to Supabase to enable PDF generation!");
  };

  return (
    <section
      id="invitation"
      className="py-20 px-4"
      style={{ background: "#FDF6E3" }}
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#C9A84C",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
          }}
        >
          Our Digital Invitation
        </h2>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "#888",
            fontSize: "15px",
            marginTop: 6,
          }}
        >
          Save & Share with your loved ones
        </p>
      </div>

      {/* Card */}
      <div className="max-w-[820px] mx-auto">
        <div
          className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center py-12 px-6 md:px-16 gap-5"
          style={{
            background: "#8B0000",
            border: "4px solid #C9A84C",
            boxShadow: "0 4px 40px rgba(201,168,76,0.3), inset 0 0 60px rgba(0,0,0,0.2)",
          }}
        >
          {/* Corner florals */}
          {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
            <svg
              key={i}
              className={`absolute ${pos}`}
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <circle cx="8" cy="8" r="4" fill="#C9A84C" opacity="0.7" />
              <circle cx="20" cy="4" r="3" fill="#C9A84C" opacity="0.5" />
              <circle cx="4" cy="20" r="3" fill="#C9A84C" opacity="0.5" />
              <path d="M4,4 Q20,4 20,20" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.6" />
            </svg>
          ))}

          {/* Outer decorative border line */}
          <div
            className="absolute inset-3 rounded-xl pointer-events-none"
            style={{ border: "1px solid rgba(201,168,76,0.4)" }}
          />

          {/* Ganesh SVG icon */}
          <div className="flex flex-col items-center gap-1">
            <svg width="52" height="52" viewBox="0 0 52 52">
              <ellipse cx="26" cy="26" rx="24" ry="24" fill="#C9A84C" opacity="0.15" />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="32" fill="#C9A84C">
                🕉
              </text>
            </svg>
            <span style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "11px", letterSpacing: "0.2em" }}>
              शुभम् करोति
            </span>
          </div>

          {/* Floral garland divider */}
          <svg width="240" height="16" viewBox="0 0 240 16">
            <line x1="0" y1="8" x2="88" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
            <ellipse cx="104" cy="8" rx="7" ry="4" fill="none" stroke="#C9A84C" strokeWidth="1.2" />
            <ellipse cx="120" cy="8" rx="7" ry="4" fill="none" stroke="#C9A84C" strokeWidth="1.2" />
            <ellipse cx="136" cy="8" rx="7" ry="4" fill="none" stroke="#C9A84C" strokeWidth="1.2" />
            <line x1="152" y1="8" x2="240" y2="8" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
          </svg>

          {/* शुभ विवाह */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#C9A84C",
              fontSize: "26px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            शुभ विवाह
          </p>

          {/* Couple names */}
          <h2
            className="text-center italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#E8C97A",
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            Roshni Pandey weds Deepak Tripathi
          </h2>

          {/* Lotus separator */}
          <svg width="120" height="20" viewBox="0 0 120 20">
            <line x1="0" y1="10" x2="40" y2="10" stroke="#C9A84C" strokeWidth="1" />
            <ellipse cx="60" cy="10" rx="8" ry="5" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
            <ellipse cx="60" cy="5" rx="4" ry="3" fill="#C9A84C" opacity="0.7" />
            <line x1="80" y1="10" x2="120" y2="10" stroke="#C9A84C" strokeWidth="1" />
          </svg>

          {/* Date */}
          <div className="text-center">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#fff",
                fontSize: "20px",
                fontWeight: 500,
                borderBottom: "1px solid #C9A84C",
                paddingBottom: 4,
                display: "inline-block",
              }}
            >
              Sunday, 20th April 2025
            </p>
          </div>

          {/* Venue */}
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#F5ECD7",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            Sanskar Garden, Panna Road Pateri Chauraha, Pateri, Madhya Pradesh 485001
          </p>

          {/* Hosted by */}
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "rgba(255,255,255,0.65)",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            Hosted by: Pandey & Tripathi Families
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <button
              onClick={handleDownload}
              className="px-8 py-3 transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#C9A84C",
                color: "#3D0000",
                borderRadius: 999,
                border: "none",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              ⬇ Download Invitation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
