import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { InvitationCard } from "./components/InvitationCard";
import { CountdownTimer } from "./components/CountdownTimer";
import { OurStory } from "./components/OurStory";
import { EventsSection } from "./components/EventsSection";

import { PhotoGallery } from "./components/PhotoGallery";
import { VenueMap } from "./components/VenueMap";

import { WishesWall } from "./components/WishesWall";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Lato', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <InvitationCard />
        <CountdownTimer />
        <OurStory />
        <EventsSection />

        <PhotoGallery />
        <VenueMap />

        <WishesWall />
      </main>
      <Footer />
    </div>
  );
}
