import React from "react";
import MenuItem from "./MenuItemComponent.jsx";

const MenuListComponent = props => {
  const dummyList = [1, 2, 3];
  return <div>{dummyList.map(menu => <MenuItem menu={menu} />)}</div>;
};

export default MenuListComponent;
