import React from "react";
import ContactUs from "./ContactUs"
import FootInfo from "./FootInfo"
import GoToTop from './GoToTop'
import "./Services.css";

function Installation() {
  return (
    <div className="about">
      <div class="container">
      <h1>INSTALLATION</h1>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://live.staticflickr.com/65535/52699497874_8f6119f86f_c.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            
            <h3>Comprehensive installation services</h3>
            <p>
              Everything from design, deployment, and management of single installations to company wide rollouts 
              <br></br> 
              <br></br>
               With more than 5 years experience, RizzazzleRepairs offers comprehensive installations of AV, IT, digital signage, and more equipment for any size client. 
              <br></br> 
              <br></br>
               Have any questions? Give us a call!
            </p>
          </div>
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

export default Installation;