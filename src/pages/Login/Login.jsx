import React, {useState, useContext} from 'react'
import './style.css'
import loginAuthentication from '../../services/user'
import { userContext } from '../../contexts/userAccount';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setEmailContext } = useContext(userContext);
  const { setPasswordContext } = useContext(userContext);

  return (
    <body id='login'>
      <main id="login-container">
        <section>
          <div className="input-container">
            <label className='input-text'>Email address or user name</label>
            <input 
              className="input" 
              placeholder='Email address or user name'
              onChange={event => {setEmail(event.target.value)}}
            />
          </div>

          <div className="input-container">
            <label className='input-text'>Password</label>
            <input 
              className="input"
              placeholder="Password"
              onChange={event => {setPassword(event.target.value)}}
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

            <button 
              id='login-button'
              onClick={() => {
                console.log()
                loginAuthentication(email, password)
              }}
            >
              Login
            </button>
          </div>
        </section>
      </main>

      
    </body>
  )
}

export default Login