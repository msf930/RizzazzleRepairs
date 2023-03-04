import React from "react";
import ContactUs from "./ContactUs"
import FootInfo from "./FootInfo"
import GoToTop from './GoToTop'
import "./Services.css";

function Local() {
  return (
    <div className="local">
      <div class="container">
            <h1>FREE LOCAL DELIVERY!</h1>
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
              Free delivery for local customers.  Contact us to see if you qualify!
            </h5>
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

export default Local;