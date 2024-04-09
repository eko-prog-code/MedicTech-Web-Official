import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import online from "../../images/online.png";
import './App.css';

const OpsiApp = (props) => {
  return (
    <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
      <Container>
        <Row >
          <Col md={12} sm={12} lg={6}>
            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
              <div className="banner-btn m-sm-auto">
                <h3 className="title">MEDICTECH APP</h3>
                <div className="title">
                adalah aplikasi yang membantu penggunanya dalam memperoleh informasi dan solusi terkait farmakologi. Selain itu, aplikasi ini juga menyediakan kemudahan dalam mencari dosis obat untuk anak-anak, layanan rekam medis digital, serta layanan online kesehatan. Dengan MEDICTECH APP, pengguna dapat dengan mudah mengakses informasi dan layanan kesehatan yang diperlukan, sesuai dengan perkembangan teknologi saat ini..
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.medictech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="theme-btn btn-fill text-center justify-content-center align-self-center">
                    MEDICTECH MOBILE
                  </button>
                </a>
              </div>

              <div className="banner-btn m-sm-auto">
                <div className="text-center">
                  <a
                    href="https://tribelio.page/medictech-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="theme-btn-blue btn-blue text-center justify-content-center align-self-center">
                      MEDICTECH REQUEST
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} sm={12} lg={6} className="mt-sm-5 mb-sm-5">
            <div className="hero-slide-right text-start">
              <div className="banner-animate">
                <img src={online} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OpsiApp;
