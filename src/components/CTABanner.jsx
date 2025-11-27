import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABanner({ title, description, buttonText, buttonLink }) {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0047AB 0%, #2E7D32 100%)" }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-white mb-6">{title}</h2>

        {description && (
          <p className="text-white/90 text-xl mb-10 leading-relaxed">
            {description}
          </p>
        )}

        <Link
          to={buttonLink}
          className="inline-flex items-center px-10 py-5 rounded-lg text-blue-900 transition-all hover:scale-105 hover:shadow-2xl group bg-white"
          style={{ borderRadius: "var(--radius-button)" }}
        >
          <span className="mr-2">{buttonText}</span>
          <ArrowRight className="transition-transform group-hover:translate-x-2" size={20} />
        </Link>
      </div>
    </section>
  );
}
