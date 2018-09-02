import { Container } from "unstated";
import isInteger from "lodash/isInteger";
import metaJSON from "../assets/meta.js";

class MenuStore extends Container {
  state = {
    menus: metaJSON.menus,
    selected: {}
  };

  addSelectedMenu = id => {
    this.setState({
      selected:
        isInteger(this.state.selected[id]) && this.state.selected[id] > 0
          ? Object.assign({}, this.state.selected, {
              [id]: this.state.selected[id] + 1
            })
          : Object.assign({}, this.state.selected, { [id]: 1 })
    });
  };

  decrementSelectedMenu = id => {
    this.setState({
      selected: this.state.selected[id] !== 0 && this.state.selected[id] - 1
    });
  };

  deleteSelectedMenu = id => {
    const newSelected = Object.assign({}, this.state.selected);

    delete newSelected[id];

    this.setState({
      selected: newSelected
    });
  };
}

export default MenuStore;
