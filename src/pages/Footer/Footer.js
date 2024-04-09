import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2022 - 
                <a href="https://wa.me/+62895600394345" target="_blank" rel="noopener noreferrer">
                <span className="developer">MEDICTECH</span>
                </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;