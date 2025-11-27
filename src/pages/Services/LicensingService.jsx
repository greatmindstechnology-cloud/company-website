import ServicePage from "./ServicePage.jsx";

export default function LicensingService() {
  return (
    <ServicePage
      title="Licensing & Financial Coordination"
      subtitle="Seamless license renewals and compliance management"
      overview="We track, renew, and maintain all your business licenses and financial coordination tasks."
      capabilities={[
        "License tracking & renewals",
        "Certification management",
        "Compliance monitoring",
        "Deadline tracking",
        "Application processing",
        "Fee payment coordination",
        "Documentation management",
        "Vendor license verification",
        "Contract renewal management"
      ]}
      benefits={[
        { title: "Never Miss Deadlines", description: "Renewals are handled proactively with alerts." },
        { title: "Centralized Management", description: "All licenses stored in one organized system." },
        { title: "Reduced Workload", description: "Free your team from administrative overhead." },
        { title: "Cost Control", description: "Plan license expenses with predictable tracking." }
      ]}
    />
  );
}
