const events = [
  {
    icon: "🌸",
    name: "Haldi, Mehendi & Sangeet",
    date: "19 April 2026",
    time: "7:00 PM onwards",
    color: "#ff6b88",
    description: "Join us for a day filled with colors, music, and joy",
  },
  {
    icon: "💍",
    name: "Wedding Ceremony & Reception",
    date: "20 April 2026",
    time: "7:00 PM onwards",
    color: "#e94560",
    description: "Witness our union and celebrate with us",
  },
];

export function EventsSection() {
  return (
    <section
      id="events"
      className="py-20 px-4 relative"
      style={{ background: "#f8f9fa" }}
    >
      {/* Faint paisley background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='30' cy='30' rx='20' ry='28' fill='none' stroke='%23e94560' stroke-width='1.5'/%3E%3Cellipse cx='30' cy='20' rx='10' ry='14' fill='none' stroke='%23e94560' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#2d3436",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
            }}
          >
            Celebration Events
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16" style={{ background: "#e94560" }} />
            <svg width="14" height="14" viewBox="0 0 14 14">
              <polygon points="7,1 9,5 13,5 10,8 11,12 7,9 3,12 4,8 1,5 5,5" fill="#e94560" />
            </svg>
            <div className="h-px w-16" style={{ background: "#e94560" }} />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((ev, i) => (
            <div
              key={i}
              className="group rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-default"
              style={{
                background: "#ffffff",
                border: "2px solid #e94560",
                boxShadow: "0 4px 20px rgba(233,69,96,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(233,69,96,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(233,69,96,0.1)";
              }}
            >
              {/* Icon + name */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${ev.color}18` }}
                >
                  {ev.icon}
                </div>
                <h3
                  className="text-xl sm:text-2xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#2d3436",
                    fontWeight: 700,
                  }}
                >
                  {ev.name}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-sm italic"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#636e72",
                }}
              >
                {ev.description}
              </p>

              {/* Thin divider */}
              <div className="h-px" style={{ background: "#e94560", opacity: 0.3 }} />

              {/* Date & Time */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span style={{ color: "#e94560", fontSize: "14px" }}>📅</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: "#2d3436", fontSize: "14px" }}>
                    {ev.date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span style={{ color: "#e94560", fontSize: "14px" }}>🕐</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: "#2d3436", fontSize: "14px" }}>
                    {ev.time}
                  </span>
                </div>
              </div>

              {/* Venue */}
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "#e94560",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                📍 Sanskar Garden, Panna Road Pateri Chauraha, Pateri
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
