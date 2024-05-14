import { Card } from "./../../Components";

export const CardPriceContainer = () => {
  return (
    <div className="grid gap-8">
      <Card
        backgroud="bg-white"
        title="Basic"
        offert="Free"
        expecificationOffert="Up to 5 users for free"
        details={[
          "Basic document collaboration",
          "2 GB storage",
          "Great security and support",
        ]}
      />
      <Card
        backgroud="bg-brandeis-blue"
        title="Pro"
        offert="$9.99"
        expecificationOffert="Per user, billed monthly"
        details={[
          "All essential integrations",
          "50 GB storage",
          "More control and insights",
        ]}
      />
      <Card
        backgroud="bg-white"
        title="Ultimate"
        offert="$19.99"
        expecificationOffert="Per user, billed monthly"
        details={["Robust work management", "100 GB storage", "VIP support"]}
      />
    </div>
  );
};
