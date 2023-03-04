import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick.css"; 
import "./SlickTheme.css";
import "./SimpleSlider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true
    };
    return (
      <div>
      <h1 className="header"> REPAIRS AND INSTALLATIONS GALLERY</h1>
        <Slider {...settings}>
          <div>
            <div className="slideContainer">
            <div className="slideTextContainer">
              <h1 className="slideText">DISPLAY INSTALLATION</h1>
            </div>
              <img
                 className="slideImage"
                 src="https://live.staticflickr.com/65535/52713443605_452f81b03a_h.jpg"
                 alt=""
               />
            </div>
          </div>
          <div>
            <div className="slideContainer">
            <div className="slideTextContainer">
              <h1 className="slideText">KEYBOARD REPAIRS</h1>
            </div>
              <img
                 className="slideImage"
                 src="https://live.staticflickr.com/65535/52713501848_03afda59f3_k.jpg"
                 alt=""
               />
            </div>
          </div>
          <div>
          <div className="slideContainer">
            <div className="slideTextContainer">
              <h1 className="slideText">DISPLAY INSTALLATION</h1>
            </div>
              <img
                 className="slideImage"
                 src="https://live.staticflickr.com/65535/52712503002_8f9e60fbb0_h.jpg"
                 alt=""
               />
            </div>
          </div>
          <div>
          <div className="slideContainer">
            <div className="slideTextContainer">
              <h1 className="slideText">GAME CONSOLE REPAIR</h1>
            </div>
              <img
                 className="slideImage"
                 src="https://live.staticflickr.com/65535/52713276404_3c87d551f3_k.jpg"
                 alt=""
               />
            </div>
          </div>
          <div>
          <div className="slideContainer">
            <div className="slideTextContainer">
              <h1 className="slideText">KEYBOARD REPAIRS</h1>
            </div>
              <img
                 className="slideImage"
                 src="https://live.staticflickr.com/65535/52713443725_738bd8550e_h.jpg"
                 alt=""
               />
            </div>
          </div>
          <div>
          <div className="slideContainer">
            <div className="slideTextContainer">
              <h1 className="slideText">DISPLAY INSTALLATION</h1>
            </div>
              <img
                 className="slideImage"
                 src="https://live.staticflickr.com/65535/52713443760_c8ffbe63f8_k.jpg"
                 alt=""
               />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}