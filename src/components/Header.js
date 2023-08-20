import React from "react";
import logo from '../images/logo.svg'
import closeIcon from '../images/icon-close.svg'
import hamburger from '../images/icon-hamburger.svg'

const Header = ()=>{

    function OpenMenu(){
        const MobileNavbar = document.querySelector('.mobile-nav')
        MobileNavbar.classList.remove('active')
    }
    function closeMenu(){
        const MobileNavbar = document.querySelector('.mobile-nav')
        MobileNavbar.classList.add('active')
    }
    return(
    <>
       <header className="header">
       <div className="logo">
            <img src={logo} alt="loopstudios"/>
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
        <img src={hamburger} alt="" onClick={OpenMenu} className="open"/>
       </header>

       <header className='mobile-nav active'>
       <div>
       <img src={logo} alt='' />
        <img src={closeIcon} alt='' onClick={closeMenu}/>
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

export default Header