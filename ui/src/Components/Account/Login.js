import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PersonalLogin from "./PersonalLogin";
import logo from './../../Assest/Images/Logo/LocofestLogo.png';
import TravelAgentLogin from "./TravelAgentLogin";
import './../../Assest/css/Login.css';

const Login = () => {
    
    return (
        <Container className="login_container">
            <Row className="login_row">
                <Col lg={6} md={6} sm={12} className="logo_section">
                <img className="personal_login_logo" src={logo} alt="Logo"/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Row className="login_select_account_section">
                        <div className="login_select_options">
                            {/* <span className="login_options">Personal</span>
                            <span className="">Travel Agent</span> */}
                            <Tabs defaultActiveKey="personal" id="justify-tab-options" className="mb-3" justify>
                                <Tab eventKey="personal" title="Personal">
                                    <PersonalLogin/>
                                </Tab>
                                <Tab eventKey="TravelAgent" title="Travel Agent">
                                    <TravelAgentLogin />
                                </Tab>
                            </Tabs>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;