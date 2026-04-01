import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Wish {
  id: number;
  name: string;
  message: string;
}

const defaultWishes: Wish[] = [
  {
    id: 1,
    name: "Priya Sharma",
    message: "Wishing you both a lifetime of love, laughter, and endless joy! May your journey together be filled with beautiful moments. Congratulations Roshni & Deepak! 🌸",
  },
  {
    id: 2,
    name: "Amit Kumar",
    message: "Two amazing souls, one beautiful story. May God bless this union with love that grows stronger every day. So happy for you both! 💍",
  },
  {
    id: 3,
    name: "Sunita Verma",
    message: "Roshni, you look absolutely radiant! Deepak is the luckiest man. Wishing you a wonderful married life ahead. 🎊",
  },
  {
    id: 4,
    name: "Rahul & Meera",
    message: "May your home be filled with warmth, your hearts with love, and your days with happiness. Here's to forever! ✨",
  },
  {
    id: 5,
    name: "Kavya Tripathi",
    message: "Dear Bhaiya and Bhabhi, may your bond grow stronger with every passing year. We're so blessed to have you in our family! 🌹",
  },
  {
    id: 6,
    name: "Vikram Singh",
    message: "Congratulations on finding your soulmate! May you two always find joy in each other's company. Lots of love! 💛",
  },
];

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
    fontFamily: "'Lato', sans-serif",
    fontSize: "14px",
    color: "#333",
    background: "#fff",
    border: "1.5px solid #C9A84C",
    borderRadius: 12,
    padding: "12px 16px",
    width: "100%",
    outline: "none",
  };

  return (
    <section
      id="wishes"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "#FDF6E3" }}
    >
      {/* Gold sparkles */}
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
              opacity: 0.2,
            }}
          >
            <polygon
              points="6,0 7,4 11,4 8,7 9,11 6,8 3,11 4,7 1,4 5,4"
              fill="#C9A84C"
            />
          </svg>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#8B0000",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
            }}
          >
            Blessings & Wishes
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "#888", fontSize: "15px", marginTop: 6 }}>
            Leave your love for the couple
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16" style={{ background: "#C9A84C" }} />
            <span style={{ fontSize: "18px" }}>💐</span>
            <div className="h-px w-16" style={{ background: "#C9A84C" }} />
          </div>
        </div>

        {/* Masonry wishes grid - Hidden */}
        {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{
                  background: "#fff",
                  border: "2px solid #C9A84C",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.1)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#C9A84C",
                    fontSize: "52px",
                    lineHeight: 0.8,
                    display: "block",
                  }}
                >
                  "
                </span>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: "#555",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {wish.message}
                </p>
                <div className="mt-2 pt-3" style={{ borderTop: "1px solid rgba(201,168,76,0.3)" }}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#8B0000",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    — {wish.name}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry> */}

        {/* Input form */}
        <div
          className="max-w-2xl mx-auto rounded-2xl p-6 md:p-8 flex flex-col gap-5"
          style={{
            background: "#fff",
            border: "2px solid #C9A84C",
            boxShadow: "0 4px 24px rgba(201,168,76,0.15)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#8B0000",
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
            onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#8B0000")}
            onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#C9A84C")}
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your wishes for Roshni & Deepak..."
            rows={4}
            style={{ ...inputStyle, resize: "none" }}
            onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#8B0000")}
            onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#C9A84C")}
          />
          <div className="flex justify-center">
            <button
              onClick={handleSend}
              disabled={!name.trim() || !message.trim()}
              className="px-10 py-3 rounded-full text-sm tracking-wider transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: "'Lato', sans-serif",
                background:
                  name.trim() && message.trim() ? "#C9A84C" : "#ddd",
                color: name.trim() && message.trim() ? "#3D0000" : "#999",
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
