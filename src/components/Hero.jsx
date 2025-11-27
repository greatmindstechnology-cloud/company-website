import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA, showIllustration = false }) {
  return (
    <section
      className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0047AB 0%, #003A91 100%)" }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="mb-6 text-white">{title}</h1>
            <p className="text-xl mb-10 text-white/90">{subtitle}</p>

            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4">

                {primaryCTA && (
                  <Link
                    to={primaryCTA.link}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-white hover:scale-105 hover:shadow-xl group"
                    style={{
                      backgroundColor: "var(--color-green)",
                      borderRadius: "var(--radius-button)",
                    }}
                  >
                    <span className="mr-2">{primaryCTA.text}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1" />
                  </Link>
                )}

                {secondaryCTA && (
                  <Link
                    to={secondaryCTA.link}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-900"
                    style={{ borderRadius: "var(--radius-button)" }}
                  >
                    {secondaryCTA.text}
                  </Link>
                )}

              </div>
            )}
          </div>

          {showIllustration && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  className="w-full max-w-lg h-[400px] rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 p-12"
                  style={{ borderRadius: "var(--radius-card)" }}
                >
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="w-40 h-40 mx-auto rounded-full flex items-center justify-center bg-white">
                        <span className="text-6xl" style={{ color: "var(--color-primary-blue)" }}>AST</span>
                      </div>
                    </div>

                    <p className="text-white text-lg">Professional Back-Office Solutions</p>
                    <p className="text-white/70 text-sm mt-2">Trusted by 200+ US Companies</p>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-500 opacity-20 blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-300 opacity-20 blur-xl animate-pulse" />
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
