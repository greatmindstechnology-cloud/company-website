import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, author, position, company }) {
  return (
    <div
      className="p-8 rounded-2xl bg-white h-full flex flex-col relative overflow-hidden group border border-gray-100 transition-all hover:-translate-y-2"
      style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--shadow-card)" }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500" />

      <div className="relative z-10">

        <div className="mb-4 flex justify-between items-start">
          <Quote size={48} className="opacity-30" style={{ color: "var(--color-green)" }} />

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--color-green)" }}>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{quote}"</p>

        <div className="border-t pt-6">
          <p className="mb-1" style={{ color: "var(--color-dark-blue)" }}>{author}</p>
          <p className="text-sm text-gray-600 mb-1">{position}</p>
          <p className="text-sm" style={{ color: "var(--color-green)" }}>{company}</p>
        </div>

      </div>
    </div>
  );
}
