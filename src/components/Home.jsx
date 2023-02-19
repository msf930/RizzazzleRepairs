import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className= "imageContainer">
        <Container>
            <Row>
                <Col md={6} lg={4}>
                    <img
                      class="image1 img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52694599732_de10801ba8_k.jpg"
                      alt=""
                    />
                    <img
                      class="image1 img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52695607673_7ac2a540ff_c.jpg"
                      alt=""
                    />
                    <img
                      class="image1 img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52695804668_82da446037_c.jpg"
                      alt=""
                    />
                </Col>
                <Col md={6}lg={4}>
                    <img
                      class="image2 img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52695812678_34121070ba_c.jpg"
                      alt=""
                    />
                    <img
                      class="image2 img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52694807712_e7eb17b962_h.jpg"
                      alt=""
                    />
                    <img
                      class="image2 img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52695587699_0d099ad7b9_h.jpg"
                      alt=""
                    />
                    <img
                      class="image2 img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52695736130_cefbcf8e0a_h.jpg"
                      alt=""
                    />
                </Col>
                <Col md={0}lg={4}>
                    <img
                      class="image img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52695736390_101b804a7c_h.jpg"
                      alt=""
                    />
                    <img
                      class="image img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52695829108_6cf45d277a_c.jpg"
                      alt=""
                    />
                    <img
                      class="image img-fluid rounded mb-4 mb-lg-4"
                      src="https://live.staticflickr.com/65535/52695343046_26c760498e_c.jpg"
                      alt=""
                    />
                </Col>
            </Row>
        </Container>
        <h1 className="title"> Rizzazzle Repairs <br></br>Installation & Repair Service </h1>
        <div className="body1">
          <h2 className="header1">Comprehensive installation and repairs</h2>
          <h5 className="text1">Our small team of dedicated technicians is here for you! Let us take on the task of installing any and all audio-visual equipment you can imagine! <br></br> <br></br>
          We are dedicated to delivering an exceptional customer experience from beginning to end! <br></br> <br></br>
          We take pride in keeping your equipment operating at peak efficiency!</h5>
        </div>
        <div className="body2">
          <h2 className="header2">Email us to set up an appointment!</h2>
          <h5 className="text2">Please include description, preferred times, and location</h5>
          <h2 className="header3">RizzazzleRepairs@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;