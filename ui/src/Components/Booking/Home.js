import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {MdOutlineFlightTakeoff} from 'react-icons/md';
import '../../Assest/css/Booking/Home.css';

const Home = () => {
    return(
        <Container className='booking_home_container'>
            <Row className='booking_section'>
                <div className='booking_options_list'>
                    {/* <ul className='booking_select_list'>
                        <li>Flights</li>
                        <li>Train</li>
                        <li>Bus</li>
                        <li>Ferry</li>
                        <li>Rental cars</li>
                        <li>Charted Flights</li>
                    </ul> */}
                    <Card className="booking_type_card">
                        <Card.Body className='booking_type_card_body'>
                            <Row>
                                <Col lg={3} md={3} sm={12} className='booking_type_section'>
                                    <i className="fa fa-plane-departure booking_type_icon"></i>
                                    <span className='booking_type_text'>Flight</span>
                                </Col>
                                <Col lg={3} md={3} sm={12} className='booking_type_section'>
                                    <i className="fa fa-solid fa-train booking_type_icon"></i>
                                    <span className='booking_type_text'>Train</span>
                                </Col>
                                <Col lg={3} md={3} sm={12} className='booking_type_section'>
                                    <i className="fa fa-solid fa-bus booking_type_icon"></i> 
                                    <span className='booking_type_text'>Bus</span>
                                </Col>
                                <Col lg={3} md={3} sm={12} className='booking_type_section'>
                                    <i className="fa fa-solid fa-car booking_type_icon"></i> 
                                    <span className='booking_type_text'>Rental</span>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className='booking_selection_card'>
                        <Card.Body className='booking_selection_body'>
                        <Row className='booking_selection_row'>
                                Booking Section
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Container>
    )
};


export default Home;