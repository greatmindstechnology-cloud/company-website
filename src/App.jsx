import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Industries from "./pages/Industries.jsx";
import Process from "./pages/Process.jsx";

import PayrollService from "./pages/Services/PayrollService.jsx";
import FinanceService from "./pages/Services/FinanceService.jsx";
import HRMSService from "./pages/Services/HRMSService.jsx";
import LicensingService from "./pages/Services/LicensingService.jsx";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
             <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Services */}
            <Route path="/services/payroll" element={<PayrollService />} />
            <Route path="/services/finance" element={<FinanceService />} />
            <Route path="/services/hrms" element={<HRMSService />} />
            <Route path="/services/licensing" element={<LicensingService />} />

            <Route path="/industries" element={<Industries />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
