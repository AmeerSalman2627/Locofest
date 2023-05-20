import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../../Assest/css/Dashboards/CommonDashboard.css';
import rome from '../../Assest/Images/Best Sellers/rome.jpg';
import india from '../../Assest/Images/Best Sellers/india.webp';
import istanbul from '../../Assest/Images/Best Sellers/istanbul.jpg';
import japan from '../../Assest/Images/Best Sellers/japan.jpg';
import maldives from '../../Assest/Images/Best Sellers/maldives.jpg';
import usa from '../../Assest/Images/Best Sellers/usa.webp';

const BestSellers = () => {
    return (
        <Row className='best_seller_section'>
            <h2 className='best_seller_header'>Best sellers</h2>
            <p className='best_seller_text'>The best of our packages</p>
            <Col lg={4} md={6} sm={12} className='best_seller_card' id="rome">
                <img src={rome} alt="rome" className='best_seller_img' />
                <div className='best_seller_days_rate'>
                    <span className='seller_days'>
                        4 days/3 nights
                    </span>
                    <span className='seller_rate'>
                        From ₹ 30,000
                    </span>
                </div>
                <p className='seller_description'>Rome and Florence</p>
            </Col>
            <Col lg={4} md={6} sm={12} className='best_seller_card' id="istanbul">
                <img src={istanbul} alt="istanbul" className='best_seller_img' />
                <div className='best_seller_days_rate'>
                    <span className='seller_days'>
                        6 days/5 nights
                    </span>
                    <span className='seller_rate'>
                        From ₹ 50,000
                    </span>
                </div>
                <p className='seller_description'>Istanbul, Izmir and Cappadocia</p>
            </Col>
            <Col lg={4} md={6} sm={12} className='best_seller_card' id="india">
                <img src={india} alt="india" className='best_seller_img' />
                <div className='best_seller_days_rate'>
                    <span className='seller_days'>
                        6 days/5 nights
                    </span>
                    <span className='seller_rate'>
                        From ₹ 45,000
                    </span>
                </div>
                <p className='seller_description'>Delhi, Goa and Chennai</p>
            </Col>
            <Col lg={4} md={6} sm={12} className='best_seller_card' id="maldives">
                <img src={maldives} alt="maldives" className='best_seller_img' />
                <div className='best_seller_days_rate'>
                    <span className='seller_days'>
                        6 days/5 nights
                    </span>
                    <span className='seller_rate'>
                        From ₹ 1,00,000
                    </span>
                </div>
                <p className='seller_description'>Centra Fushi resprt and activities</p>
            </Col>
            <Col lg={4} md={6} sm={12} className='best_seller_card' id="usa">
                <img src={usa} alt="usa" className='best_seller_img' />
                <div className='best_seller_days_rate'>
                    <span className='seller_days'>
                        6 days/5 nights
                    </span>
                    <span className='seller_rate'>
                        From ₹ 1,50,000
                    </span>
                </div>
                <p className='seller_description'>New York, Miami and Las Vegas</p>
            </Col>
            <Col lg={4} md={6} sm={12} className='best_seller_card' id="japan">
                <img src={japan} alt="japan" className='best_seller_img' />
                <div className='best_seller_days_rate'>
                    <span className='seller_days'>
                        6 days/5 nights
                    </span>
                    <span className='seller_rate'>
                        From ₹ 50,000
                    </span>
                </div>
                <p className='seller_description'>Tokyo and Kyoto</p>
            </Col>
            <Button className='view_all_package'>View All Packages</Button>
        </Row>
    )
}

export default BestSellers