import { Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Row className='dashboard_contact_section'>
            <Col lg={6} md={6} sm={12} className='dashboard_contact_info'>
                <h3>Contact information</h3>
                <span className='dashboard_contact_tollfree'>
                    <a href="tel:18005645234">1800-5645-234</a> 
                </span>
                <span className='dashboard_contact_email'>
                    <a href="mailto:locofest@gmail.com">locofest@gmail.com</a>
                </span>
            </Col>
            <Col lg={6} md={6} sm={12} className='gettouch_section'> 
                <h3>Get in touch</h3>
                <div className="input-group">
                    <input type="text" id="name" name="name" placeholder="Name" />
                </div>
                <div className="input-group">
                    <input id="email" name="password" type="text" placeholder="Email Address" />
                </div>
                <Button className='get_btn'>Get In Touch</Button>
            </Col>
        </Row>
    )
};

export default Contact;