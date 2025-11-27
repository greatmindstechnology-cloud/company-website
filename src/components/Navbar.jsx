import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Hover close timer
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsServicesOpen(true);
  };

  const handleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 400); // Delay to prevent flicker
  };

  const services = [
    { name: "Payroll Processing", path: "/services/payroll" },
    { name: "Finance & Accounting", path: "/services/finance" },
    { name: "HRMS Support", path: "/services/hrms" },
    { name: "Licensing & Financial Coordination", path: "/services/licensing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white shadow-lg border-gray-100"
          : "bg-white border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link to="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #0047AB 0%, #003A91 100%)",
                }}
              >
                <span className="text-white text-lg">AST</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xl tracking-tight"
                  style={{ color: "var(--color-primary-blue)" }}
                >
                  All State Technologies
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--color-green)" }}
                >
                  Contract Staffing Solutions
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {["/", "/about", "/industries", "/process", "/contact"].map(
              (route, index) => {
                const labels = [
                  "Home",
                  "About",
                  "Industries",
                  "Process",
                  "Contact",
                ];
                return (
                  <Link
                    key={route}
                    to={route}
                    className={`relative hover:opacity-80 transition-opacity ${
                      location.pathname === route ? "font-medium" : ""
                    }`}
                    style={{
                      color:
                        location.pathname === route
                          ? "var(--color-primary-blue)"
                          : "var(--color-text-grey)",
                    }}
                  >
                    {labels[index]}
                    {location.pathname === route && (
                      <div
                        className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: "var(--color-green)" }}
                      />
                    )}
                  </Link>
                );
              }
            )}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
            >
              <button
                className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
                style={{
                  color: location.pathname.startsWith("/services")
                    ? "var(--color-primary-blue)"
                    : "var(--color-text-grey)",
                }}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-4 w-72 bg-white rounded-2xl py-3 border border-gray-100"
                  style={{
                    boxShadow: "var(--shadow-large)",
                    borderRadius: "var(--radius-card)",
                  }}
                >
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-6 py-3 hover:bg-blue-50 text-sm"
                      style={{ color: "var(--color-text-grey)" }}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg text-white hover:scale-105 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)",
              }}
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2">About</Link>

              <span className="px-4 py-2 font-medium">Services</span>
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="pl-8 pr-4 py-2 text-sm hover:bg-gray-50"
                >
                  {s.name}
                </Link>
              ))}

              <Link to="/industries" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2">Industries</Link>
              <Link to="/process" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2">Process</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2">Contact</Link>

              <Link
                to="/contact"
                className="mx-4 px-6 py-3 rounded-lg text-white text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
