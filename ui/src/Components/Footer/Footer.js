import { Row, Col, Container } from 'react-bootstrap';
import {FiTwitter, FiInstagram, FiFacebook} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../../Assest/css/Footer.css';

const Footer = () =>{
    return (
        <Container className='footer_section'>
                <Row className='footer_content_row'>
                    <Col lg={4} md={6} sm={12}>
                        <div className='footer_total_tours_section'>
                            <h4 className='footer_count'>356</h4>
                            <p>Tours</p>
                        </div>
                        <div className='footer_total_plan_section'>
                            <h4 className='footer_count'>1L +</h4>
                            <p>Booking and travel plans</p>
                        </div>
                        <div className='footer_total_review_section'>
                            <h4 className='footer_count'>5000+</h4>
                            <p>Positive review from customer on their trip with us</p>
                        </div>
                        <div className='footer_total_years_section'>
                            <h4 className='footer_count'>10</h4>
                            <p>years of experience in travel planing</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='twitter_feed_section'>
                        <h4>Twitter feed</h4>
                        <div className='footer_tweets'>
                            <span><FiTwitter className='tweet_icon'/></span>
                            <span className='tweet_text'>Making last minute changes to travel plans? MyTrips has got your back! 
From raising refund requests to changing flight dates, MyTrips on MakeMyTrip can help you make any last minutes modifications to your travel bookings, in just a few clicks!</span>
                        </div>
                        <div className='footer_tweets'>
                            <span><FiTwitter className='tweet_icon'/></span>
                            <span className='tweet_text'>Making last minute changes to travel plans? MyTrips has got your back! 
From raising refund requests to changing flight dates, MyTrips on MakeMyTrip can help you make any last minutes modifications to your travel bookings, in just a few clicks!</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='footer_about_newsletter'>
                            <ul className='footer_additional_info'>
                                <li className='add_info'><Link to="/">Our story</Link></li>
                                <li className='add_info'><Link to="/">Product Offering</Link></li>
                                <li className='add_info'><Link to="/">Corporate Travel story</Link></li>
                                <li className='add_info'><Link to="/">Quick Links</Link></li>
                                <li className='add_info'><Link to="/">Important Links</Link></li>
                            </ul>
                            <div className='footer_newsletter_section'>
                                <h4>Newsletter</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="footer_social_icons">
                    <span className='social_icons'>
                        <FiTwitter className='socicon' />
                        <FiInstagram className='socicon' />
                        <FiFacebook className='socicon' />
                    </span>
                    <span className='copyRight'>&#169; 2023 Copyrights Locofest.LLC </span>
                </Row>
        </Container>
    )
}

export default Footer;