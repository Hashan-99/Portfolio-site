import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {MailchimpForm} from './MailchimpForm'
import logo from '../Assests/img/logo.svg';
import navIcon1 from '../Assests/img/nav-icon1.svg';
import navIcon2 from '../Assests/img/nav-icon2.svg';
import navIcon3 from '../Assests/img/nav-icon3.svg';

export default function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center ">
                
                <Col sm={6}>  
                    <img src={logo} alt="" />
                </Col>
                <Col sm={6} className="text-center text-sm-end" >
                    <div className="social-icon">
                        <a href=""><img src={navIcon1}  /></a>
                        <a href=""><img src={navIcon2}  /></a>
                        <a href=""><img src={navIcon3}  /></a>
                    </div>
                    <p>copyright 2022. All Right Riserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
