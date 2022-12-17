import React, { useState, useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarMain() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#3366CC"}}>
      <Container fluid className="col-11">
        <Navbar.Brand href="/" className="col">
          <img src="https://www.bucaramanga.gov.co/wp-content/uploads/2021/03/logo_gov_co-e1611810279980.png" className="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-end" style={{color:"white"}}>
              <Nav.Link href="/" className="text-light">hola</Nav.Link>
              <Nav.Link href="/observatorio" className="text-light">Observatorio</Nav.Link>
              <Nav.Link href="/" className="text-light">Inicio</Nav.Link>
              <Nav.Link href="/login" className="text-light">Salir</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMain