import {Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../Assest/Images/Logo/LocofestLogo.png';

const Navigation = () => {
    return (
        <Row className="user-header-section">
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" className='mob_home_page_logo'/>
                </Link>
                <button className="navbar-toggler loco_mob_icon" type="button" data-bs-toggle="collapse"
                    data-bs-target="#locofestNavbar" aria-controls="locofestNavbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <div className="collapse navbar-collapse" id="locofestNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 loco_nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Travel</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/destination" className="nav-link" href="#">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Staycations</Link>
                            </li>
                            {/* <li className='nav-item logo_desktop'> */}
                            <Link to="/" className="navbar-brand logo_desktop" href="#">
                                <img src={logo} alt="Logo" className='home_page_logo'/>
                            </Link>
                            {/* </li> */}
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Rentals</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Forex</Link>
                            </li>
                        </ul> 
                    </div>
                </div>
            </nav>
        </Row>
    )
};

export default Navigation;