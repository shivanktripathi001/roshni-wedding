import { useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Wedding date: April 20, 2026 at 7:00 PM IST
const WEDDING_DATE = new Date("2026-04-20T19:00:00+05:30");

function getTimeLeft() {
  const now = new Date().getTime();
  const weddingTime = WEDDING_DATE.getTime();
  const diff = weddingTime - now;
  
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  
  return {
    days,
    hours,
    minutes,
    seconds,
    passed: false,
  };
}

export function CountdownTimer() {
  const [time, setTime] = useState(() => getTimeLeft());
  const [mounted, setMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    
    const id = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <section
        id="countdown"
        className="relative py-20 px-4 overflow-hidden"
        style={{ background: "#f8f9fa" }}
      >
        <div className="relative z-10 flex flex-col items-center gap-8 text-center">
          <div>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="countdown"
      ref={ref}
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "#f8f9fa" }}
    >
      {/* Mandala watermark */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 400"
        style={{ opacity: 0.03 }}
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="400" cy="200" r="180" fill="none" stroke="#e94560" strokeWidth="2" />
        <circle cx="400" cy="200" r="130" fill="none" stroke="#e94560" strokeWidth="2" />
        <circle cx="400" cy="200" r="80" fill="none" stroke="#e94560" strokeWidth="1.5" />
        <circle cx="400" cy="200" r="40" fill="none" stroke="#e94560" strokeWidth="1" />
        {[...Array(16)].map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={400 + 40 * Math.cos(angle)}
              y1={200 + 40 * Math.sin(angle)}
              x2={400 + 180 * Math.cos(angle)}
              y2={200 + 180 * Math.sin(angle)}
              stroke="#e94560"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#2d3436",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
            }}
          >
            {time.passed ? "The Big Day Has Arrived! 🎊" : "The Big Day Is Almost Here!"}
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", color: "#e94560", fontSize: "15px", marginTop: 6 }}>
            20 April 2026 — Pateri, MP
          </p>
        </div>

        {/* Single Timer Box */}
        <div
          className="relative px-8 sm:px-12 py-8 sm:py-10 rounded-2xl"
          style={{
            border: "3px solid #e94560",
            background: "#ffffff",
            boxShadow: "0 8px 32px rgba(233,69,96,0.15)",
            maxWidth: "600px",
            width: "100%",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.8s ease-out 0.2s',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        >
          {/* Corner brackets */}
          {[
            "top-2 left-2",
            "top-2 right-2 rotate-90",
            "bottom-2 left-2 -rotate-90",
            "bottom-2 right-2 rotate-180",
          ].map((pos, i) => (
            <svg
              key={i}
              className={`absolute ${pos}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M2,14 L2,2 L14,2" fill="none" stroke="#e94560" strokeWidth="2" />
            </svg>
          ))}

          <div className="flex justify-center items-center gap-4 sm:gap-6">
            {/* Days */}
            <div className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e94560",
                  fontSize: "clamp(40px, 8vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {String(time.days).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#636e72",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  marginTop: 4,
                  textTransform: "uppercase",
                }}
              >
                Days
              </span>
            </div>

            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#e94560",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: 300,
              }}
            >
              :
            </span>

            {/* Hours */}
            <div className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e94560",
                  fontSize: "clamp(40px, 8vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {String(time.hours).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#636e72",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  marginTop: 4,
                  textTransform: "uppercase",
                }}
              >
                Hours
              </span>
            </div>

            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#e94560",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: 300,
              }}
            >
              :
            </span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e94560",
                  fontSize: "clamp(40px, 8vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {String(time.minutes).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#636e72",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  marginTop: 4,
                  textTransform: "uppercase",
                }}
              >
                Minutes
              </span>
            </div>

            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#e94560",
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: 300,
              }}
            >
              :
            </span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#e94560",
                  fontSize: "clamp(40px, 8vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {String(time.seconds).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: "#636e72",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  marginTop: 4,
                  textTransform: "uppercase",
                }}
              >
                Seconds
              </span>
            </div>
          </div>
        </div>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "#636e72",
            fontSize: "18px",
            opacity: isVisible ? 0.9 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.4s',
          }}
        >
          We can't wait to celebrate with you 🎊
        </p>
      </div>
    </section>
  );
}
