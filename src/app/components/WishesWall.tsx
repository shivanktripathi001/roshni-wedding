import { useState } from "react";

interface Wish {
  id: number;
  name: string;
  message: string;
}

const defaultWishes: Wish[] = [];

export function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>(defaultWishes);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!name.trim() || !message.trim()) return;
    setWishes((prev) => [
      { id: Date.now(), name, message },
      ...prev,
    ]);
    setName("");
    setMessage("");
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    color: "#2d3436",
    background: "#fff",
    border: "1.5px solid #e94560",
    borderRadius: 12,
    padding: "12px 16px",
    width: "100%",
    outline: "none",
  };

  return (
    <section
      id="wishes"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <svg
            key={i}
            className="absolute"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
          >
            <polygon
              points="6,0 7,4 11,4 8,7 9,11 6,8 3,11 4,7 1,4 5,4"
              fill="#e94560"
            />
          </svg>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#2d3436",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
            }}
          >
            Blessings & Wishes
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#636e72", fontSize: "15px", marginTop: 6 }}>
            Leave your love for the couple
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16" style={{ background: "#e94560" }} />
            <span style={{ fontSize: "18px" }}>💐</span>
            <div className="h-px w-16" style={{ background: "#e94560" }} />
          </div>
        </div>

        {/* Input form */}
        <div
          className="max-w-2xl mx-auto rounded-2xl p-6 md:p-8 flex flex-col gap-5"
          style={{
            background: "#f8f9fa",
            border: "2px solid #e94560",
            boxShadow: "0 4px 24px rgba(233,69,96,0.1)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#2d3436",
              fontSize: "26px",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Leave Your Blessing 💐
          </h3>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name..."
            style={inputStyle}
            onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#e94560")}
            onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#e94560")}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your wishes for Roshni & Deepak..."
            rows={4}
            style={{ ...inputStyle, resize: "none" }}
            onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#e94560")}
            onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#e94560")}
          />
          <div className="flex justify-center">
            <button
              onClick={handleSend}
              disabled={!name.trim() || !message.trim()}
              className="px-10 py-3 rounded-full text-sm tracking-wider transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: "'Inter', sans-serif",
                background:
                  name.trim() && message.trim() ? "#e94560" : "#ddd",
                color: name.trim() && message.trim() ? "#ffffff" : "#999",
                border: "none",
                fontWeight: 700,
                letterSpacing: "0.08em",
                cursor: name.trim() && message.trim() ? "pointer" : "not-allowed",
              }}
            >
              Send Blessings 💐
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
