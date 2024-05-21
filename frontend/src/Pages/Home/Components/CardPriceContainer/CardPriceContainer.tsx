import { Card } from "./../../Components";
import { Button } from "./../../../../Components";

export const CardPriceContainer = () => {
  return (
    <div className="grid content-center gap-8">
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
      >
        <Button
          backgroud="bg-royal-blue-opacity"
          children="Try for Free"
          textColor="text-brandeis-blue"
          to="/sign-up"
        />
      </Card>
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
      >
        <Button
          backgroud="bg-white"
          children="Try for Free"
          textColor="text-brandeis-blue"
          to="/sign-up"
        />
      </Card>
      <Card
        backgroud="bg-white"
        title="Ultimate"
        offert="$19.99"
        expecificationOffert="Per user, billed monthly"
        details={["Robust work management", "100 GB storage", "VIP support"]}
      >
        <Button
          backgroud="bg-royal-blue-opacity"
          children="Try for Free"
          textColor="text-brandeis-blue"
          to="/sign-up"
        />
      </Card>
    </div>
  );
};
