import React from "react";
import { Subscribe } from "unstated";
import "../../stylesheets/SummaryTable.css";

import SummaryMenuList from "./SummaryMenuListComponent.jsx";

const SummaryTableComponent = props => {
  return (
    <div className="summary-table">
      <SummaryMenuList />
      <div className="summary-table">Summary-table</div>
      <div className="summary-table">Summary</div>
    </div>
  );
};

export default SummaryTableComponent;
