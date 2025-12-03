import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import CTABanner from "../components/CTABanner.jsx";

import {
  DollarSign,
  Calculator,
  Users,
  FileText,
  Search,
  UserCheck,
  Settings,
  TrendingUp
} from "lucide-react";

export default function Home() {
  const processSteps = [
    { step: 1, icon: Search, title: "Requirement Analysis", description: "We understand your business needs, processes, and goals in detail." },
    { step: 2, icon: UserCheck, title: "Talent Selection & Training", description: "Handpicked professionals trained specifically for your requirements." },
    { step: 3, icon: Settings, title: "Integration & Setup", description: "Smooth onboarding with your systems, tools, and workflows." },
    { step: 4, icon: TrendingUp, title: "Ongoing Delivery & Optimization", description: "Continuous support with regular reviews and performance optimization." },
  ];

  return (
    <div>

      <Hero
        title="Transform Your Business with Skilled Back-Office Teams from India"
        subtitle="Reliable contract staffing for US companies in payroll, finance, HRMS, and compliance operations."
        primaryCTA={{ text: "Get a Free Consultation", link: "/contact" }}
        secondaryCTA={{ text: "Explore Services", link: "/services/payroll" }}
        showIllustration
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm mb-4">Our Services</div>
          <h2 className="mb-6">Comprehensive Back-Office Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored staffing solutions designed specifically for US businesses seeking reliable and cost-effective support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard icon={DollarSign} title="Payroll Processing" description="End-to-end payroll management with accuracy and compliance." link="/services/payroll" />
          <ServiceCard icon={Calculator} title="Finance & Accounting" description="Complete accounting support from bookkeeping to financial reporting." link="/services/finance" />
          <ServiceCard icon={Users} title="HRMS Support" description="Comprehensive HR operations and lifecycle management." link="/services/hrms" />
          <ServiceCard icon={FileText} title="Licensing & Financial Coordination" description="Manage licenses, renewals, and financial coordination seamlessly." link="/services/licensing" />
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "var(--color-light-grey)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div className="p-8">
            <div className="text-5xl mb-4" style={{ color: "var(--color-primary-blue)" }}>200+</div>
            <h5 className="mb-2">Clients Served</h5>
            <p className="text-gray-600">Trusted by businesses internationally</p>
          </div>

          <div className="p-8">
            <div className="text-5xl mb-4" style={{ color: "var(--color-green)" }}>98%</div>
            <h5 className="mb-2">Client Satisfaction</h5>
            <p className="text-gray-600">Consistently exceeding expectations</p>
          </div>

          <div className="p-8">
            <div className="text-5xl mb-4" style={{ color: "var(--color-primary-blue)" }}>60%</div>
            <h5 className="mb-2">Cost Savings</h5>
            <p className="text-gray-600">Average reduction in operational costs</p>
          </div>

        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm mb-4">Our Process</div>
          <h2 className="mb-6">4-Step Seamless Integration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A proven approach to deliver exceptional results from day one.
          </p>
        </div>

        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--color-light-grey)" }}>
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="mb-6">Why Choose All State Technologies?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">The advantages that set us apart.</p>
        </div>
        {/* You already have benefit cards in your components if needed */}
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm mb-4">Testimonials</div>
          <h2 className="mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard quote="All State Technologies transformed our payroll processing." author="Sarah Johnson" position="CFO" company="TechStart Inc." />
          <TestimonialCard quote="Their accounting team improved our reporting accuracy." author="Michael Chen" position="Controller" company="GreenLeaf Solutions" />
          <TestimonialCard quote="Their HRMS support team integrated seamlessly." author="Emily Rodriguez" position="HR Director" company="MidWest Manufacturing" />
        </div>
      </section>

      <CTABanner
        title="Ready to build your offshore team?"
        description="Let's discuss how we can support your business with skilled professionals from India."
        buttonText="Book Free Consultation"
        buttonLink="/contact"
      />

    </div>
  );
}
