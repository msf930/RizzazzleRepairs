import React from "react";
import ContactUs from "./ContactUs"
import FootInfo from "./FootInfo"
import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";
import "./Services.css";

function Contact() {
  return (
    <div className="contact">
     <Fade triggerOnce="true" duration="1500" delay="10">
      <div>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://live.staticflickr.com/65535/52720540491_490206858c_h.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 className="serviceTitle">CONTACT</h1>
            <p>
            Don’t hesitate to reach out with any questions or concerns! 
            We are here for you! If you have a project you’re looking to have completed, give us a call! 
            <br></br>
            <br></br>
            We pride ourselves on being able to provide an answer within one business day. 
            Please provide a description of the project you have in mind, the location, and expected timeline, and we’ll take it from there!
            </p>
          </div>
        </div>
      </div>
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

export default Contact;