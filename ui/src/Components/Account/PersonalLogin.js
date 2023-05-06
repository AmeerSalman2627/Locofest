import { Row } from 'react-bootstrap';
import $ from 'jquery';
import { useForm } from "react-hook-form";
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from "react-router-dom";

const PersonalLogin = () => {
    const [showpwd, setShowPwd] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const login = (data) => {
        console.log(data);
        if(data !== '' || data !== null){
            $('.Personal_Login_Form').attr('hidden', true);
            $('.after_login_section').attr('hidden', false);
            $('.nav-justified').attr('hidden', true);
        }
        
    }
    const backToLogin = () => {
        $('.Personal_Login_Form').attr('hidden', false);
        $('.after_login_section').attr('hidden', true);
        $('.nav-justified').attr('hidden', false);
    }
    return (
        <Row className='personal_login_section'>
            <form className='Personal_Login_Form' onSubmit={handleSubmit(login)}>
                <div className='logo_row'>
                    <p className="sign_in_text">Sign In</p>
                </div>
                <div className="input-group">
                    <input type="text" id="username" name="username" {...register("username", { required: true })}
                        aria-invalid={errors.username ? "true" : "false"}
                    />
                    <label htmlFor="username">Username</label>
                    {errors.username?.type === 'required' && <p className="form_error" role="alert">First name is required</p>}

                </div>
                <div className="input-group">
                    <input id="password" name="password" type={showpwd ? "text" : "password"} {...register("password", { required: "Invalid password" })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />

                    <label htmlFor="password">Password</label>
                    {errors.password && <p role="alert" className="form_error">{errors.password?.message}</p>}
                    <i className={showpwd ? 'fa fa-thin fa-eye show_pwd' : 'fa fa-thin fa-eye-slash show_pwd'}
                        onClick={() => setShowPwd(prevState => !prevState)}
                    ></i>
                </div>
                <p className='fgt_pwd mt-2'>Forgot Password?</p>
                <button className="btn submit_btn" type="submit" >Sign in</button>
            </form>
            <Row className='after_login_section' hidden>
                <button className="btn otp_back" type="submit" onClick={backToLogin}><FaArrowLeft />Back</button>
                <div className='user_img mt-2'>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar" />
                    <p className='mt-2'>Welcome Back, UserName!</p>
                </div>
                <div className="otp-section">
                    <p>Please enter the sent OTP</p>
                    <div className="input-group">
                        <input type="text" id="otp" name="otp" required />
                        <label htmlFor="otp">One Time Password</label>

                    </div> 

                    <Link to="/destination" className='verify_otp_link'>
                        <button className="btn otp_verify" type="submit">Verify OTP</button>
                    </Link>
                </div>
            </Row>
            <div className='tnc_section' style={{ marginTop: '10px' }}>
                <p style={{ textAlign: 'center' }}>New to Locofest? Create an account</p>
                <p>By proceeding, you agree to <span className="privacy">Locofest's  Privacy Policy</span>, <span className='agreement'>User Agreement</span> and <span className="tnc">T&Cs</span></p>
            </div>
        </Row>
    )
};

export default PersonalLogin;