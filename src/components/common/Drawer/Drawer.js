import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../../utils/routes";

import { Drawer } from "antd";

import "./Drawer.scss";

export default class DrawerMenu extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        <button
          className="openDrawer"
          style={{ zIndex: "1" }}
          type="primary"
          onClick={this.showDrawer}
        >
          <img className="searchIcon" src="/assets/icons/menu.svg" />
        </button>

        <Drawer
          width="300px"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <div className="w-100 h-25">
            <Link to={ROUTES.MY_BOOKINGS}>{"My Bookings"}</Link>
          </div>
        </Drawer>
      </div>
    );
  }
}
