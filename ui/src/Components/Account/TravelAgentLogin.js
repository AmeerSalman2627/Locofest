import { Row } from 'react-bootstrap';
// import $ from 'jquery';
import { useForm } from "react-hook-form";
// import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';

const TravelAgentLogin = () => {

    const [showpwd, setShowPwd] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const login = (data) => {
        console.log(data);
        // if(data !== '' || data !== null){
        //     $('.Personal_Login_Form').attr('hidden', true);
        //     $('.after_login_section').attr('hidden', false);
        //     $('.nav-justified').attr('hidden', true);
        // }
        
    }

    return (
        <Row className='agent_login_section'>
            <form className='agent_Login_Form' onSubmit={handleSubmit(login)}>
                <div className='logo_row'>
                    <p className="sign_in_text">Travel Agent Sign In</p>
                </div>
                <div className='loggin-option-section'>
                    <div>
                        <input type="radio" name="options" id="Owner" className='radio-input' value="owner" checked/>
                        <lable htmlFor="Owner">Owner</lable>
                    </div>
                    <div>
                        <input type="radio" name="options" id="member" className='radio-input' value="member" />
                        <lable htmlFor="member">Member</lable>
                    </div>
                </div>
                <div className="input-group">
                    <input type="text" id="agencyname" name="agencyname" {...register("agencyname", { required: true })}
                        aria-invalid={errors.agencyname ? "true" : "false"}
                    />
                    <label htmlFor="agencyname">Agency ID</label>
                    {errors.agencyname?.type === 'required' && <p className="form_error" role="alert">Agency name is required</p>}
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
            <div className='tnc_section' style={{ marginTop: '10px' }}>
                <p style={{ textAlign: 'center' }}>New to Locofest? Register your agency</p>
                <p>By proceeding, you agree to <span className="privacy">Locofest's  Privacy Policy</span>, <span className='agreement'>User Agreement</span> and <span className="tnc">T&Cs</span></p>
            </div>
        </Row>
    )
}

export default TravelAgentLogin;