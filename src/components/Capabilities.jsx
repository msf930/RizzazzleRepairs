import React from "react";
import { NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FootInfo from "./FootInfo"
import ContactUs from "./ContactUs"
import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";
import "./Capabilities.css"

function Capabilies() {
  return (
    <div className="capabilies">
      <div class="container">
      <Fade triggerOnce="true" duration="1500">
        <div class="row align-items-center my-5">
          <h1 className="capabilitiesTitle">Our Capabilities</h1>
        </div>
      </Fade>
      <Fade triggerOnce="true" duration="1500" delay="20">
        <div>
          <div class="item row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://live.staticflickr.com/65535/52699583225_7f44a4a0fe_b.jpg"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h5>
              Our dedicated technicians are here for you! <br></br><br></br>
              With expertise in digital signage, computing, logistics, and project management, we make the process easy from start to finish. <br></br><br></br>
              We manage all the details so you can focus on your core business.
              </h5>
            </div>
          </div>
        </div>
      </Fade>
        <div class="container" className="body1">
        <Row>
            <Col sm={12} lg={6}>
            <Fade triggerOnce="true" duration="1500" delay="20">
              <div>
              <div class="card">
                <div class="card-body">
                  <h2 className="header1">INSTALLATIONS</h2>
                  <h5 className="text1">Comprehensive installation services <br></br> <br></br> Everything from design, deployment, and management of single installations to company wide rollouts</h5>
                  <NavLink className="nav-link" to="/installation">   
                    <a href="#!" class="btn ">More Info</a>
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </div>
              </div>
              </div>
            </Fade>
            </Col>
            <Col sm={12} lg={6}>
            <Fade triggerOnce="true" duration="1500" delay="30">
              <div>
              <div class="card">
                <div class="card-body">
                  <h2 className="header1">REPAIRS</h2>
                  <h5 className="text1">Expansive knowledge of varied systems ranging from appliances to electronic instruments. </h5>
                  <NavLink className="nav-link" to="/repairs">   
                    <a href="#!" class="btn ">More Info</a>
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </div>
              </div>
              </div>
            </Fade>
            </Col>
          </Row>
        </div>
      </div>
      <div className="formContainer">
        <ContactUs/>
      </div>
      <div>
        <FootInfo/>
      </div>
      <GoToTop />
    </div>
  );
}

export default Capabilies;