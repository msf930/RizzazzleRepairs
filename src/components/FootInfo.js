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
            <h2 className="footHeader">Rizzazzle Repairs</h2>
            <h3 className="footContent">Phone: 719-287-0745</h3>
            <h3 className="footContent">Email: RizzazzleRepairs@gmail.com</h3>
          </div>
          <div className="column">
            <h2 className="footHeader">Hours</h2>
            <h3 className="footContent">Monday: 10:00 am - 6:00 pm</h3>
            <h3 className="footContent">Tuesday: 10:00 am - 6:00 pm</h3>
            <h3 className="footContent">Wednesday: 10:00 am - 6:00 pm</h3>
            <h3 className="footContent">Thursday: 10:00 am - 6:00 pm</h3>
            <h3 className="footContent">Friday: 10:00 am - 6:00 pm</h3>
            <h3 className="footContent">Saturday: Closed</h3>
            <h3 className="footContent">Sunday: Closed</h3>
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