import React from "react";
import "../../stylesheets/SummaryTable.css";

const SummaryTableComponent = props => {
  const getTotalValue = (menu, count) => menu[1] * count;
  return (
    <div className="summary-menu-item">
      <div className="summary-menu-item__name">{props.menu[0]}</div>
      <div className="summary-menu-item__count">{props.count}</div>
      <div className="summary-menu-item__total">
        {getTotalValue(props.menu, props.count)}
      </div>
    </div>
  );
};

export default SummaryTableComponent;
