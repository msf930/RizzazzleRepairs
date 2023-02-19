import React from "react";
import { NavLink } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://live.staticflickr.com/65535/52695477790_c52835ca08.jpg"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Rizzazzle Repairs Logo"
            />
          </NavLink>
          {/* <NavLink className="navbar-brand align-left" to="/">
            Rizzazzle Repairs
          </NavLink> */}
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/installation" >Installation</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/repairs">Repairs</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/local">Free Local Delivery</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;