import { Col, Container, Row, Button } from "react-bootstrap";
import React, { useState } from "react";
import YouTube from "react-youtube";
import "./Dokter.css";

function Konten() {
  const [videoId, setVideoId] = useState("hAQAHsVw93A"); //default value

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideoId(e.target.elements.videoId.value);
  };

  return (
    <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col md={12} sm={12} lg={6}>
            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
              <div className="banner-btn m-sm-auto">
                <h3 className="title">MEDICTECH APP Video Tutorial</h3>
                <div className="title">
                Ayo belajar cara menggunakan MedicTech dengan mudah! Tonton video tutorial kami sekarang
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} lg={6} className="mt-sm-5 mb-sm-5">
              <div className="banner-animate">
              <div class='embed-container'>
                {videoId && (
                  <div>
                    <YouTube videoId={videoId} />
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Konten;
