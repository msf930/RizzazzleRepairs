import React from "react";
import { NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleSlider from "./SimpleSlider"
import ContactUs from "./ContactUs"
import FootInfo from "./FootInfo"
import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Home.css";

function Home() {
  return (
    <div className="home">
        <div className="container1">
           <img
             class="image1 mb-12 mb-lg-12"
             src="https://live.staticflickr.com/65535/52701627778_1dca647ad6_k.jpg"
             alt=""
           />
           <Fade triggerOnce="true" duration="1500" delay="10">
           <div className="titleContainer">
            <h2 className="subTitle" > Installation and Repair Service</h2>
            <h1 className="title" > RIZZAZZLE REPAIRS</h1>
            <NavLink className="nav-link" to="/contact">   
              <button type="button" class="button1">Contact Now</button>
              <span className="sr-only">(current)</span>
            </NavLink>
           </div>
           </Fade>
        </div>
        <div class="container" className="body1">
          <Row>
            <Col sm={12} lg={4}>
              <div class="card">
              <Fade triggerOnce="true" duration="1500" delay="20">
                <div class="card-body">
                  <h2 className="header1">OUR CAPABILITIES</h2>
                  <h5 className="text1">Our small team of dedicated technicians is here for you! Let us take on the task of installing any and all audio-visual equipment you can imagine! <br></br> <br></br>
                  </h5>
                  <NavLink className="nav-link" to="/capabilities">   
                    <a href="#!" class="btn ">More Info</a>
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </div>
              </Fade>
              </div>
            </Col>
            <Col sm={12} lg={4}>
              <div class="card">
              <Fade triggerOnce="true" duration="1500" delay="30">
                <div class="card-body">
                  <h2 className="header1">INSTALLATIONS</h2>
                  <h5 className="text1">Comprehensive installation services <br></br> <br></br> Everything from design, deployment, and management of single installations to company wide rollouts</h5>
                  <NavLink className="nav-link" to="/installation">   
                    <a href="#!" class="btn ">More Info</a>
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </div>
              </Fade>
              </div>
            </Col>
            <Col sm={12} lg={4}>
              <div class="card">
              <Fade triggerOnce="true" duration="1500"delay="40">
                <div class="card-body">
                  <h2 className="header1">REPAIRS</h2>
                  <h5 className="text1">Expansive knowledge of varied systems ranging from appliances to electronic instruments. </h5>
                  <NavLink className="nav-link" to="/repairs">   
                    <a href="#!" class="btn ">More Info</a>
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </div>
              </Fade>
              </div>
            </Col>
          </Row>
        </div>
        {/* ABOUT US */}
        <div className="container2" class="card">
          <img
             className="image2"
             class="image2 mb-12 mb-lg-12"
             src="https://live.staticflickr.com/65535/52715601072_0349944cf9_k.jpg"
             alt=""
           />
          <div className="container2Text">
          <Fade triggerOnce="true" duration="1500">
            <h2 className="header2">ABOUT US</h2>
            <h2 className="header3">We keep our eye on the details.</h2>
            <h5 className="text2">With a humble start repairing digital keyboards for local Denver folks, we have grown in experience to take on national jobs for million-dollar companies. 
            Let our expert team obsess over every step of the process so you don’t have to! 
            We work tirelessly to ensure your project is executed efficiently and without hassle! 
            Worry less knowing that our professional team is here for you.</h5>
          </Fade>

          </div>
        </div>
        {/* CLIENTS */}
        <div className="container3">
        <Fade triggerOnce="true" duration="1500">
          <h2 className="clientTitle">SOME OF OUR CLIENTS</h2>
        </Fade>
          <div className="logoContainer">
          <Fade triggerOnce="true" duration="1500" delay="10">
            <img
               className="clientImage"
               class="clientImage mb-12 mb-lg-12"
               src="https://live.staticflickr.com/65535/52717862187_ed03e52bb2_c.jpg"
               width="auto"
               height="130"
               alt=""
             />
          </Fade>
          <Fade triggerOnce="true" duration="1500" delay="20">
            <img
               className="clientImage"
               class="clientImage mb-12 mb-lg-12"
               src="https://live.staticflickr.com/65535/52717861327_5c959437c3_b.jpg"
               width="auto"
               height="100"
               alt=""
             />
          </Fade>
          <Fade triggerOnce="true" duration="1500" delay="30">
            <img
               className="clientImage"
               class="clientImage mb-12 mb-lg-12"
               src="https://live.staticflickr.com/65535/52718377636_134418fc9f_c.jpg"
               width="auto"
               height="100"
               alt=""
             />
          </Fade>
          <Fade triggerOnce="true" duration="1500" delay="40">
            <img
               className="clientImage"
               class="clientImage mb-12 mb-lg-12"
               src="https://live.staticflickr.com/65535/52717897462_0a73322f8d_n.jpg"
               width="auto"
               height="100"
               alt=""
             />
          </Fade>
          </div>
        </div>
        {/* TESTIMONIALS */}
        <Fade triggerOnce="true" duration="1500">
        <div className="container4">
          <SimpleSlider/>
        </div>
        </Fade>
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

export default Home;