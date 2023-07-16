import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css";
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is SIID?</a></p>
    <p><a href='#possibility'>App</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoggedin,setIsLoggedin] = useState(true);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      
        <div className="gpt3__navbar-sign">
        <a href='/SignUpPage'>Sign in </a>
        <Link  onMouseOver={(e) => e.target.style.color = 'DarkBlue'}
      onMouseOut={(e) => e.target.style.color = 'White'} className='SignUpbtn' to="../../SignUpPage">Sign up</Link> 
      </div> 
      
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button>
                  <Link onMouseOver={(e) => e.target.style.color = 'DarkBlue'}
                    onMouseOut={(e) => e.target.style.color = 'White'} to="../../SignUpPage" props={setIsLoggedin}>Sign up</Link> {/* Use Link instead of button */}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
