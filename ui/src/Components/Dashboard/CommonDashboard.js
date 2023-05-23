import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import mainmasthead from '../../Assest/Images/Home/HomeMainMasthead1.jpg';
import { TbBackpack, TbPlaneInflight, TbHotelService } from 'react-icons/tb';
import '../../Assest/css/Dashboards/CommonDashboard.css';
import BestSellers from './BestSellers';
import Topvalues from './TopValues';
import Partners from './Partners';
import CustomerReview from './CustomerReview';

const CommonDashboard = () => {
    return (
        <Container className='common_dashboard_section'>
            <Row className='main_masthead_row'>
                <Col lg={6} md={6} sm={12} className='main_masthead_image'>
                    <img src={mainmasthead} alt="Main MastHead" className='mainImage'></img>
                </Col>
                <Col lg={6} md={6} sm={12} className='mainmasthead_col1'>
                    <div className="masthead_text1">
                        <span style={{color:'white',fontSize:'50px'}}>Showing</span> you the world,
                        <span style={{color:'white',fontSize:'50px'}}>One country</span> at a time.
                    </div>
                    <div className='explorenow'>
                        <Button className='explore_btn'>Explore Now</Button>
                    </div>
                </Col>
            </Row>
            <Row className='information_section'>
                <div className='information_heading'>
                    <p id="header">Explore.Save.Share</p>
                    <p>Plan for your <i>dream</i> vacation</p>
                </div>
                <Col lg={4} md={4} sm={12}>
                    <div className='info_icon_div'>
                        <TbBackpack className="info_icon" />
                    </div>
                    <div className='info_explain'>
                        <p>Exclusive and customizable pacakges that can satisfy all your needs for your trip. Honey moon packages for newly wed with exciting offers.</p>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className='info_icon_div'>
                        <TbPlaneInflight className="info_icon" />
                    </div>
                    <div className='info_explain'>
                        <p>We at Locofest manage to book you flight with best rate. We have access to few of the best airlines in the world. So we can cater your need to atmost best.</p>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className='info_icon_div'>
                        <TbHotelService className="info_icon" />
                    </div>
                    <div className='info_explain'>
                        <p>More than 6000 hotels and resorts are available with best offers. We encourage book now and pay later scheme which allows middle class family to arrange for their trip</p>
                    </div>
                </Col>
            </Row>
            <BestSellers/>
            <Topvalues />
            <Row className='subscribe_section'>
                <div class="form-group">
                    <input type="email" class="form-control" id="subscribeemail" aria-describedby="subscribeemail" placeholder="Enter email" />
                    <Button className='subscribe_btn'>Subscribe</Button>
                </div>
            </Row>
            <Row className='experience'>
                <Col lg={6} md={6} sm={12}>
                    <span className='experience_text'>Experience the rich culture of Europe</span>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Button className='book_tour'>Book a Tour</Button>
                </Col>
            </Row>
            <Partners />
            <CustomerReview />
        </Container> 
    )
}

export default CommonDashboard;