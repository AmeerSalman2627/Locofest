import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import mainmasthead from '../../Assest/Images/Home/HomeMainMasthead1.jpg';
// import world from '../../Assest/Images/Home/world.gif';
import '../../Assest/css/Dashboards/CommonDashboard.css';

const CommonDashboard = () => {
    return (
        <Container className='common_dashboard_section'>
            <Row className='main_masthead_row'>
                <Col lg={6} md={6} sm={12} className='mainmasthead_col1'>
                    <div className="masthead_text1">
                        <span style={{color:'white',fontSize:'50px'}}>Showing</span> you the world,
                        <span style={{color:'white',fontSize:'50px'}}>One country</span> at a time.
                    </div>
                    <div className='explorenow'>
                        <Button className='explore_btn'>Explore Now</Button>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <img src={mainmasthead} alt="Main MastHead" className='mainImage'></img>
                </Col>
            </Row>
        </Container>
    )
}

export default CommonDashboard;