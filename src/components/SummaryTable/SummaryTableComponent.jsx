import React from "react";
import "../../stylesheets/SummaryTable.css";

import SummaryMenuList from "./SummaryMenuListComponent.jsx";
import SummaryCoupon from "./SummaryCouponComponent.jsx";

const SummaryTableComponent = props => {
  return (
    <div className="summary-table">
      <SummaryMenuList />
      <SummaryCoupon />
      <div className="summary-table">Summary</div>
    </div>
  );
};

export default SummaryTableComponent;
