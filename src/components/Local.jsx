import React from "react";
import ContactUs from "./ContactUs"
import FootInfo from "./FootInfo"
import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";
import "./Services.css";

function Local() {
  return (
    <div className="local">
      <div class="container">
      <Fade triggerOnce="true" duration="1500" delay="0">
            <h1 className="serviceTitle">FREE LOCAL DELIVERY</h1>
      </Fade>
      <Fade triggerOnce="true" duration="1500" delay="20">
        <div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://live.staticflickr.com/65535/52695521030_0d9fc14921_c.jpg"
              alt="Map of local area"
            />
          </div>
          <div class="col-lg-5">
            <h5>
            Take advantage of free local delivery! <br></br><br></br>As a thank you to our local customers, any equipment that has been repaired at our shop will be delivered to you free of charge.  <br></br><br></br>Contact us to see if you qualify!
            </h5>
          </div>
        </div>
        </div>
      </Fade>
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

export default Local;