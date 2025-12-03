import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div>
            <div className="mb-4">
              <span className="text-xl" style={{ color: "var(--color-accent-blue)" }}>
                All State Technologies
              </span>
              <div className="text-sm mt-1" style={{ color: "var(--color-green)" }}>
                Contract Staffing Solutions
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Reliable contract staffing for US companies in payroll, finance, HRMS, and compliance operations.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80" style={{ color: "var(--color-accent-blue)" }}>
                <Linkedin size={20} />
              </a>

              <a href="#" className="hover:opacity-80" style={{ color: "var(--color-accent-blue)" }}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>

            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white">Industries</Link></li>
              <li><Link to="/process" className="text-gray-400 hover:text-white">Our Process</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>

            <ul className="space-y-2 text-sm">
              <li><Link to="/services/payroll" className="text-gray-400 hover:text-white">Payroll Processing</Link></li>
              <li><Link to="/services/finance" className="text-gray-400 hover:text-white">Finance & Accounting</Link></li>
              <li><Link to="/services/hrms" className="text-gray-400 hover:text-white">HRMS Support</Link></li>
              <li><Link to="/services/licensing" className="text-gray-400 hover:text-white">Licensing & Financial Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact Us</h4>

            <ul className="space-y-3 text-sm text-gray-400">

              <li className="flex items-start space-x-2">
  <span className="flex-shrink-0 w-5 h-5 mt-0.5" style={{ color: "var(--color-green)" }}>
    <MapPin size={20} />
  </span>
  <span className="text-sm">
    2/518, Sundeep Avenue, 2nd Main Street, Nellangari, Chennai - 600155, Tamil Nadu, India
  </span>
</li>


              <li className="flex items-center space-x-2">
                <Phone size={16} style={{ color: "var(--color-green)" }} />
                <span>+91 98410 98721</span>
              </li>

              <li className="flex items-center space-x-2">
                <Mail size={16} style={{ color: "var(--color-green)" }} />
                <span>rasheed@allstatetechnologies.net</span>
              </li>

            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 All State Technologies. All rights reserved.</p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Compliance</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
