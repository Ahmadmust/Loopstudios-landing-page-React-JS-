import React from 'react'
import logo from '../images/logo.svg'
import {GrFacebook} from 'react-icons/gr'
import {FaTwitter,FaPinterest,FaInstagram} from 'react-icons/fa'

const Footer = ()=> {
  return (
  <>
    <footer>
    <div className='footer-wrapper'>
    <div>
        <img src={logo} />
    </div>
    <div className='footer-nav'>
        <ul>
            <li><button>About</button></li>
            <li><button>Careers</button></li>
            <li><button>Events</button></li>
            <li><button>Products</button></li>
            <li><button>Support</button></li>
        </ul>
    </div>
    </div>
    <div className='footer-wrapper'>
    <div className='nav-icons'>
        <ul>
            <li><GrFacebook /></li>
            <li><FaTwitter /></li>
            <li><FaPinterest /></li>
            <li><FaInstagram /></li>
        </ul>
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
     </div>
 </footer>
  </>
  )
}

export default Footer