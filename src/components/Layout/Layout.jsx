import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import classes from './Layout.module.css'

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={classes.main}>
        <Sidebar collapsed={collapsed} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
