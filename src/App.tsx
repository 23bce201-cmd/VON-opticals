import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageArrows from "./components/PageArrows";
import { PageTransitionProvider } from "./components/PageTransitionProvider";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactLenses from "./pages/ContactLenses";
import Frames from "./pages/Frames";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Lenses from "./pages/Lenses";
import MetaGlasses from "./pages/MetaGlasses";
import PrescriptionGlasses from "./pages/PrescriptionGlasses";
import Services from "./pages/Services";
import Sunglasses from "./pages/Sunglasses";
import VisitUs from "./pages/VisitUs";

export default function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white text-von-ink">
      <PageTransitionProvider>
        {!isLanding && <Navbar />}
        <main key={location.pathname} className={isLanding ? "" : "route-page"}>
          <Routes>
            <Route path="/" element={<Landing />} />
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
        {!isLanding && <PageArrows />}
        {!isLanding && <Footer />}
      </PageTransitionProvider>
    </div>
  );
}
