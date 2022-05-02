import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsFillCursorFill } from 'react-icons/bs'
import { Button } from './Button';
import './NavBar.css'
import { IconContext } from 'react-icons/lib'

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)
  return (
    <>
    <IconContext.Provider value = {{color: '#fff'}}>
       <div className="navbar">
         <div className="navbar-container container">
           <Link to = '/' className="navbar-logo" onClick={closeMobileMenu}>
             <BsFillCursorFill className='navbar-icon' />
             Prosperi.io
           </Link>
           <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to = '/' className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to = '/' className="nav-links" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to = '/' className="nav-links" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to='/' className="btn-link" >
                    <Button buttonStyle = 'btn--outline'>Sign Up</Button>
                  </Link>
                ): (
                  <Link to='/' className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline'
                            buttonSize='btn--mobile'
                    >Sign up</Button>
                  </Link>
                )}
              </li>
           </ul>
         </div>
       </div>
       </IconContext.Provider>
    </>
  )
}

export default NavBar