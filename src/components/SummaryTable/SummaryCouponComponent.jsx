import React from "react";
import { Subscribe } from "unstated";
import SummrayTotal from "./SummaryTotalComponent.jsx";
import { CouponStore } from "../../stores";

const SummaryCouponComponent = props => {
  return (
    <Subscribe to={[CouponStore]}>
      {couponStore => (
        <div className="summary-coupon">
          <div className="summary-coupon">Summary-coupon</div>
          <SummrayTotal label="쿠폰적용 합계" applyCoupon />
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryCouponComponent;
