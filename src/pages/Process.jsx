import Hero from "../components/Hero.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { Search, UserCheck, Settings, TrendingUp, MessageSquare, Users, FileCheck, Zap } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Requirement Analysis",
      description: "We evaluate your operations and align expectations.",
      details: [
        "Initial consultation",
        "Process assessment",
        "Documentation review",
        "Deliverable planning"
      ],
    },
    {
      number: 2,
      icon: UserCheck,
      title: "Talent Selection",
      description: "We select skilled professionals tailored to your process.",
      details: [
        "Candidate screening",
        "Skills verification",
        "Custom process training",
        "Quality check"
      ],
    },
    {
      number: 3,
      icon: Settings,
      title: "Integration & Setup",
      description: "We integrate smoothly with your tools and workflows.",
      details: [
        "Tool access setup",
        "Software integration",
        "SOP documentation",
        "Trial period"
      ],
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Delivery & Optimization",
      description: "Your remote team is managed, optimized, and monitored.",
      details: [
        "Daily operations",
        "Performance tracking",
        "Process improvements",
        "Account management"
      ],
    },
  ];

  return (
    <div>

      <Hero title="Our Proven Process" subtitle="A systematic approach to seamless integration" />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">

                <div className={`${isEven ? "lg:order-1" : "lg:order-2"} flex justify-center`}>
                  <div className="relative">
                    <div
                      className="w-48 h-48 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-light-grey)", boxShadow: "var(--shadow-card)" }}
                    >
                      <Icon size={80} style={{ color: "var(--color-primary-blue)" }} />
                    </div>

                    <div
                      className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-green)" }}
                    >
                      <span className="text-white text-3xl">{step.number}</span>
                    </div>
                  </div>
                </div>

                <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <h3 className="mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{step.description}</p>

                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: "rgba(76,175,80,0.2)" }}>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-green)" }} />
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "var(--color-light-grey)" }}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="mb-4">Onboarding Timeline</h2>
          <p className="text-lg text-gray-600">A fast, structured onboarding process.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div>
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-primary-blue)" }}>
              <MessageSquare size={32} className="text-white" />
            </div>
            <h5 className="mb-2">Week 1</h5>
            <p className="text-gray-600 text-sm">Discovery & Planning</p>
          </div>

          <div>
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-primary-blue)" }}>
              <Users size={32} className="text-white" />
            </div>
            <h5 className="mb-2">Week 2-3</h5>
            <p className="text-gray-600 text-sm">Team Selection & Training</p>
          </div>

          <div>
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-primary-blue)" }}>
              <FileCheck size={32} className="text-white" />
            </div>
            <h5 className="mb-2">Week 4</h5>
            <p className="text-gray-600 text-sm">System Integration</p>
          </div>

          <div>
            <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-green)" }}>
              <Zap size={32} className="text-white" />
            </div>
            <h5 className="mb-2">Week 5+</h5>
            <p className="text-gray-600 text-sm">Go Live</p>
          </div>

        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Journey?"
        description="Let's discuss your requirements and build a custom solution."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />

    </div>
  );
}
