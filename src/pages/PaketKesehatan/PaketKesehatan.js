import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import g1 from '../../images/g1.png';
import g2 from '../../images/g2.png';
import g3 from '../../images/g3.png';
import g4 from '../../images/g4.png';
import g5 from '../../images/g5.png';
import './PaketKesehatan.css';


const PaketKesehatan = () => {
    return (
        <section className="gallery-wrapper text-white">
            <Container className="pembungkus">
                <Row>
                    <Col sm={12} className="text-center">
                        <div className="section-title">
                            <h1>Fitur</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g1} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g3} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={8} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g4} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} sm={12}>
                        <div className="single-item-box">
                            <div className="thumbnail">
                                <img src={g5} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PaketKesehatan;