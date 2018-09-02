import React from "react";
import "../../stylesheets/SummaryTable.css";

const SummaryTableComponent = props => {
  return (
    <div className="summary-table">
      <div className="summary-table__label-row">
        <div className="summary-table__label menu-label">메뉴</div>
        <div className="summary-table__label amount-label">수량</div>
        <div className="summary-table__label price-label">가격</div>
      </div>
      <div className="summary-table">selected items</div>
      <div className="summary-table">Summary-table</div>
      <div className="summary-table">Summary</div>
    </div>
  );
};

export default SummaryTableComponent;
