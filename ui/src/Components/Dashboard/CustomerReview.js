import { Row, Col } from 'react-bootstrap';
import cus1 from '../../Assest/Images/Customer/cus1.jpg';
import cus2 from '../../Assest/Images/Customer/cus2.jpg';
import cus3 from '../../Assest/Images/Customer/cus3.webp';
import star from '../../Assest/Images/Customer/star.png';

const CustomerReview = () => {
    return (
        <Row className='cusreview_section'>
             <div className='customerreview_header'>
                <h3 className='customerreview_title'>Customer Testimonials</h3>
                <p>Here what our customer says</p>
            </div>
            <Col lg={4} md={4} sm={12} className='customer_col'>
                <img src={cus1} alt="Customer 1" className='customer_img' />
                <div className='customer_review'>
                    <div className='star_section'>
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                    </div>
                    <div className='customer_text'>
                        <span style={{fontSize:'20px',fontWeight:'bold'}}>"</span>
                    Our travel consultant Emma was amazing, she help organise our holiday , any questions or queries I had were answered efficiently and within a couple of hours.This is the second time I have booked through Travelonline and would definitely use again.
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>"</span>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12} className='customer_col'>
                <img src={cus2} alt="Customer 2" className='customer_img' />
                <div className='customer_review'>
                    <div className='star_section'>
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                    </div>
                    <div className='customer_text'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>"</span>
                    Would recommend travel online , everything was great and they were helpful when we got home and had to get a couple things sorted from our trip
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>"</span>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12} className='customer_col'>
                <img src={cus3} alt="Customer 3" className='customer_img' />
                <div className='customer_review'>
                    <div className='star_section'>
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                        <img src={star} alt="star" className='star_icon' />
                    </div>
                    <div className='customer_text'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>"</span>
                    I found travel online easy to work with. Information was on time if not early and concise. When I required extra information it was helpful and I would recommend their business
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>"</span>
                    </div>
                </div>
            </Col>
        </Row>
    )
};

export default CustomerReview;