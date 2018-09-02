import React from "react";

import MenuList from "./MenuList/MenuListComponent.jsx";
import SummaryTable from "./SummaryTable/SummaryTableComponent.jsx";
import { Provider } from "unstated";
import stores from "../stores";

import "../stylesheets/App.css";

class App extends React.Component {
  render() {
    return (
      <Provider inject={[...stores]}>
        <div className="app">
          <header className="header">Cafe POS</header>
          <div className="content">
            <MenuList />
            <SummaryTable />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
