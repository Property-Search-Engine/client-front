import React from "react";
import "../Drawer/Drawer.scss";

import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';


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
                <button className="openDrawer" style={{ zIndex: '1' }}
                    type="primary" onClick={this.showDrawer}>
                    <img className="searchIcon" src="/assets/icons/menu.svg" />
                </button>


                <Drawer 
                    
                    width="200px"
                    distance
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{ position: '' }}
                >
                    <div></div>
                </Drawer>



            </div>
        );
    }
}
