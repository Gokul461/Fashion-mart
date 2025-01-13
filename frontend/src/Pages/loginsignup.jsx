import React from 'react'
import './css/login.css'
const loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="logincontainer">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Username'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
        </div>
          <button>Continue</button>
          <p className='login-login'>Already have an account?<span>Login here</span></p>
          <div className="login-agree">
            <input type='checkbox' name='terms' id='c'/>
            <p>By continuing, I agree to the terms and conditions.</p>
          </div>
      </div>
      
    </div>
  )
}

export default loginsignup
