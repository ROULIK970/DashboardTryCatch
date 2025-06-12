import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardNavbar({collapsed, setCollapsed}) {

  const name = sessionStorage.getItem('name')
  const image = sessionStorage.getItem('image')
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)} />
        <h1>SH</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <img height='20%' width='20%' src={image} alt="" />
             <span>{name}</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
