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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "ease",
      pauseOnHover: false
    };
    return (
      <div>
        <h2> TESTIMONIALS</h2>
        <Slider {...settings}>
          <div className="testimonialCard">
            <h3 className="testimonialBody">
              “I'm a testimonial. <br></br>
              Click to edit me and add text that says something nice<br></br> about you and your services.”
            </h3>
            <h5 className="testimonialTitle">Title</h5>
            <h5 className="testimonialName">NAME NAME</h5>
          </div>
          <div className="testimonialCard">
            <h3 className="testimonialBody">
              “I'm a testimonial. <br></br>
              Click to edit me and add text that says something nice<br></br> about you and your services.”
            </h3>
            <h5 className="testimonialTitle">Title</h5>
            <h5 className="testimonialName">NAME NAME</h5>
          </div>
          <div className="testimonialCard">
            <h3 className="testimonialBody">
              “I'm a testimonial. <br></br>
              Click to edit me and add text that says something nice<br></br> about you and your services.”
            </h3>
            <h5 className="testimonialTitle">Title</h5>
            <h5 className="testimonialName">NAME NAME</h5>
          </div>
          
          
        </Slider>
      </div>
    );
  }
}