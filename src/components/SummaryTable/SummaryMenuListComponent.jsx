import React from "react";
import { Subscribe } from "unstated";
import { MenuStore } from "../../stores/";
import "../../stylesheets/SummaryTable.css";
import SummrayMenuItem from "./SummaryMenuItemComponent.jsx";

const SummaryTableComponent = props => {
  return (
    <Subscribe to={[MenuStore]}>
      {menuStore => (
        <div className="summary-menu">
          <div className="summary-menu__label-row">
            <div className="summary-menu__label menu-label">메뉴</div>
            <div className="summary-menu__label count-label">수량</div>
            <div className="summary-menu__label price-label">가격</div>
          </div>
          <div className="summary-menu__list">
            {Object.keys(menuStore.state.selected)
              .sort((a, b) => parseInt(a, 10) > parseInt(b, 10))
              .map(id => (
                <SummrayMenuItem
                  key={id}
                  id={id}
                  menu={menuStore.state.menus[id]}
                  count={menuStore.state.selected[id]}
                  handleIncrement={menuStore.addSelectedMenu.bind(
                    menuStore,
                    id
                  )}
                  handleDecrement={menuStore.decrementSelectedMenu.bind(
                    menuStore,
                    id
                  )}
                  handleDelete={menuStore.deleteSelectedMenu.bind(
                    menuStore,
                    id
                  )}
                />
              ))}
          </div>
          <div className="summary-menu__total">Summary-table</div>
        </div>
      )}
    </Subscribe>
  );
};

export default SummaryTableComponent;
