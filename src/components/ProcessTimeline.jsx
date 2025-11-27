export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative">

      <div
        className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-green-300"
        style={{ width: "calc(100% - 8rem)", marginLeft: "4rem" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={index} className="relative flex flex-col items-center text-center group">

              <div className="relative z-10 mb-6">
                <div
                  className="w-32 h-32 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 bg-white"
                  style={{
                    boxShadow: "var(--shadow-card)",
                    background: "linear-gradient(135deg, #0047AB 0%, #003A91 100%)"
                  }}
                >
                  <Icon size={48} className="text-white" />
                </div>

                <div
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "var(--color-green)" }}
                >
                  <span className="text-white text-lg">0{step.step}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3 group-hover:text-blue-700">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
