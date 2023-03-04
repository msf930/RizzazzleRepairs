import React from "react";
import FootInfo from "./FootInfo"
import ContactUs from "./ContactUs"
import GoToTop from './GoToTop'
import "./Capabilities.css"

function Capabilies() {
  return (
    <div className="capabilies">
      <div class="container">
        <div class="row align-items-center my-5">
          <h1>Our Capabilities</h1>
        </div>
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
            Specializing in consumer audio visual equipment and commercial installations in the Denver area. 
            Delivering exceptional service to clients across Colorado and beyond!
            </h5>
          </div>
        </div>
        <div class="item row align-items-center my-5">
          <div class="col-lg-5">
            <h5>RizzazzleRepairs has broad capabilities to execute any size project. 
            From a single TV mounting to an entirely customized leasing office, we are here for you! 
            <br></br>
            <br></br>
            Service capabilities encompassing everything from digital signage to electronic instruments to commercial technology and anything in-between!
            </h5>
            
          </div>
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://live.staticflickr.com/65535/52699164826_689f46c356_b.jpg"
              alt=""
            />
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

export default Capabilies;