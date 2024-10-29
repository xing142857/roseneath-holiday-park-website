import React from "react";
import { Row, Col, Image, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import "../Css/Footer.css";

const Footer = () => {
    const navigate = useNavigate();

    const jumpToContact = () => {
        navigate('/contact-us');
    };

    return (
        <div className="footer-body">
            <Container>
                <Row>
                    <Col md={5} className="d-flex">
                        <Image src="logo192.png" className="footer-logo" />
                        <text className="footer-slogan-text">In the Bush - By the Beach</text>
                    </Col>
                    <Col md={7} className="d-flex">
                        <Button 
                            className="footer-button" 
                            onClick={jumpToContact}
                        >
                            Get in Touch
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
