import ServicePage from "./ServicePage.jsx";

export default function HRMSService() {
  return (
    <ServicePage
      title="HRMS Support Services"
      subtitle="Complete employee lifecycle management"
      overview="We manage employee data, onboarding, benefits, compliance, and HR systems."
      capabilities={[
        "HRMS administration",
        "Onboarding & offboarding",
        "Employee data management",
        "Benefits enrollment",
        "Time & attendance tracking",
        "Leave management",
        "Performance review coordination",
        "I-9 verification support",
        "Policy updates"
      ]}
      benefits={[
        { title: "Efficiency", description: "Streamlined HR processes with minimal admin load." },
        { title: "Better Experience", description: "Improve employee satisfaction with quick HR support." },
        { title: "Compliance", description: "Stay compliant with employment regulations." },
        { title: "Data Accuracy", description: "Maintain clean HR data through consistent processes." }
      ]}
    />
  );
}
