import React from "react";

const SummaryTotalComponent = props => {
  return (
    <div className="summary-total">
      <div className="summary-total__label">{props.label}</div>
      <div className="summary-total__value">{props.value}</div>
    </div>
  );
};

export default SummaryTotalComponent;
