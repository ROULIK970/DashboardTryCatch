import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function DashboardSidebar({ collapsed }) {
  return (
    <div style={{ display: "flex", height: "100vh", minHeight: "400px" }}>
      <Sidebar collapsed={collapsed} transitionDuration={1000}>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.P1A8VTkqQO1cGu2pjQwnCwHaJk?w=151&h=194&c=7&r=0&o=7&pid=1.7&rm=3"
            alt=""
          />
          <h1>Emily Johnson</h1>
          <p>admin</p>
        </div>

        <Menu>
          <MenuItem>
            <Link to="/dashboard"> Dashboard</Link>
          </MenuItem>

          <SubMenu label="Category">
            <MenuItem>
              <Link to="/category">Category List</Link>{" "}
            </MenuItem>

            <MenuItem>
              <Link to="/add-category"> Add Category</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Product">
            <MenuItem>
              <Link to="/product"> Product List</Link>
            </MenuItem>

            <MenuItem>
              <Link to="/add-product"> Add Product</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
