import React from "react";
import { Row, Col } from "react-bootstrap";
import asia from '../../Assest/Images/Continent/Asia.svg';
import africa from '../../Assest/Images/Continent/Africa.svg';
import southamerica from '../../Assest/Images/Continent/South-america.svg';
import northamerica from '../../Assest/Images/Continent/North-America.svg';
import australia from '../../Assest/Images/Continent/Australia.svg';
import europe from '../../Assest/Images/Continent/Europe.svg';
import './../../Assest/css/Destination.css';

const Destination = () => {
    return (
        <div className="container continent-container">
            <Row>
                <h1>Select the continent you wish to travel</h1>
            </Row>
            <Row className="continent-section">
                <Col lg={4} md={6} sm={12} className="each_continent">
                    <img src={asia} alt="Asia" />
                    <h2>Asia</h2>
                </Col>
                <Col lg={4} md={6} sm={12} className="each_continent">
                    <img src={africa} alt="Africa" />
                    <h2>Africa</h2>
                </Col>
                <Col lg={4} md={6} sm={12} className="each_continent">
                    <img src={australia} alt="Australia" />
                    <h2>Australia</h2>
                </Col>
                <Col lg={4} md={6} sm={12} className="each_continent">
                    <img src={europe} alt="Europe" />
                    <h2>Europe</h2>
                </Col>
                <Col lg={4} md={6} sm={12} className="each_continent">
                    <img src={northamerica} alt="North America" />
                    <h2>North America</h2>
                </Col>
                <Col lg={4} md={6} sm={12} className="each_continent">
                    <img src={southamerica} alt="South America" />
                    <h2>South America</h2>
                </Col>
            </Row>
        </div>
    )
};

export default Destination;