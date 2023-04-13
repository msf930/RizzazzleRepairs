import React from "react";
import ContactUs from "./ContactUs"
import FootInfo from "./FootInfo"
import GoToTop from './GoToTop'
import { Fade } from "react-awesome-reveal";
import "./Services.css";

function Repairs() {
  return (
    <div className="repairs">
      <div class="container">
      <Fade triggerOnce="true" duration="1500" delay="0">
        <h1 className="serviceTitle">REPAIRS</h1>
      </Fade>
        <Fade triggerOnce="true" duration="1500" delay="0">
            <div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://live.staticflickr.com/65535/52699653580_d7f5b6788b_c.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h3 className="serviceTitle">Adaptable to any system</h3>
            <p>
            With backgrounds in computer science, engineering, electronics, and just generally being some geeky folks, let our technicians see what we can do for you. 
              <br></br>
              <br></br>
            If we have not repaired a similar device before, let us learn and the first hour of labor is FREE. 
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
                 src="https://live.staticflickr.com/65535/52727922227_fbcb9fe5f1_k.jpg"
                 alt=""
               />
            </div>
           </Fade>
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52728859765_5b178a7b55_h.jpg"
                 alt=""
               />
            </div>
           </Fade>
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52728859695_4591bd22f0_h.jpg"
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
                 src="https://live.staticflickr.com/65535/52713501848_b3935a06e2_c.jpg"
                 alt=""
               />
            </div>
           </Fade>
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52713276404_3c87d551f3_k.jpg"
                 alt=""
               />
            </div>
           </Fade>
           <Fade triggerOnce="true" duration="1500" delay="10">
            <div>
               <img
                 class="img-fluid rounded mb-4 mb-lg-4"
                 src="https://live.staticflickr.com/65535/52713443725_bd0c3b97a2_c.jpg"
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

export default Repairs;