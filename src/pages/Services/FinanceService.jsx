import ServicePage from "./ServicePage.jsx";

export default function FinanceService() {
  return (
    <ServicePage
      title="Finance & Accounting Services"
      subtitle="Complete accounting and financial support"
      overview="We provide expert financial operations from bookkeeping to reporting."
      capabilities={[
        "Accounts payable & receivable",
        "General ledger maintenance",
        "Bank reconciliation",
        "Financial statements",
        "Month-end closing",
        "Budget analysis",
        "Cashflow tracking",
        "Expense reporting",
        "Vendor management"
      ]}
      benefits={[
        { title: "Improved Accuracy", description: "Reduce errors with dedicated accounting professionals." },
        { title: "Real-time Insights", description: "Get clear visibility into your financial performance." },
        { title: "Flexible Talent", description: "Access experts without hiring full-time staff." },
        { title: "Faster Close Cycles", description: "Accelerate month-end and year-end processes." }
      ]}
    />
  );
}
