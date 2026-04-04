import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryPhoto = {
  src: "/Media (6).jpg",
  alt: "Roshni & Deepak portrait",
};

export function PhotoGallery() {
  return (
    <section
      id="gallery"
      className="py-20 px-4"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
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
            All Our Wedding Moments 
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16" style={{ background: "#e94560", opacity: 0.5 }} />
            <svg width="14" height="14" viewBox="0 0 14 14">
              <polygon points="7,1 9,5 13,5 10,8 11,12 7,9 3,12 4,8 1,5 5,5" fill="#e94560" />
            </svg>
            <div className="h-px w-16" style={{ background: "#e94560", opacity: 0.5 }} />
          </div>
        </div>

        {/* Single photo */}
        <div className="max-w-2xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl transition-all duration-300 group"
            style={{
              border: "2px solid #e94560",
              boxShadow: "0 4px 20px rgba(233,69,96,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(233,69,96,0.25)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(233,69,96,0.1)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <ImageWithFallback
              src={galleryPhoto.src}
              alt={galleryPhoto.alt}
              className="w-full block"
            />
            {/* Overlay on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              style={{ background: "linear-gradient(to top, rgba(233,69,96,0.9), transparent)" }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#ffffff",
                  fontSize: "16px",
                }}
              >
                {galleryPhoto.alt}
              </p>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <a
            href="https://drive.google.com/drive/folders/1AQqz0KTreeqjYh4TqlFpJ9BrsOO5XhVI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full text-base tracking-wider transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "#e94560",
              color: "#ffffff",
              border: "none",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            📁 View All Photos
          </a>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#636e72",
              fontSize: "16px",
            }}
          >
            All wedding photos will be uploaded here — accessible to all guests 💛
          </p>
        </div>
      </div>
    </section>
  );
}
