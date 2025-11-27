import ServicePage from "./ServicePage.jsx";

export default function PayrollService() {
  return (
    <ServicePage
      title="Payroll Processing Services"
      subtitle="Accurate and compliant payroll operations"
      overview="We ensure precise, timely payroll processing with compliance across federal and state regulations."
      capabilities={[
        "Multi-state payroll processing",
        "Salary & wage calculations",
        "Tax withholding & filing",
        "Benefits administration",
        "Garnishment processing",
        "Direct deposit management",
        "Year-end forms (W-2, 1099)",
        "Quarterly tax reports",
        "New hire reporting"
      ]}
      benefits={[
        { title: "Cost Savings", description: "Cut payroll processing costs by up to 50%." },
        { title: "Compliance", description: "Always stay compliant with federal and state regulations." },
        { title: "Scalability", description: "Easily scale your payroll operations." },
        { title: "Data Security", description: "Enterprise-grade security for sensitive data." }
      ]}
    />
  );
}
