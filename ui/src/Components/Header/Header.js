import {Container} from 'react-bootstrap';
import './../../Assest/css/Header.css';
import User from './User';
import Navigation from './Navigation';

const Header = () => {
    return(
        <Container fluid className='header_container'>
            <User/>
            <Navigation></Navigation>
        </Container>
    )
};

export default Header;