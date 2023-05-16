import { Button, Col, Container, Row} from 'react-bootstrap';
import { GrGoogle, GrFacebookOption, GrInstagram } from 'react-icons/gr';
import logo from './../../Assest/Images/Logo/LocofestLogo.png';
import '../../Assest/css/Registration.css';

const UserRegistration = () => {
    return (
        <Container className='user-registration-section'>
            <Row className='user-registration-row'>
                <Row className='user_reg_logo'>
                    <img src={logo} alt="logo" className='logo' />
                    <h3>Create an account</h3>
                </Row>
                <div className="input-group">
                    <input type="text" id="emailaddress" name="emailaddress" required/>
                    <label htmlFor="username">Email Address</label>
                </div>
                <Button className='register_btn'>Register using Email</Button>
                <p>or use one of these options</p>
                <Row style={{margin:'0 auto'}}>
                    <Col lg={4} md={4} sm={4} className='another_reg'>
                        <GrGoogle/>
                    </Col>
                    <Col lg={4} md={4} sm={4} className='another_reg'>
                        <GrFacebookOption/>
                    </Col>
                    <Col lg={4} md={4} sm={4} className='another_reg'>
                        <GrInstagram />
                    </Col>
                </Row>
                <div className='tnc_section' style={{ marginTop: '10px' }}>
                    <p style={{ textAlign: 'center' }}>New to Locofest? Create an account</p>
                    <p>By proceeding, you agree to <span className="privacy">Locofest's  Privacy Policy</span>, <span className='agreement'>User Agreement</span> and <span className="tnc">T&Cs</span></p>
            </div>
            </Row>
        </Container>
    )
}

export default UserRegistration;