import { Row } from 'react-bootstrap';
import airindia from '../../Assest/Images/Partners/airindia.svg';
import cheap from '../../Assest/Images/Partners/cheap.svg';
import itc from '../../Assest/Images/Partners/itc.svg';
import mandarin from '../../Assest/Images/Partners/mandarin.svg';
import singapore from '../../Assest/Images/Partners/singapore.svg';
import staralliance from '../../Assest/Images/Partners/staralliance.svg';
import trivago from '../../Assest/Images/Partners/trivago.svg';

const Partners = () => {
    return (
        <Row className='partners_section'>
            <div className='partner_header'>
                <h3 className='partner_title'>Our partners</h3>
            </div>
            <img src={airindia} alt="Air India" className='partner_icon' />
            <img src={cheap} alt="Cheap" className='partner_icon' />
            <img src={itc} alt="Itc" className='partner_icon' />
            <img src={mandarin} alt="Mandarin" className='partner_icon' />
            <img src={singapore} alt="Singapore" className='partner_icon' />
            <img src={staralliance} alt="Star Alliance" className='partner_icon' />
            <img src={trivago} alt="Trivago" className='partner_icon' />
        </Row>
    )
}

export default Partners