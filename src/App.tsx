import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageArrows from "./components/PageArrows";
import { PageTransitionProvider } from "./components/PageTransitionProvider";
import SplashScreen from "./components/SplashScreen";
import CustomCursor from "./components/CustomCursor";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactLenses from "./pages/ContactLenses";
import Frames from "./pages/Frames";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Lenses from "./pages/Lenses";
import MetaGlasses from "./pages/MetaGlasses";
import PrescriptionGlasses from "./pages/PrescriptionGlasses";
import Services from "./pages/Services";
import Sunglasses from "./pages/Sunglasses";
import VisitUs from "./pages/VisitUs";

export default function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(() => window.location.pathname === "/");

  useEffect(() => {
    if (showSplash) {
      const t = setTimeout(() => setShowSplash(false), 4000);
      return () => clearTimeout(t);
    }
  }, [showSplash]);

  return (
    <div className="min-h-screen bg-white text-von-ink">
      <PageTransitionProvider>
        <Navbar />
        <main key={location.pathname === "/" ? "/home" : location.pathname} className="route-page">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/frames" element={<Frames />} />
            <Route path="/sunglasses" element={<Sunglasses />} />
            <Route path="/prescription-glasses" element={<PrescriptionGlasses />} />
            <Route path="/lenses" element={<Lenses />} />
            <Route path="/contact-lenses" element={<ContactLenses />} />
            <Route path="/contact-lens" element={<ContactLenses />} />
            <Route path="/meta-glasses" element={<MetaGlasses />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/visit-us" element={<VisitUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <PageArrows />
        <Footer />
        <CustomCursor />
        {showSplash && <SplashScreen />}
      </PageTransitionProvider>
    </div>
  );
}
