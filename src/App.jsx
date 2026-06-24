import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTopOnNavigate } from "./utils/scrollToTop";

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
import Maintenance from "./pages/services/Maintenance";
import VentCleaning from "./pages/services/VentCleaning";
import Dismantlement from "./pages/services/Dismantlement";
import Electricity from "./pages/services/Electricity";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ac-repair" element={<ACRepair />} />
        <Route path="/services/ac-installation" element={<ACInstallation />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/vent-cleaning" element={<VentCleaning />} />
        <Route path="/services/dismantlement" element={<Dismantlement />} />
        <Route path="/services/electricity" element={<Electricity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;