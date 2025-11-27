import Hero from "../components/Hero.jsx";
import CTABanner from "../components/CTABanner.jsx";
import { Target, Eye, Globe, TrendingUp, Users, Shield, Award, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div>

      <Hero
        title="About All State Technologies"
        subtitle="Your trusted partner in contract staffing solutions."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            All State Technologies is a leading contract staffing provider specializing in back-office
            operations for US businesses.
          </p>

          <p className="text-lg mt-4 text-gray-700 leading-relaxed">
            We support payroll processing, finance & accounting, HRMS support, and licensing coordination.
          </p>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "var(--color-light-grey)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="p-8 bg-white rounded-lg" style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}>
            <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-lg" style={{ backgroundColor: "rgba(0,71,171,0.1)" }}>
              <Target size={32} style={{ color: "var(--color-primary-blue)" }} />
            </div>
            <h3 className="mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To empower US businesses with reliable, skilled, and cost-effective staffing solutions.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg" style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}>
            <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-lg" style={{ backgroundColor: "rgba(76,175,80,0.1)" }}>
              <Eye size={32} style={{ color: "var(--color-green)" }} />
            </div>
            <h3 className="mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted contract staffing partner for US businesses.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="mb-4">Why India?</h2>
          <p className="text-lg text-gray-600">India provides unmatched advantages for back-office operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "English Proficiency" },
            { icon: TrendingUp, title: "Cost Efficiency" },
            { icon: Users, title: "Skilled Talent Pool" },
            { icon: Award, title: "Quality Education" },
            { icon: Shield, title: "Time Zone Advantage" },
            { icon: CheckCircle, title: "Proven Track Record" },
          ].map((item, i) => (
            <div key={i} className="flex space-x-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(0,71,171,0.1)" }}>
                <item.icon size={24} style={{ color: "var(--color-green)" }} />
              </div>
              <div>
                <h5 className="mb-2">{item.title}</h5>
                <p className="text-gray-600 text-sm">India is known for strong work ethic, skills, and global collaboration.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Partner with Us Today"
        description="Discover how All State Technologies can transform your operations."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />

    </div>
  );
}
