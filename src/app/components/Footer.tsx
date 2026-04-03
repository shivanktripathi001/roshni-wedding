const WA_URL = "https://wa.me/?text=You're+invited+to+Roshni+%26+Deepak's+Wedding!+🎊+Check+details+here:+[website-link]";

export function Footer() {
  return (
    <footer
      className="py-14 px-4 flex flex-col items-center gap-6 text-center"
      style={{ background: "#2d3436" }}
    >
      {/* Main title */}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#e94560",
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        Roshni ♥ Deepak
      </h2>

      {/* Date & venue */}
      <p style={{ fontFamily: "'Lato', sans-serif", color: "#ff6b88", fontSize: "14px", letterSpacing: "0.1em" }}>
        20 April 2026 · Sanskar Garden, Pateri
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-sm justify-center">
        <div className="h-px flex-1" style={{ background: "#e94560", opacity: 0.3 }} />
        <svg width="16" height="16" viewBox="0 0 16 16">
          <polygon points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6" fill="#e94560" opacity="0.7" />
        </svg>
        <div className="h-px flex-1" style={{ background: "#e94560", opacity: 0.3 }} />
      </div>

      {/* Social icons row */}
      <div className="flex items-center gap-6">
        {/* WhatsApp */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: "#25D366" }}
          title="Share on WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 28 28" fill="white">
            <path d="M14 2C7.373 2 2 7.373 2 14c0 2.15.56 4.17 1.54 5.92L2 26l4.24-1.51A11.94 11.94 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z" />
            <path
              d="M19.5 16.6c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.19 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.19-.57-.34z"
              fill="#25D366"
            />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
          }}
          title="Instagram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="#"
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: "#1877F2" }}
          title="Facebook"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: "12px", letterSpacing: "0.05em" }}>
        Made with ❤️ for our special day · © 2026 Roshni & Deepak
      </p>
    </footer>
  );
}
