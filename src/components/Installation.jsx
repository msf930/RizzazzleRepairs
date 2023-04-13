import React from "react";
import ContactUs from "./ContactUs"
import FootInfo from "./FootInfo"
import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";
import "./Services.css";

function Installation() {
  return (
    <div className="about">
      <div class="container">
        <Fade triggerOnce="true" duration="1500" delay="0">
          <h1 className="serviceTitle">INSTALLATIONS</h1>
        </Fade>
        <Fade triggerOnce="true" duration="1500" delay="20">
          <div>
            <div class="row align-items-center my-5">
              <div class="col-lg-7">
                <img
                  class="img-fluid rounded mb-4 mb-lg-4"
                  src="https://live.staticflickr.com/65535/52699497874_8f6119f86f_c.jpg"
                  alt=""
                />
              </div>
              <div class="col-lg-5">
                <h3 className="serviceTitle" >Comprehensive installation services</h3>
                <p>
                With more than 5 years of experience, Rizzazzle Repairs offers comprehensive installations for all the acronyms: AV (audio-visual), DMB (Digital Media Boards), IT (information tech), MP (Media Players), TV (televisions), and more!
                  <br></br> 
                  <br></br>
                  With satisfied customers ranging from McDonald’s to Cadillac and everyone in between, let us take on your project and show you what we can do.
                  <br></br> 
                  <br></br>
                  Have any questions? Give us a call!
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <div class="container">
        <div>
        <Fade triggerOnce="true" duration="1500" delay="0">
          <h2 className="serviceTitle">Satisfied Customers</h2>
        </Fade>
        </div>
       
          <div class="row align-items-center my-5">
           <div class="col-lg-6 ">
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
                <img
                  class="img-fluid rounded mb-4 mb-lg-4"
                  src="https://live.staticflickr.com/65535/52713443760_c8ffbe63f8_k.jpg"
                  alt=""
                />
            </div>
           </Fade>
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52712503002_bbe8f96e11_k.jpg"
                 alt=""
               />
            </div>
           </Fade>
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52713443605_fa44e4daa7_k.jpg"
                 alt=""
               />
            </div>
           </Fade>
             </div>
           <div class="col-lg-6">
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52728447441_f1b72ea73a_c.jpg"
                 alt=""
               />
            </div>
           </Fade>
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52728926903_db62cc029e_c.jpg"
                 alt=""
               />
            </div>
           </Fade>
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52728960568_230323badb_k.jpg"
                 alt=""
               />
            </div>
           </Fade>
             </div>
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