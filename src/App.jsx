import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ACRepair from "./services/ACRepair";
import ACInstallation from "./services/ACInstallation";
import ACCleaning from "./services/ACCleaning";
import WashingMachine from "./services/WashingMachine";
import Plumbing from "./services/Plumbing";
import Electricity from "./services/Electricity";

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
          <Route path="/services/plumbing" element={<Plumbing />} />
          <Route path="/services/electricity" element={<Electricity />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;