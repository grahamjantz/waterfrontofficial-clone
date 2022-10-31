import React, {useState} from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll';
import { Link as RSLink } from 'react-scroll'

import './Navbar.css'
// import wfBlackLogo from '../../images/textures/RA/waterfront-red-logo.1.png'
import wfRedLogo from '../../images/textures/RA/wf-logo.1.png'
import blackRip from '../../images/textures/blackRipTransition.1.png'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaAngleDown } from "react-icons/fa";
// import { BiLogInCircle } from "react-icons/bi";
// FaShoppingCart <-- putback in import from font awesome when you need shopping cart icon

const ranNum = () => {
    return Math.floor(Math.random() * 10000);
  }

const navArr = [
    {
        id: ranNum(),
        text: 'HOME',
        path: '/home',
        offset: 0,
    },
    // {
    //     id: ranNum(),
    //     text: 'MERCH',
    //     path: '/merch',
    //     offset: 0,
    // },
    {
        id: ranNum(),
        text: 'ABOUT',
        path: '/about',
        offset: 0,
    },
    {
        id: ranNum(),
        text: 'LISTEN',
        path: '/listen',
        offset: 0,
    },
    {
        id: ranNum(),
        text: 'WHAT\'S NEXT',
        path: '/whats-next',
        offset: 0,
    },
    {
        id: ranNum(),
        text: 'PRESS',
        path: '/press',
        offset: 0,
    },
    {
        id: ranNum(),
        text: 'EPK',
        path: '/epk',
        offset: 0,
    },
]


const size = 25;

const Navbar = () => {    

    const [navTop, setNavTop] = useState('-500px')
    const [navMenuClass, setNavMenuClass] = useState('inactive')

    const path = useLocation().pathname;
    const location = path.split('/')[1];
    const navigate = useNavigate();
    const scroller = Scroll.scroller;

    const handleClick = () => {
        navTop === '-500px' ? setNavTop('0px') : setNavTop('-500px')
        navMenuClass === 'inactive' ? setNavMenuClass('active') : setNavMenuClass('inactive')
    }


  const scrollToAnchor = () => {
    scroller.scrollTo('anchor', {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50
    });
  };

  const goToPageAndScroll = async (page, anchor) => {
    await closeMobile();
    await navigate(page);
    await scroller.scrollTo(anchor, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50
    });
  };

  const closeMobile = () => {};

    const navMap = navArr.map((item) => {
        return (
            <li key={item.id}>
                {location === item.path ? (
                    <button
                        className='nav-btn rs-link'
                        to={`${item.text}`} 
                        spy={true} 
                        smooth={true} 
                        offset={item.offset} 
                        duration={500}
                        activeClass='active'
                        onClick={goToPageAndScroll(item.path, item.text)}
                    >
                        {item.text}
                    </button>
                ) : (
                    <NavLink 
                        to={`${item.path}`} 
                        className='nav-btn' 
                        onClick={handleClick}
                    >
                        {item.text}
                    </NavLink>
                )}
                {/* <RSLink
                    to={`${item.text}`} 
                    spy={true} 
                    smooth={true} 
                    offset={item.offset} 
                    duration={500}
                    activeClass='active'
                >
                    <NavLink to={`${item.path}`} className='nav-btn' onClick={handleClick}>
                        {item.text}
                    </NavLink>
                </RSLink> */}
            </li>
        )
    })


    return (
        <>
        <div className='header'>
            <Link to='/home' style={{ display: 'flex', justifyContent: 'center'}}>
                <img src={wfRedLogo} alt='waterfront black logo' className='wf-red-logo' />
            </Link>
            <div className={`nav-menu`} onClick={handleClick}>
                <span className={navMenuClass}></span>
                <span className={navMenuClass}></span>
                <span className={navMenuClass}></span>
            </div>
            <nav className='nav' style={{top: navTop}}>
                <ul className='navbar'>
                    {navMap}
                </ul>
            <div className='subnav'>
                <a href='https://www.instagram.com/waterfrontofficial/' target='_blank' rel="noreferrer" >
                    <FaInstagram size={size}/>
                </a>
                <a href='https://www.facebook.com/waterfrontbandofficial' target='_blank' rel="noreferrer" >
                    <FaFacebook size={size} />
                </a>
                <a href='https://twitter.com/WFofficialband' target='_blank' rel="noreferrer" >
                    <FaTwitter size={size} />
                </a>
                <a href='https://www.youtube.com/channel/UCPLUW_woeKR81y2ORqJIcXg' target='_blank' rel="noreferrer" >
                    <FaYoutube size={size} />
                </a>
                {/* <button>
                    <FaShoppingCart size={size} />
                </button>
                <button>
                    <BiLogInCircle size={size} />
                </button> */}
            </div>
            </nav>
            {/* <img src={blackRip} alt='' className='black-header-rip1'/> */}
        </div>
        <div className='header-footer'>
            <FaAngleDown className='arrow' size={50}/>
            <img src={blackRip} alt='' className='black-header-rip'/>
        </div>
        </>
    )
}

export default Navbar