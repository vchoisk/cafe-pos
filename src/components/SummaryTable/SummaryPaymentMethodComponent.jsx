import React from "react";
import SummrayTotal from "./SummaryTotalComponent.jsx";

const SummaryPaymentMethodComponent = props => {
  return (
    <div className="summary-payment-method">
      <div className="summary-payment-method">Summary-coupon</div>
      <SummrayTotal label="총 합계" applyCoupon applyCashDiscount />
    </div>
  );
};

export default SummaryPaymentMethodComponent;
