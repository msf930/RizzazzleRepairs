import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      
        <Parallax pages={3} >
          {/* paralax layer 1 */}
          <ParallaxLayer 
            offset={0}
            speed={1}
            factor={1}
            style={{
              backgroundImage: 'url(https://live.staticflickr.com/65535/52701627778_1dca647ad6_k.jpg)',
              backgroundSize: 'cover',
          }}>
          </ParallaxLayer>

          <ParallaxLayer 
            offset={0}
            speed={1.5}
            factor={1}
            >
            <div className="container1">
              <div className="titleContainer">
                <h2 className="subTitle" class="display-6"> Installation and Repair Service</h2>
                <h1 className="title" class="display-1"> RIZZAZZLE REPAIRS</h1>
                <button type="button" class="button1 btn btn-outline-dark">Contact Now</button>
              </div>
            </div>
          </ParallaxLayer>

          {/* paralax layer 2 */}
          <ParallaxLayer offset={1} speed={.5}>
            <div class="container" className="body1">
              <Row>
                <Col sm={12} lg={4}>
                  <div class="card">
                    <div class="card-body">
                      <h2 className="header1">Our Capabilities</h2>
                      <h5 className="text1">Our small team of dedicated technicians is here for you! Let us take on the task of installing any and all audio-visual equipment you can imagine! <br></br> <br></br>
                      We are dedicated to delivering an exceptional customer experience from beginning to end! <br></br> <br></br>
                      We take pride in keeping your equipment operating at peak efficiency!</h5>
                      <a href="#!" class="btn btn-primary">More Info</a>
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={4}>
                  <div class="card">
                    <div class="card-body">
                      <h2 className="header1">Comprehensive installation and repairs</h2>
                      <h5 className="text1">Our small team of dedicated technicians is here for you! Let us take on the task of installing any and all audio-visual equipment you can imagine! <br></br> <br></br>
                      We are dedicated to delivering an exceptional customer experience from beginning to end! <br></br> <br></br>
                      We take pride in keeping your equipment operating at peak efficiency!</h5>
                      <a href="#!" class="btn btn-primary">More Info</a>
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={4}>
                  <div class="card">
                    <div class="card-body">
                      <h2 className="header1">Comprehensive installation and repairs</h2>
                      <h5 className="text1">Our small team of dedicated technicians is here for you! Let us take on the task of installing any and all audio-visual equipment you can imagine! <br></br> <br></br>
                      We are dedicated to delivering an exceptional customer experience from beginning to end! <br></br> <br></br>
                      We take pride in keeping your equipment operating at peak efficiency!</h5>
                      <a href="#!" class="btn btn-primary">More Info</a>
                    </div>
                  </div>
                </Col>
              </Row>
          </div>
          </ParallaxLayer>
          {/* paralax layer 3 */}
          <ParallaxLayer offset={2}>
            <div className="body2">
              <h2 className="header2">Email us to set up an appointment!</h2>
              <h5 className="text2">Please include description, preferred times, and location</h5>
              <h2 className="header3">RizzazzleRepairs@gmail.com</h2>
            </div>
          </ParallaxLayer>
        </Parallax>

      



        
       
        
    </div>
  );
}

export default Home;