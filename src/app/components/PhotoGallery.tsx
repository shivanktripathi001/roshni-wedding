import { ImageWithFallback } from "./figma/ImageWithFallback";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1767333586238-5fe2e8e62b0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Roshni & Deepak portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1560505605-f300b17028d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Wedding decoration",
  },
  {
    src: "https://images.unsplash.com/photo-1562508548-69377b81ab9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Mehendi ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1640745676611-bee05627a23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Sangeet celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1770387688474-9fbdc55ddbb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Wedding ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1555447405-057915b40299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Baraat procession",
  },
  {
    src: "https://images.unsplash.com/photo-1634310964837-98acd70c9cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Reception evening",
  },
  {
    src: "https://images.unsplash.com/photo-1751615072331-7d6e8faa934d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Couple romantic moment",
  },
  {
    src: "https://images.unsplash.com/photo-1723108263618-5364ae353220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    alt: "Venue decoration",
  },
];

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
              fontFamily: "'Cormorant Garamond', serif",
              color: "#2d3436",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
            }}
          >
            Our Moments Together
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16" style={{ background: "#e94560", opacity: 0.5 }} />
            <svg width="14" height="14" viewBox="0 0 14 14">
              <polygon points="7,1 9,5 13,5 10,8 11,12 7,9 3,12 4,8 1,5 5,5" fill="#e94560" />
            </svg>
            <div className="h-px w-16" style={{ background: "#e94560", opacity: 0.5 }} />
          </div>
        </div>

        {/* Masonry gallery */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3 }}>
          <Masonry gutter="16px">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
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
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full block"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(233,69,96,0.9), transparent)" }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "#ffffff",
                      fontSize: "16px",
                      fontStyle: "italic",
                    }}
                  >
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* View All Button */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <a
            href="https://drive.google.com/drive/folders/1AQqz0KTreeqjYh4TqlFpJ9BrsOO5XhVI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full text-base tracking-wider transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: "#e94560",
              color: "#ffffff",
              border: "none",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            📁 View All Photos on Google Drive
          </a>
          <p
            className="italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
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
