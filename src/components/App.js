import React from "react";

import MenuList from "./MenuList/MenuListComponent.jsx";
import Summary from "./Summary/SummaryComponent.jsx";

import "../stylesheets/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">Cafe POS</header>
        <div className="content">
          <MenuList />
          <Summary />
        </div>
      </div>
    );
  }
}

export default App;
