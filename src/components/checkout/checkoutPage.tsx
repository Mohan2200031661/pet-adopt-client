import { StripeComponent } from "./stripeComponent";
import config from "../../../config";
export const CheckoutPage = () => {
  return (
    <div className="container mx-auto px-4">
      <StripeComponent />
    </div>
  );
};
