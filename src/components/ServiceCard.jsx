import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, description, link }) {
  return (
    <Link to={link} className="group">
      <div
        className="p-8 rounded-2xl border border-gray-100 bg-white transition-all hover:-translate-y-3 relative overflow-hidden"
        style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}
      >

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">

          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3"
            style={{ background: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)" }}
          >
            <Icon size={32} className="text-white" />
          </div>

          <h4 className="mb-4 group-hover:text-blue-700">{title}</h4>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          <div className="flex items-center group-hover:text-green-600" style={{ color: "var(--color-primary-blue)" }}>
            <span>Learn More</span>
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
          </div>

        </div>
      </div>
    </Link>
  );
}
