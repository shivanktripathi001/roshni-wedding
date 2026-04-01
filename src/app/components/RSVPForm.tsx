import { useState } from "react";

const events = ["Mehendi", "Haldi", "Sangeet", "Baraat", "Wedding", "Reception"];

type FormData = {
  name: string;
  phone: string;
  email: string;
  guests: number;
  selectedEvents: string[];
  dietary: string;
  message: string;
};

export function RSVPForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    guests: 1,
    selectedEvents: [],
    dietary: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [shimmer, setShimmer] = useState(false);

  const toggleEvent = (ev: string) => {
    setForm((prev) => ({
      ...prev,
      selectedEvents: prev.selectedEvents.includes(ev)
        ? prev.selectedEvents.filter((e) => e !== ev)
        : [...prev.selectedEvents, ev],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShimmer(true);
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Lato', sans-serif",
    fontSize: "14px",
    color: "#333",
    background: "#fff",
    border: "1.5px solid rgba(201,168,76,0.5)",
    borderRadius: 12,
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="rsvp"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "#8B0000" }}
    >
      <style>{`
        @keyframes shimmerBtn {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-btn {
          background: linear-gradient(90deg, #C9A84C 0%, #E8C97A 40%, #C9A84C 60%, #A07830 100%);
          background-size: 200% auto;
          animation: shimmerBtn 2s linear infinite;
        }
      `}</style>

      {/* Damask pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='40' cy='40' rx='28' ry='36' fill='none' stroke='%23C9A84C' stroke-width='1.5'/%3E%3Cellipse cx='40' cy='28' rx='14' ry='18' fill='none' stroke='%23C9A84C' stroke-width='1'/%3E%3Cpath d='M40,4 Q56,4 56,20 Q56,36 40,40 Q24,36 24,20 Q24,4 40,4 Z' fill='none' stroke='%23C9A84C' stroke-width='1' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#C9A84C",
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: 700,
            }}
          >
            Will You Be There?
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(253,246,227,0.8)", fontSize: "15px", marginTop: 6 }}>
            Let us know so we can celebrate together!
          </p>
        </div>

        {submitted ? (
          <div
            className="text-center py-16 px-8 rounded-2xl flex flex-col items-center gap-5"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(201,168,76,0.4)" }}
          >
            <div className="text-6xl">🎊</div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#C9A84C",
                fontSize: "36px",
                fontWeight: 700,
              }}
            >
              Thank You, {form.name || "Dear Guest"}!
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#FDF6E3", fontSize: "16px" }}>
              Your RSVP has been received. We're so excited to celebrate with you! 💛
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-8 py-3 rounded-full text-sm"
              style={{
                fontFamily: "'Lato', sans-serif",
                background: "#C9A84C",
                color: "#3D0000",
                border: "none",
                fontWeight: 700,
              }}
            >
              Update RSVP
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 md:p-10 flex flex-col gap-5"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            {/* Name */}
            <div>
              <label style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "12px", letterSpacing: "0.15em", display: "block", marginBottom: 6 }}>
                GUEST FULL NAME *
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                style={inputStyle}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C9A84C")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)")}
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "12px", letterSpacing: "0.15em", display: "block", marginBottom: 6 }}>
                  PHONE NUMBER *
                </label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C9A84C")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)")}
                />
              </div>
              <div>
                <label style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "12px", letterSpacing: "0.15em", display: "block", marginBottom: 6 }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C9A84C")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)")}
                />
              </div>
            </div>

            {/* Number of Guests (stepper) */}
            <div>
              <label style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "12px", letterSpacing: "0.15em", display: "block", marginBottom: 6 }}>
                NUMBER OF GUESTS *
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, guests: Math.max(1, p.guests - 1) }))}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-200 hover:scale-110"
                  style={{ background: "#C9A84C", color: "#3D0000", border: "none" }}
                >
                  −
                </button>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "#fff", fontSize: "28px", fontWeight: 700, minWidth: 40, textAlign: "center" }}>
                  {form.guests}
                </span>
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, guests: Math.min(20, p.guests + 1) }))}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-200 hover:scale-110"
                  style={{ background: "#C9A84C", color: "#3D0000", border: "none" }}
                >
                  +
                </button>
                <span style={{ fontFamily: "'Lato', sans-serif", color: "rgba(253,246,227,0.6)", fontSize: "13px" }}>
                  person{form.guests !== 1 ? "s" : ""}
                </span>
              </div>
            </div>

            {/* Events attending */}
            <div>
              <label style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "12px", letterSpacing: "0.15em", display: "block", marginBottom: 8 }}>
                EVENTS ATTENDING
              </label>
              <div className="flex flex-wrap gap-3">
                {events.map((ev) => {
                  const selected = form.selectedEvents.includes(ev);
                  return (
                    <button
                      key={ev}
                      type="button"
                      onClick={() => toggleEvent(ev)}
                      className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        background: selected ? "#C9A84C" : "rgba(255,255,255,0.1)",
                        color: selected ? "#3D0000" : "#FDF6E3",
                        border: `1.5px solid ${selected ? "#C9A84C" : "rgba(201,168,76,0.4)"}`,
                        fontWeight: selected ? 700 : 400,
                      }}
                    >
                      {ev}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dietary */}
            <div>
              <label style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "12px", letterSpacing: "0.15em", display: "block", marginBottom: 6 }}>
                DIETARY PREFERENCE
              </label>
              <select
                value={form.dietary}
                onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C9A84C")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)")}
              >
                <option value="">Select preference...</option>
                <option value="veg">Vegetarian</option>
                <option value="jain">Jain</option>
                <option value="none">No Preference</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "12px", letterSpacing: "0.15em", display: "block", marginBottom: 6 }}>
                MESSAGE (OPTIONAL)
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                placeholder="Leave a warm message for the couple..."
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#C9A84C")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full py-4 rounded-full text-base tracking-wider transition-all duration-200 hover:scale-[1.02] ${shimmer ? "shimmer-btn" : ""}`}
              style={{
                fontFamily: "'Lato', sans-serif",
                background: shimmer ? undefined : "#C9A84C",
                color: "#3D0000",
                border: "none",
                fontWeight: 700,
                letterSpacing: "0.1em",
                boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
              }}
            >
              RSVP Now 💍
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
