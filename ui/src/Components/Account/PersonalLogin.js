import { Row } from 'react-bootstrap';

const PersonalLogin = () => {
    return (
        <Row className='personal_login_section'>
            <form className='Personal_Login_Form'>
                <div className='logo_row'>
                    <p className="sign_in_text">Sign In</p>
                </div>
                <div className="input-group">
                    <input type="username" id="username" name="username" required />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-group">
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="password">Password</label>
                </div>
                <p className='fgt_pwd'>Forgot Password?</p>
                <button className="btn submit_btn" type="submit">Sign in</button>
            </form>
            <div className='tnc_section' style={{marginTop:'10px'}}>
                <p style={{textAlign:'center'}}>New to Locofest? Create an account</p>
                <p>By proceeding, you agree to <span className="privacy">Locofest's  Privacy Policy</span>, <span className='agreement'>User Agreement</span> and <span className="tnc">T&Cs</span></p>
            </div>
        </Row>
    )
};

export default PersonalLogin;