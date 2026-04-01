import { useState, useEffect } from "react";

// Wedding date: April 20, 2025 at 2:00 PM
const WEDDING_DATE = new Date(2025, 3, 20, 14, 0, 0); // Month is 0-indexed, so 3 = April

function getTimeLeft() {
  const now = new Date().getTime();
  const weddingTime = WEDDING_DATE.getTime();
  const diff = weddingTime - now;
  
  console.log('Current time:', new Date());
  console.log('Wedding time:', WEDDING_DATE);
  console.log('Difference (ms):', diff);
  
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  
  console.log('Countdown:', { days, hours, minutes, seconds });
  
  return {
    days,
    hours,
    minutes,
    seconds,
    passed: false,
  };
}

function TimerBox({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center relative"
      style={{
        width: "clamp(110px, 18vw, 160px)",
        height: "clamp(110px, 18vw, 160px)",
        borderRadius: 12,
        border: "3px solid #C9A84C",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 0 20px rgba(201,168,76,0.25), inset 0 0 20px rgba(201,168,76,0.05)",
      }}
    >
      {/* Corner brackets */}
      {[
        "top-1 left-1",
        "top-1 right-1 rotate-90",
        "bottom-1 left-1 -rotate-90",
        "bottom-1 right-1 rotate-180",
      ].map((pos, i) => (
        <svg
          key={i}
          className={`absolute ${pos}`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path d="M2,12 L2,2 L12,2" fill="none" stroke="#C9A84C" strokeWidth="2" />
        </svg>
      ))}

      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#C9A84C",
          fontSize: "clamp(40px, 7vw, 64px)",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span
        style={{
          fontFamily: "'Lato', sans-serif",
          color: "#FDF6E3",
          fontSize: "11px",
          letterSpacing: "0.2em",
          marginTop: 4,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="countdown"
      className="relative py-20 px-4 overflow-hidden"
      style={{ background: "#5C0000" }}
    >
      {/* Mandala watermark */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 800 400"
        style={{ opacity: 0.08 }}
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="400" cy="200" r="180" fill="none" stroke="#C9A84C" strokeWidth="2" />
        <circle cx="400" cy="200" r="130" fill="none" stroke="#C9A84C" strokeWidth="2" />
        <circle cx="400" cy="200" r="80" fill="none" stroke="#C9A84C" strokeWidth="1.5" />
        <circle cx="400" cy="200" r="40" fill="none" stroke="#C9A84C" strokeWidth="1" />
        {[...Array(16)].map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={400 + 40 * Math.cos(angle)}
              y1={200 + 40 * Math.sin(angle)}
              x2={400 + 180 * Math.cos(angle)}
              y2={200 + 180 * Math.sin(angle)}
              stroke="#C9A84C"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#FDF6E3",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
            }}
          >
            {time.passed ? "The Big Day Has Arrived! 🎊" : "The Big Day Is Almost Here!"}
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "15px", marginTop: 6 }}>
            20 April 2025 — Satna, MP
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <TimerBox value={time.days} label="DAYS" />
          <TimerBox value={time.hours} label="HOURS" />
          <TimerBox value={time.minutes} label="MINUTES" />
          <TimerBox value={time.seconds} label="SECONDS" />
        </div>

        <p
          className="italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#FDF6E3",
            fontSize: "18px",
            opacity: 0.9,
          }}
        >
          We can't wait to celebrate with you 🎊
        </p>
      </div>
    </section>
  );
}
