import Hero from "../../components/Hero.jsx";
import CTABanner from "../../components/CTABanner.jsx";
import { CheckCircle } from "lucide-react";

export default function ServicePage({ title, subtitle, overview, capabilities, benefits }) {
  return (
    <div>

      <Hero title={title} subtitle={subtitle} />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="mb-6 text-center">Overview</h3>
          <p className="text-lg text-gray-700">{overview}</p>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "var(--color-light-grey)" }}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center mb-12">Our Capabilities</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-6 bg-white flex space-x-3 items-start rounded-lg"
                style={{ boxShadow: "var(--shadow-card)", borderRadius: "var(--radius-card)" }}
              >
                <CheckCircle size={24} style={{ color: "var(--color-green)" }} />
                <span className="text-gray-700">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center mb-10">Key Benefits</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-lg"
                style={{ backgroundColor: "var(--color-light-grey)", borderRadius: "var(--radius-card)" }}
              >
                <h4 className="mb-3">{benefit.title}</h4>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        description="Let’s discuss how our team can support your needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

    </div>
  );
}
