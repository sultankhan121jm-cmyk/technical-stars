import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTopOnNavigate } from "./utils/scrollToTop";
import { LanguageProvider } from "./contexts/LanguageContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ACRepair from "./pages/services/ACRepair";
import ACInstallation from "./pages/services/ACInstallation";
import ACCleaning from "./pages/services/ACCleaning";
import WashingMachine from "./pages/services/WashingMachine";
import ACGasFilling from "./pages/services/ACGasFilling"; // You can keep this import name
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ac-repair" element={<ACRepair />} />
          <Route path="/services/ac-installation" element={<ACInstallation />} />
          <Route path="/services/ac-cleaning" element={<ACCleaning />} />
          <Route path="/services/washing-machine" element={<WashingMachine />} />

          {/* NEW ROUTE: Changed path to freon-charging */}
          <Route path="/services/freon-charging" element={<ACGasFilling />} />

          {/* REDIRECT: Old URL automatically redirects to the new URL */}
          <Route path="/services/ac-gas-filling" element={<Navigate to="/services/freon-charging" replace />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;