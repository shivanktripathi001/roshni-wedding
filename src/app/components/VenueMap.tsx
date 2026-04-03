export function VenueMap() {
  return (
    <section
      id="venue"
      className="py-20 px-4"
      style={{ background: "#f8f9fa" }}
    >
      <div className="max-w-6xl mx-auto">
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
            Find Us Here
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16" style={{ background: "#e94560" }} />
            <span style={{ color: "#e94560", fontSize: "20px" }}>📍</span>
            <div className="h-px w-16" style={{ background: "#e94560" }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT — Venue info */}
          <div className="flex flex-col gap-6">
            {/* Big map pin */}
            <div className="flex justify-center md:justify-start">
              <svg width="72" height="90" viewBox="0 0 72 90">
                <defs>
                  <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b88" />
                    <stop offset="100%" stopColor="#e94560" />
                  </linearGradient>
                </defs>
                <path
                  d="M36,4 C18,4 4,18 4,36 C4,58 36,86 36,86 C36,86 68,58 68,36 C68,18 54,4 36,4 Z"
                  fill="url(#pinGrad)"
                />
                <circle cx="36" cy="36" r="14" fill="#2d3436" />
                <circle cx="36" cy="36" r="7" fill="#ffffff" />
              </svg>
            </div>

            <div className="text-center md:text-left">
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#2d3436",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: 700,
                }}
              >
                Sanskar Garden
              </h3>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "#636e72",
                  fontSize: "16px",
                  marginTop: 6,
                }}
              >
                Panna Road Pateri Chauraha, Pateri, Madhya Pradesh 485001
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span style={{ fontSize: "18px" }}>📅</span>
                <span style={{ fontFamily: "'Lato', sans-serif", color: "#2d3436", fontSize: "15px" }}>
                  Sunday, 20th April 2026 · 7:00 PM onwards
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span style={{ fontSize: "18px" }}>📞</span>
                <span style={{ fontFamily: "'Lato', sans-serif", color: "#2d3436", fontSize: "15px" }}>
                  +91 9993823979
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span style={{ fontSize: "18px" }}>✉️</span>
                <span style={{ fontFamily: "'Lato', sans-serif", color: "#2d3436", fontSize: "15px" }}>
                  roshni.deepak2025@gmail.com
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://maps.google.com/?q=Sanskar+Garden+Panna+Road+Pateri+Chauraha+Pateri+Madhya+Pradesh+485001"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  background: "#e94560",
                  color: "#ffffff",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-block",
                  letterSpacing: "0.05em",
                }}
              >
                📍 Open in Google Maps
              </a>
              <a
                href="https://maps.google.com/?q=Sanskar+Garden+Panna+Road+Pateri+Chauraha+Pateri+Madhya+Pradesh+485001&dirflg=d"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  background: "transparent",
                  color: "#e94560",
                  border: "2px solid #e94560",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-block",
                  letterSpacing: "0.05em",
                }}
              >
                🚗 Get Directions
              </a>
            </div>
          </div>

          {/* RIGHT — Map embed */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "3px solid #e94560",
              boxShadow: "0 4px 32px rgba(233,69,96,0.15)",
              height: 400,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14613.21673452632!2d80.82!3d24.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3982e1be69b20bed%3A0x1234567890abcdef!2sSatna%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location — Satna, MP"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
