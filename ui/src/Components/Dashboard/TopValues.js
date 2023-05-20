import { Row, Col, Button } from 'react-bootstrap';
import {ImPriceTags} from 'react-icons/im';
import {BsHandThumbsUp} from 'react-icons/bs';
import {MdOutlineSupportAgent, MdFormatListBulleted} from 'react-icons/md';
import '../../Assest/css/Dashboards/CommonDashboard.css';

const Topvalues = () => {
    return (
        <Row className='top_values_section'>
            <Col lg={4} md={4} sm={12}>
                <h3 className='top_values_header'>Our Values</h3>
                <p>Dveloped from small idea, to help the customer to travel, we at Locofest offer services to salisfy all the requirement of the customer. We not only support our customer during their booking, we even habe 24/7 support wwhite they are on their trip with their needs.We take great pride in expanding our buiness to different countries and become a top travel agency in world.</p>
                <Button className='about_us'>More About Us </Button>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <h3 className='top_values_header'>Top Destinations</h3>
                <ul className='top_destinations'>
                    <li>Maldives</li>
                    <li>Bali</li>
                    <li>Turkey</li>
                    <li>India</li>
                    <li>United States of America</li>
                    <li>France</li>
                    <li>Switzerland</li>
                    <li>Russia</li>
                </ul>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <h3 className='top_values_header'>Advantages</h3>
                <Row className='advatages_row'>
                    <Col lg={6} md={6} sm={6} xs={6} className="advatage_data">
                        <ImPriceTags className="advantage_icon" />
                        <p>Low cost</p>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="advatage_data">
                        <BsHandThumbsUp className="advantage_icon" />
                        <p>Easy Booking</p>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="advatage_data">
                        <MdFormatListBulleted className="advantage_icon" />
                        <p>1000+ packages</p>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="advatage_data">
                        <MdOutlineSupportAgent className="advantage_icon" />
                        <p>Low cost</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Topvalues;