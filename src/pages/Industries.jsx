import Hero from "../components/Hero.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { Building2, Heart, Hammer, TrendingUp, ShoppingBag, GraduationCap, Factory, Briefcase } from "lucide-react";

export default function Industries() {
  const industries = [
    { icon: Building2, name: "Professional Services", description: "Accounting, law, and consulting firms." },
    { icon: Heart, name: "Healthcare", description: "Clinics, medical practices, HIPAA-aware support." },
    { icon: Hammer, name: "Construction", description: "Contractors with complex payroll needs." },
    { icon: TrendingUp, name: "Financial Services", description: "Advisors, brokers, and finance operations." },
    { icon: ShoppingBag, name: "Retail & E-commerce", description: "Scalable back-office for retail brands." },
    { icon: GraduationCap, name: "Education", description: "Schools and training institutions." },
    { icon: Factory, name: "Manufacturing", description: "Factories with diverse workforce structures." },
    { icon: Briefcase, name: "Technology", description: "Tech startups and fast-growth SaaS companies." },
  ];

  const benefits = [
    { title: "Industry Expertise", description: "We understand sector-specific processes & compliance." },
    { title: "Compliance Knowledge", description: "Avoid penalties with accurate compliance workflows." },
    { title: "Scalable Solutions", description: "Scale your team as your operations grow." },
    { title: "Cost Optimization", description: "Cut operational expenses significantly." },
  ];

  return (
    <div>

      <Hero
        title="Industries We Serve"
        subtitle="Specialized back-office solutions across multiple sectors"
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="mb-4">Our Industry Focus</h2>
          <p className="text-lg text-gray-600">We serve multiple industries with customized offshore teams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-6 bg-white rounded-lg transition-all hover:-translate-y-2"
                style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(0,71,171,0.1)" }}>
                  <Icon size={28} style={{ color: "var(--color-primary-blue)" }} />
                </div>
                <h4 className="mb-3">{item.name}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "var(--color-light-grey)" }}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="mb-4">Industry-Specific Benefits</h2>
          <p className="text-lg text-gray-600">Why top businesses choose us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="p-8 bg-white rounded-lg" style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}>
              <h4 className="mb-3">{benefit.title}</h4>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Success Across Industries</h2>
          <p className="text-lg text-gray-700">
            We support businesses across the US with precision and reliability.
          </p>

          <div className="mt-12 p-8 rounded-lg" style={{ backgroundColor: "var(--color-light-grey)" }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-2" style={{ color: "var(--color-primary-blue)" }}>200+</div>
                <p className="text-gray-600">Clients Served</p>
              </div>

              <div>
                <div className="text-4xl mb-2" style={{ color: "var(--color-green)" }}>8</div>
                <p className="text-gray-600">Industries Covered</p>
              </div>

              <div>
                <div className="text-4xl mb-2" style={{ color: "var(--color-primary-blue)" }}>98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Operations?"
        description="Let’s discuss how we can support your industry needs."
        buttonText="Get Started"
        buttonLink="/contact"
      />

    </div>
  );
}
