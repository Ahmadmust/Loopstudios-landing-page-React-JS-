import React from 'react'
import logo from '../images/logo.svg'
import closeIcon from '../images/icon-close.svg'
const MobileNav = ()=> {
  return (
    <>
      <header className='mobile-nav'>
       <div>
       <img src={logo} alt='' />
        <img src={closeIcon} alt='' />
       </div>
       <nav>
        <ul>
                <li><button>About</button></li>
                <li><button>Careers</button></li>
                <li><button>Events</button></li>
                <li><button>Products</button></li>
                <li><button>Support</button></li>
            </ul>
       </nav>
      </header>
    </>
  )
}

export default MobileNav