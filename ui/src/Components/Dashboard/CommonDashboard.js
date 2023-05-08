import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mainmasthead from '../../Assest/Images/Home/HomeMainMasthead.jpg';
// import world from '../../Assest/Images/Home/world.gif';
import '../../Assest/css/Dashboards/CommonDashboard.css';

const CommonDashboard = () => {
    return (
        <Container className='common_dashboard_section'>
            {/* <div>
                <img src={mainmasthead} alt="Main MastHead"></img>
            </div> */}
            <Row className='main_masthead_row1'>
                <Col lg={6} md={6} sm={12} className="masthead_text1">
                    Explore
                </Col>
                <Col lg={6} md={6} sm={12} className='mainmasthead_image'>
                    <img src={mainmasthead} alt="Main MastHead" className='mainImage'></img>
                </Col>
            </Row>
            <Row className='main_masthead_row2'>
                the whole world with <span className='us'>us</span>
            </Row>
        </Container>
    )
}

export default CommonDashboard;