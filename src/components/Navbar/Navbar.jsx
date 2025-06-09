import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardNavbar({collapsed, setCollapsed}) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)} />
        <h1>SH</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
