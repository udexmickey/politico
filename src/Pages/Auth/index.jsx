import React from 'react'
import useToggle from '../../hooks/useToggle'
import './auth.scss'

export default function Auth() {

  const [classinfo, handleFormDisplay] = useToggle()
  const [pass, passwordShown] = useToggle()
  const [confirmpass, confirmpasswordShown] = useToggle()

  const handleSubmitLogin = (e) => {
    
    console.log('Form submitted');
    e.preventDefault();
  }

  const handleSubmitRegister = (e) => {
    console.log('Form submitted');
    e.preventDefault();
  }

  return (
    <div className='login-page'>
      <div className={`${classinfo && 'active'} container`}>
        <div className="forms">
            <div className="form login">
                <span className="title">Login</span>
                <form action="#">
                    <div className="input-field">
                        <input type="text" placeholder="Enter your email" required />
                        <i className="uil uil-envelope icon"></i>
                    </div>
                    <div className="input-field">
                        <input type={pass ? "text" : "password"} className="password" placeholder="Enter your password" required />
                        <i className="uil uil-lock icon" onClick={passwordShown}></i>
                        { pass ? <i className="uil-eye showHidePw" onClick={passwordShown}></i> : <i className="uil uil-eye-slash showHidePw" onClick={passwordShown}></i>}
                    </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="logCheck" />
                            <label htmlFor="logCheck" className="text">Remember me</label>
                        </div>
                        
                        <a href="/#" className="text">Forgot password?</a>
                    </div>

                    <div className="input-field button">
                        <input type="submit" onClick={handleSubmitLogin} value="Login" />
                    </div>
                </form>

                <div className="login-signup">
                    <span className="text">Not a member?
                        <a href="/#" className={`text signup-link`} onClick={handleFormDisplay}>Signup Now</a>
                    </span>
                </div>
            </div>

            {/* <!-- Registration Form --> */}
            <div className="form signup">
                <span className="title">Registration</span>

                <form action="/#">
                    <div className="input-field">
                        <input type="text" placeholder="Enter your name" required />
                        <i className="uil uil-user"></i>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Enter your email" required />
                        <i className="uil uil-envelope icon"></i>
                    </div>
                    <div className="input-field">
                        <input type={pass ? "text" : "password"} className="password" placeholder="Create a password" required />
                        <i className="uil uil-lock icon" onClick={passwordShown}></i>
                    </div>
                    <div className="input-field">
                        <input type={confirmpass ? "text" : "password"} className="password" placeholder="Confirm a password" required />
                        <i className="uil uil-lock icon" onClick={confirmpasswordShown }></i>
                        { confirmpass ? <i className="uil-eye showHidePw" onClick={confirmpasswordShown}></i> : <i className="uil uil-eye-slash showHidePw" onClick={confirmpasswordShown}></i>}
                    </div>

                    <div className="checkbox-text">
                        <div className="checkbox-content">
                            <input type="checkbox" id="termCon" />
                            <label htmlFor="termCon" className="text">I accepted all terms and conditions</label>
                        </div>
                    </div>

                    <div className="input-field button">
                        <input type="submit" onClick={handleSubmitRegister} value="Signup" /> 
                    </div>
                </form>

                <div className="login-signup">
                    <span className="text">Already a member?
                        <a href="/#" onClick={handleFormDisplay} className={`text login-link`}>Login Now</a>
                    </span>
                </div>
            </div>
        </div>
    </div> 

    </div>
  )
}
