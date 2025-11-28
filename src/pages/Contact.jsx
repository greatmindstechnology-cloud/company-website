import { useState } from "react";
import Hero from "../components/Hero.jsx";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>

      <Hero title="Contact Us" subtitle="Get in touch with our team" />

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm mb-4">
              Contact Information
            </div>

            <h3 className="mb-6">Get In Touch</h3>

            <p className="text-lg text-gray-700 mb-12">
              Fill out the form or reach out using the contact details below.
            </p>

            <div className="space-y-8">

              <div className="flex space-x-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--color-green)" }}>
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="mb-2">Address</h5>
                  <p className="text-gray-600">2/518, Sundeep Avenue, 2nd Main Street, Nellangari, Chennai-600 155, Tamil Nadu, India<br />Serving US Businesses Nationwide</p>
                </div>
              </div>

              <div className="flex space-x-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--color-primary-blue)" }}>
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="mb-2">Phone</h5>
                  <p className="text-gray-600">+91 98410 98721</p>
                  <p className="text-gray-600">+91 73973 17174</p>
                </div>
              </div>

              <div className="flex space-x-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--color-accent-blue)" }}>
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="mb-2">Email</h5>
                  <p className="text-gray-600">rasheed@allstatetechnologies.net</p>
                </div>
              </div>

              <div className="flex space-x-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--color-green)" }}>
                  <Clock size={24} className="text-white" />
                </div>
                <div className="flex space-x-5">
  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--color-primary-blue)" }}>
    <MapPin size={24} className="text-white" />
  </div>
  <div>
    <h5 className="mb-2">GST Number</h5>
    <p className="text-gray-600">33AAYFA6879K1ZJ</p>
  </div>
</div>

<div className="flex space-x-5">
  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--color-accent-blue)" }}>
    <Mail size={24} className="text-white" />
  </div>
  <div>
    <h5 className="mb-2">Website</h5>
    <p className="text-gray-600">
      <a href="https://www.allstatetechnologies.net" target="_blank" rel="noopener noreferrer" className="underline">
        www.allstatetechnologies.net
      </a>
    </p>
  </div>
</div>

                <div>
                  <h5 className="mb-2">Operating Hours</h5>
                  <p className="text-gray-600">Mon-Fri: 9 AM – 6 PM EST</p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <div className="p-10 rounded-2xl bg-white border border-gray-100" style={{ boxShadow: "var(--shadow-large)" }}>

              <div className="inline-block px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm mb-4">
                Send Us a Message
              </div>

              <h3 className="mb-8">Request a Consultation</h3>

              {submitted ? (
                <div className="p-8 rounded-xl text-center bg-green-600 text-white">
                  <p>Thank you! We’ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {["name", "email", "company"].map((field) => (
                    <div key={field}>
                      <label className="block mb-3 text-sm">{field === "email" ? "Email Address *" : `${field.replace(/^\w/, c => c.toUpperCase())} *`}</label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        required
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block mb-3 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block mb-3 text-sm">Service Interest *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl"
                    >
                      <option value="">Select a service...</option>
                      <option value="payroll">Payroll Processing</option>
                      <option value="finance">Finance & Accounting</option>
                      <option value="hrms">HRMS Support</option>
                      <option value="licensing">Licensing & Coordination</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-3 text-sm">Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-5 rounded-xl text-white hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)" }}
                  >
                    Submit Message
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
