import React from "react";

import MenuList from "./MenuList/MenuListComponent.jsx";
import Summary from "./Summary/SummaryComponent.jsx";
import { Provider } from "unstated";
import MenuStore from "../stores/MenuStore.jsx";

import "../stylesheets/App.css";

class App extends React.Component {
  render() {
    return (
      <Provider inject={[MenuStore]}>
        <div className="app">
          <header className="header">Cafe POS</header>
          <div className="content">
            <MenuList />
            <Summary />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
