import React from 'react'
import './style.css'
import blackLogo from '../../images/logo_big_black.png'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <body>
      <div id='fixed'>
        <section id="sideTab">
          <img id='sideTab-logo' src={blackLogo}/>
        </section>
        <header>
          <div id='header-arrows'>
            <IoIosArrowBack
              color='rgb(120, 120, 120)'
              size='2.1vw'
            />
            <IoIosArrowForward
              color='rgb(120, 120, 120)'
              size='2.1vw'
            />
          </div>

          <ul id='header-list'>
            <li>
              <Link to='/sign_up' id='header-list-sign_up'>Sign up</Link>
            </li>

            <li>
              <Link to='/sign_up' id='header-list-login'>Login</Link>
            </li>
          </ul>
        </header>
      </div>
      <main>
        f
      </main>
    </body>
  )
}

export default Home