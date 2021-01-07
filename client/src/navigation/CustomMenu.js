import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

// style
import "./style.css";

const CustomMenu = () => (
  <Menu stackable>
    <Menu.Item>
      <img src="https://react.semantic-ui.com/logo.png" alt="icon" />
    </Menu.Item>
    <Menu.Item name="Devices">
      <NavLink to="/devices" className="custom-nav-link">
        Devices
      </NavLink>
    </Menu.Item>
  </Menu>
);

export default CustomMenu;
