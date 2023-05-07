import {Button, Col, Row} from 'react-bootstrap';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const User = () => {
    return (
        <Row className='user_login_section'>
        <Col lg={6} md={6} sm={12} className="info_col">
            <div className='saver'>
                <i className="fa-solid fa-piggy-bank fa-xl" style={{color:'#c1ff72'}}></i>
                <span className='saver_header_text'>Super Offers</span>
            </div>
            <span className='seperator'>|</span>
            <div className='new_introduced'>
                <Button className="advertise_button">List your property/Packages</Button>
            </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="login_col">
            <span className="login_btn user_btn">Login</span>
            <span className="register_btn user_btn">Register</span>
                <Button className='ccl_btn language_btn'>EN</Button>
                <Button className='ccl_btn curr_btn'> $INR</Button>
                <span class="flag-icon flag-icon-in flag-icon-rounded"></span>

        </Col>
    </Row>
    )
};

export default User;