import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function DashboardSidebar({ collapsed }) {
  const image = sessionStorage.getItem("image");
  const name = sessionStorage.getItem("name");
  return (
    <div style={{ display: "flex", height: "100vh", minHeight: "400px" }}>
      <Sidebar collapsed={collapsed} transitionDuration={1000}>
        {!collapsed && (
          <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>admin</p>
          </div>
        )}

        <Menu>
          <MenuItem component={<Link to="/dashboard" />}>Dashboard</MenuItem>

          <SubMenu label="Category">
            <MenuItem component={<Link to="/category" />}>
              Category List
            </MenuItem>

            <MenuItem component={<Link to="/add-category" />}>
              Add Category
            </MenuItem>
          </SubMenu>
          <SubMenu label="Product">
            <MenuItem component={<Link to="/product" />}>Product List</MenuItem>

            <MenuItem component={<Link to="/add-product" />}>
              Add Product
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}
