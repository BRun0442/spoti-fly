import React from 'react'
import './style.css'
import blackLogo from '../../images/logo_big_black.png'

function Login() {
  return (
    <body id='login'>
      <main id="login-container">
        <section>
          <div className="input-container">
            <label className='input-text'>Email address or user name</label>
            <input 
              className="input" 
              placeholder='Email address or user name'
            />
          </div>

          <div className="input-container">
            <label className='input-text'>Password</label>
            <input 
              className="input"
              placeholder="Password"
            />
          </div>
        </section>
        
        <section id='login-interactions'>
          <label id='forgot-password'>Forgot your password?</label>

          <div id='login-verifications'>
            <div id='login-checkbox'>
              <div id='checkbox-container'>
                <input type='checkbox'/>
                <span id='checkmark'/>
              </div>
              <label id='remember-me'>Remember me</label>
            </div>

            <button id='login-button'>Login</button>
          </div>
        </section>
      </main>

      
    </body>
  )
}

export default Login