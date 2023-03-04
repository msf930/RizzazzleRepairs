import React from "react";
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
       <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/">
              <img
                src="https://live.staticflickr.com/65535/52695477790_c52835ca08.jpg"
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Rizzazzle Repairs Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Rizzazzle Repairs
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                  <NavLink className="nav-link" to="/capabilities">
                    Capabilities
                    <span className="sr-only">(current)</span>
                  </NavLink>
                  <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                  <NavDropdown.Item as={NavLink} to="/installation" >Installation</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/repairs">Repairs</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/local">Free Local Delivery</NavDropdown.Item>
                  </NavDropdown>
                  <NavLink className="nav-link" to="/contact">
                    Contact
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    </div>
  );
}

export default Navigation;