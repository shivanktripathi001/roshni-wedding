import { ImageWithFallback } from "./figma/ImageWithFallback";

const COUPLE_IMG = "/shared image.jpg";

const milestones = [
  {
    icon: "🌸",
    title: "First Meeting",
    date: "March 2020",
    text: "Fate brought us together at a mutual friend's gathering in Satna. One look, one smile — and something quietly changed forever. Neither of us knew that evening would mark the beginning of forever.",
  },
  {
    icon: "💍",
    title: "Engagement",
    date: "January 2024",
    text: "Under a canopy of fairy lights, surrounded by marigolds and roses, Deepak got down on one knee. With tears of joy and a trembling 'Yes,' our forever officially began.",
  },
  {
    icon: "👨👩👧👦",
    title: "Families United",
    date: "March 2024",
    text: "Two families, one joyful union. The Pandeys and the Tripathis came together with open hearts and warm embraces, welcoming a new chapter filled with love, blessings, and togetherness.",
  },
];

export function OurStory() {
  return (
    <section
      id="story"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Petal watermarks at edges */}
      <div
        className="absolute top-0 left-0 w-40 h-full pointer-events-none opacity-5"
        style={{
          background: "radial-gradient(ellipse at left, rgba(233,69,96,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-40 h-full pointer-events-none opacity-5"
        style={{
          background: "radial-gradient(ellipse at right, rgba(233,69,96,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Section title */}
      <div className="text-center mb-10 sm:mb-14 px-4">
        <h2
          className="text-4xl sm:text-5xl md:text-[56px]"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "#2d3436",
            fontWeight: 700,
          }}
        >
          Our Love Story
        </h2>
        <p className="text-sm sm:text-base mt-2" style={{ fontFamily: "'Inter', sans-serif", color: "#636e72" }}>
          From strangers to soulmates
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start px-4">
        {/* LEFT — Timeline */}
        <div className="relative flex flex-col gap-6 sm:gap-8">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5 z-0"
            style={{ background: "linear-gradient(to bottom, #e94560, transparent)" }}
          />

          {milestones.map((m, i) => (
            <div key={i} className="relative flex gap-4 sm:gap-6 z-10">
              {/* Icon dot */}
              <div
                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg z-10"
                style={{
                  background: "#ffffff",
                  border: "2px solid #e94560",
                  boxShadow: "0 0 12px rgba(233,69,96,0.2)",
                }}
              >
                {m.icon}
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-xl sm:rounded-2xl p-4 sm:p-5"
                style={{
                  background: "#f8f9fa",
                  borderLeft: "4px solid #e94560",
                  boxShadow: "0 4px 24px rgba(233,69,96,0.08)",
                }}
              >
                <span
                  className="text-[10px] sm:text-[11px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#e94560",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {m.date}
                </span>
                <h3
                  className="text-lg sm:text-xl md:text-[22px] mt-1 sm:mt-2 mb-2 sm:mb-3"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#2d3436",
                    fontWeight: 700,
                  }}
                >
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#636e72" }}>
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Photo */}
        <div className="flex justify-center mt-8 lg:mt-0">
          <div
            className="relative"
            style={{
              width: "min(100%, 460px)",
              aspectRatio: "4/5",
            }}
          >
            {/* Ornate frame */}
            <div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl"
              style={{
                border: "3px solid #e94560",
                boxShadow: "0 0 0 6px #ffffff, 0 0 0 9px #e94560, 0 8px 40px rgba(233,69,96,0.15)",
              }}
            />
            {/* Corner florals */}
            {["top-1 left-1 sm:top-2 sm:left-2", "top-1 right-1 sm:top-2 sm:right-2", "bottom-1 left-1 sm:bottom-2 sm:left-2", "bottom-1 right-1 sm:bottom-2 sm:right-2"].map(
              (pos, i) => (
                <svg key={i} className={`absolute ${pos} z-10`} width="24" height="24" viewBox="0 0 32 32">
                  <circle cx="6" cy="6" r="5" fill="#e94560" opacity="0.9" />
                  <circle cx="16" cy="4" r="3" fill="#e94560" opacity="0.6" />
                  <circle cx="4" cy="16" r="3" fill="#e94560" opacity="0.6" />
                </svg>
              )
            )}
            <ImageWithFallback
              src={COUPLE_IMG}
              alt="Roshni & Deepak"
              className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
