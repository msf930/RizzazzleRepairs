import React from "react";
import ContactUs from "./ContactUs"
import FootInfo from "./FootInfo"
import GoToTop from './GoToTop'
import "./Services.css";

function Repairs() {
  return (
    <div className="repairs">
      <div class="container">
        <h1>REPAIRS</h1>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://live.staticflickr.com/65535/52699653580_d7f5b6788b_c.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h3>Adaptable to any system</h3>
            <p>
              Expansive knowledge of varied systems ranging from appliances to electronic instruments. 
              <br></br>
              <br></br>
              If we have not fixed a similar device before, the first hour of labor is free.
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

export default Repairs;