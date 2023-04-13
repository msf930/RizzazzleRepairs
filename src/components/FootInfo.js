import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import "./FootInfo.css";

function FootInfo() {
  return (
    <div className="body">
        <div className="container">
          <div className="column">
            <h2 className="footHeader">Rizzazzle Repairs LLC</h2>
            <h3 className="footContent">Phone: 719-287-0745</h3>
            <h3 className="footContent">Email: RizzazzleRepairs@gmail.com</h3>
          </div>
          <div className="column">
            <h2 className="footHeader">Hours MST</h2>
            <h3 className="footContent">Mo - Fr: 3:00 pm - 9:00 pm</h3>
            <h3 className="footContent">Sa - Su: 9:00 am - 9:00 pm</h3>
          </div>
          <div className="column">
            <h2 className="footHeader">Menu</h2>
            <li className="linkText">
              <NavLink className="footContent" to="/">
                Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="linkText">
              <NavLink className="footContent" to="/capabilities">
              Capabilities
              <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="linkText">
              <NavLink className="footContent" to="/installation">
              Installation
              <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="linkText">
              <NavLink className="footContent" to="/repairs">
              Repairs
              <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="linkText">
              <NavLink className="footContent" to="/local">
              Free Local Delivery
              <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="linkText">
              <NavLink className="footContent" to="/contact">
              Contact
              <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </div>
        </div>
        <div className="spacer"></div>
          
        </div>
  );
}

export default FootInfo;