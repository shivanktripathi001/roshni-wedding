const dressCategories = [
  {
    title: "Family Members",
    subtitle: "Traditional Indian Formals",
    icon: "👨‍👩‍👧‍👦",
    swatches: ["#8B0000", "#5C0000", "#C9A84C", "#2E7D32"],
    swatchLabels: ["Red", "Maroon", "Gold", "Green"],
    dos: ["Sarees, Lehengas, Sherwanis", "Rich silks & brocades"],
    donts: ["Avoid white or black", "No casual western wear"],
  },
  {
    title: "Close Friends",
    subtitle: "Pastels & Fusion Wear",
    icon: "👯",
    swatches: ["#D8B4FE", "#FDBA74", "#6EE7B7", "#FCA5A5"],
    swatchLabels: ["Lavender", "Peach", "Mint", "Dusty Rose"],
    dos: ["Indo-western fusion", "Soft pastel tones welcome"],
    donts: ["Avoid neons or bright white", "No heavy western formals"],
  },
  {
    title: "General Guests",
    subtitle: "Smart Indian Casuals",
    icon: "🎊",
    swatches: ["#1E3A5F", "#F5ECD7", "#4A5E3A", "#6B2737"],
    swatchLabels: ["Navy", "Cream", "Olive", "Burgundy"],
    dos: ["Kurta sets, salwar suits", "Semi-formal Indian attire"],
    donts: ["Avoid very casual denim", "No revealing outfits"],
  },
];

export function DressCode() {
  return (
    <section
      id="dresscode"
      className="py-20 px-4"
      style={{ background: "#FFF0F0" }}
    >
      {/* Floral corner decorations */}
      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#8B0000",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
            }}
          >
            Dress to Celebrate
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#888", fontSize: "15px", marginTop: 6 }}>
            Our dress code guide for guests
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16" style={{ background: "#C9A84C" }} />
            <span style={{ fontSize: "18px" }}>🌸</span>
            <div className="h-px w-16" style={{ background: "#C9A84C" }} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dressCategories.map((cat, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid #C9A84C",
                boxShadow: "0 4px 20px rgba(201,168,76,0.12)",
              }}
            >
              {/* Floral header */}
              <div
                className="flex flex-col items-center py-6 px-4 gap-2"
                style={{
                  background: "linear-gradient(135deg, #FFF0F0, #FDF6E3)",
                  borderBottom: "1px solid #C9A84C",
                }}
              >
                <div className="text-4xl">{cat.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#8B0000",
                    fontSize: "24px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#C9A84C",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textAlign: "center",
                  }}
                >
                  {cat.subtitle}
                </p>
              </div>

              <div className="p-6 flex flex-col gap-5">
                {/* Color swatches */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#888",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    Color Palette
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {cat.swatches.map((color, j) => (
                      <div key={j} className="flex flex-col items-center gap-1">
                        <div
                          className="rounded-full"
                          style={{
                            width: 36,
                            height: 36,
                            background: color,
                            border: "2px solid rgba(201,168,76,0.4)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                          }}
                        />
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "#888" }}>
                          {cat.swatchLabels[j]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Do's */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#2E7D32",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    ✓ Do's
                  </p>
                  {cat.dos.map((d, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#444",
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      • {d}
                    </p>
                  ))}
                </div>

                {/* Don'ts */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#C0392B",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    ✗ Don'ts
                  </p>
                  {cat.donts.map((d, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "#444",
                        fontSize: "13px",
                        lineHeight: 1.6,
                      }}
                    >
                      • {d}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
