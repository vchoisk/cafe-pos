import React from "react";
import { Container } from "unstated";
import isEmpty from "lodash/isEmpty";
import metaJSON from "../assets/meta.js";

class MenuStore extends Container {
  state = {
    menus: metaJSON.menus,
    selected: {}
  };

  addSelected = id => {
    this.setState({
      selected: !isEmpty(this.state.selected[id])
        ? this.state.selected[id] + 1
        : Object.assign({}, this.state.selected, { [id]: 1 })
    });
  };

  decrementSelected = id => {
    this.setState({
      selected: this.state.selected[id] !== 0 && this.state.selected[id] - 1
    });
  };
}

export default MenuStore;
