export default function ProcessStep({ step, title, description, icon: Icon, isLast = false }) {
  return (
    <div className="relative flex flex-col items-center text-center">

      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: "var(--color-primary-blue)" }}
      >
        <Icon size={32} className="text-white" />
      </div>

      {!isLast && (
        <div
          className="hidden lg:block absolute top-10 left-1/2 w-full h-1"
          style={{ backgroundColor: "var(--color-accent-blue)", opacity: 0.3 }}
        />
      )}

      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: "var(--color-green)" }}
      >
        <span className="text-white text-xl">{step}</span>
      </div>

      <h4 className="mb-3">{title}</h4>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
}
