import { ImageWithFallback } from "./figma/ImageWithFallback";

const hotels = [
  {
    name: "Hotel Chandela",
    distance: "2.5 km away",
    price: "₹1,500 – ₹3,000/night",
    img: "https://images.unsplash.com/photo-1723108263618-5364ae353220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    maps: "https://maps.google.com/?q=Hotel+Chandela+Satna",
  },
  {
    name: "Hotel Clarks Inn",
    distance: "3 km away",
    price: "₹2,000 – ₹4,000/night",
    img: "https://images.unsplash.com/photo-1641803188474-f6e23844b98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    maps: "https://maps.google.com/?q=Hotel+Clarks+Inn+Satna",
  },
  {
    name: "OYO Satna",
    distance: "1.8 km away",
    price: "₹800 – ₹1,500/night",
    img: "https://images.unsplash.com/photo-1763650859389-4e8700b47f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    maps: "https://maps.google.com/?q=OYO+Satna",
  },
  {
    name: "Hotel Amar Palace",
    distance: "4 km away",
    price: "₹1,200 – ₹2,500/night",
    img: "https://images.unsplash.com/photo-1634310964837-98acd70c9cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    maps: "https://maps.google.com/?q=Hotel+Amar+Palace+Satna",
  },
];

export function HotelsSection() {
  return (
    <section
      id="hotels"
      className="py-20 px-4"
      style={{ background: "#FDF6E3" }}
    >
      <div className="max-w-6xl mx-auto">
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
            Where to Stay in Satna
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "#888", fontSize: "15px", marginTop: 6 }}>
            We've curated the best nearby stays for you
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16" style={{ background: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontSize: "18px" }}>🏨</span>
            <div className="h-px w-16" style={{ background: "#C9A84C" }} />
          </div>
        </div>

        {/* Grid 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {hotels.map((hotel, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: "#fff",
                border: "1px solid #C9A84C",
                boxShadow: "0 4px 20px rgba(201,168,76,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(201,168,76,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.12)";
              }}
            >
              {/* Hotel image */}
              <div className="relative h-[180px] overflow-hidden">
                <ImageWithFallback
                  src={hotel.img}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                {/* Distance badge */}
                <div
                  className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(61,0,0,0.85)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span style={{ fontSize: "12px" }}>📍</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: "#E8C97A", fontSize: "12px" }}>
                    {hotel.distance}
                  </span>
                </div>
                {/* Price badge */}
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full"
                  style={{ background: "#2E7D32", color: "#fff" }}
                >
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "11px", fontWeight: 700 }}>
                    {hotel.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4">
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: "#8B0000",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {hotel.name}
                </h3>

                {/* Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => alert("Booking redirect — add real hotel booking link here!")}
                    className="flex-1 py-2.5 rounded-xl text-sm transition-all duration-200 hover:scale-105"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      background: "#8B0000",
                      color: "#FDF6E3",
                      border: "none",
                      fontWeight: 700,
                    }}
                  >
                    Book Now →
                  </button>
                  <a
                    href={hotel.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl text-sm text-center transition-all duration-200 hover:scale-105"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      background: "transparent",
                      color: "#C9A84C",
                      border: "2px solid #C9A84C",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 4,
                    }}
                  >
                    📍 Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
