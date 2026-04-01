import { useState, useRef, useCallback } from "react";
import { Camera, Upload } from "lucide-react";

interface UploadedPhoto {
  id: number;
  url: string;
  caption: string;
}

export function GuestUpload() {
  const [dragging, setDragging] = useState(false);
  const [caption, setCaption] = useState("");
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFile(file);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleUpload = () => {
    if (!preview) return;
    setPhotos((prev) => [
      ...prev,
      { id: Date.now(), url: preview, caption: caption || "A beautiful memory 💛" },
    ]);
    setPreview(null);
    setCaption("");
  };

  return (
    <section
      id="upload"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "#FDF6E3" }}
    >
      {/* Gold confetti dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 4) * 3,
              height: 4 + (i % 4) * 3,
              background: "#C9A84C",
              opacity: 0.15,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#8B0000",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
            }}
          >
            Share Your Moments With Us 📸
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "#888", fontSize: "15px", marginTop: 6 }}>
            Upload your favorite memory from our special day!
          </p>
        </div>

        {/* Upload Box */}
        <div
          className="relative rounded-2xl flex flex-col items-center justify-center gap-4 py-14 px-6 cursor-pointer transition-all duration-300 mb-6"
          style={{
            border: `3px dashed ${dragging ? "#8B0000" : "#C9A84C"}`,
            background: dragging ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.7)",
            backdropFilter: "blur(4px)",
          }}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileRef.current?.click()}
        >
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="max-h-48 rounded-xl object-contain"
              style={{ boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}
            />
          ) : (
            <>
              <Camera size={48} style={{ color: "#C9A84C" }} />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#5C0000",
                  fontSize: "22px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Drag & Drop your photos here
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: "#888", fontSize: "13px", textAlign: "center" }}>
                or click to browse — JPG, PNG, HEIC supported
              </p>
            </>
          )}
        </div>

        {/* Caption field */}
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Add a little message with your photo... 💬"
          rows={2}
          className="w-full rounded-xl px-4 py-3 mb-4 outline-none resize-none transition-all duration-200"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "14px",
            color: "#444",
            border: "1.5px solid #C9A84C",
            background: "#fff",
          }}
          onClick={(e) => e.stopPropagation()}
          onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#8B0000")}
          onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#C9A84C")}
        />

        {/* Upload Button */}
        <div className="flex justify-center">
          <button
            onClick={handleUpload}
            disabled={!preview}
            className="px-10 py-4 rounded-full text-sm tracking-wider transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "'Lato', sans-serif",
              background: preview ? "#C9A84C" : "#ddd",
              color: preview ? "#3D0000" : "#999",
              border: "none",
              fontWeight: 700,
              letterSpacing: "0.08em",
              cursor: preview ? "pointer" : "not-allowed",
            }}
          >
            Upload & Share 💛
          </button>
        </div>

        {/* Guest photo grid */}
        {photos.length > 0 && (
          <div className="mt-12">
            <h3
              className="text-center mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#8B0000",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              Shared Memories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photos.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col gap-2"
                  style={{ border: "2px solid #C9A84C", borderRadius: 12, overflow: "hidden" }}
                >
                  <img
                    src={p.url}
                    alt={p.caption}
                    className="w-full h-32 object-cover"
                  />
                  <p
                    className="px-2 pb-2 italic"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    {p.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
