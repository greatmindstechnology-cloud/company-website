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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false); // reset success if user edits again
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://www.allstatetechnologies.net/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || "Failed to send");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      alert("Message not sent. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Hero title="Contact Us" subtitle="Get in touch with our team" />

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm mb-4">
              Contact Information
            </div>

            <h3 className="mb-6">Get In Touch</h3>

            <p className="text-lg text-gray-700 mb-12">
              Fill out the form or reach out using the contact details below.
            </p>

            <div className="space-y-8">
              <Info
                icon={<MapPin size={24} />}
                title="Address"
                text={
                  <>
                    2/518, Sundeep Avenue, 2nd Main Street, Nellangari,
                    Chennai-600155, Tamil Nadu, India
                    <br />
                    Serving US Businesses Nationwide
                  </>
                }
                color="var(--color-green)"
              />

              <Info
                icon={<Phone size={24} />}
                title="Phone"
                text={
                  <>
                    +91 98410 98721
                    <br />
                    +91 73973 17174
                  </>
                }
                color="var(--color-primary-blue)"
              />

              <Info
                icon={<Mail size={24} />}
                title="Email"
                text="rasheed@allstatetechnologies.net"
                color="var(--color-accent-blue)"
              />

              <Info
                icon={<MapPin size={24} />}
                title="GST Number"
                text="33AAYFA6879K1ZJ"
                color="var(--color-primary-blue)"
              />

              <Info
                icon={<Clock size={24} />}
                title="Operating Hours"
                text="Mon–Fri: 9 AM – 6 PM EST"
                color="var(--color-green)"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div
              className="p-10 rounded-2xl bg-white border border-gray-100"
              style={{ boxShadow: "var(--shadow-large)" }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm mb-4">
                Send Us a Message
              </div>

              <h3 className="mb-8">Request a Consultation</h3>

              {submitted ? (
                <div className="p-8 rounded-xl text-center bg-green-600 text-white">
                  Thank you! We’ll get back to you within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {["name", "email", "company"].map((field) => (
                    <div key={field}>
                      <label className="block mb-3 text-sm">
                        {field === "email"
                          ? "Email Address *"
                          : `${field.charAt(0).toUpperCase()}${field.slice(1)} *`}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        required
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl"
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
                    <label className="block mb-3 text-sm">
                      Service Interest *
                    </label>
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
                      <option value="licensing">
                        Licensing & Coordination
                      </option>
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
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-5 rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)",
                    }}
                  >
                    {loading ? "Sending..." : "Submit Message"}
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

/* Reusable Info Component */
function Info({ icon, title, text, color }) {
  return (
    <div className="flex space-x-5">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div>
        <h5 className="mb-2">{title}</h5>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}
