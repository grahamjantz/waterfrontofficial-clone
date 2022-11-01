import React, {useState} from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll';
import { Link as RSLink } from 'react-scroll'

import './Navbar.css'
import wfRedLogo from '../../images/textures/RA/wf-logo.1.png'
import blackRip from '../../images/textures/blackRipTransition.1.png'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaAngleDown, FaAngleUp } from "react-icons/fa";

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

    const Element = Scroll.Element;

    const [navTop, setNavTop] = useState('-500px')
    const [navMenuClass, setNavMenuClass] = useState('inactive')

    let path = useLocation().pathname;
    const location = path.split('/')[1];
    const navigate = useNavigate();
    const scroller = Scroll.scroller;

    const handleClick = () => {
        navTop === '-500px' ? setNavTop('0px') : setNavTop('-500px')
        navMenuClass === 'inactive' ? setNavMenuClass('active') : setNavMenuClass('inactive')
    }

  const goToPageAndScroll = async (page, anchor) => {
    await closeMobile();
    await navigate(page);
    await scroller.scrollTo(anchor, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -100
    });
    handleClick();
  };

  const closeMobile = () => {};

  const renderDesktopNav = () => {
    return navArr.map((item) => {
        return (
            <li key={item.id}>
                {location === item.text.toLowerCase() ? (
                        <RSLink
                            className='nav-btn rs-link'
                            to={`${item.text}`} 
                            onClick={() => goToPageAndScroll(item.path, item.text)}
                        >
                            {item.text}
                        </RSLink>
                    ) : (
                        <NavLink 
                            to={`${item.path}`} 
                            className='nav-btn' 
                            onClick={() => goToPageAndScroll(item.path, item.text)}
                        >
                            {item.text}
                        </NavLink>
                    )}
            </li>
        )
    })
  }
  const renderMobileNav = () => {
    return navArr.map((item) => {
        return (
            <li key={item.id}>
                <NavLink to={`${item.path}`} className='nav-btn' onClick={handleClick}>
                    {item.text}
                </NavLink>
            </li>
        )
    })
  }

    return (
        <Element name='nav'>
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
                        {
                            window.innerWidth > 750 ? renderDesktopNav() : renderMobileNav()
                        }
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
                </div>
                </nav>
            </div>
            <div className='header-footer'>
                <FaAngleDown className='arrow' size={50}/>
                <img src={blackRip} alt='' className='black-header-rip'/>
            </div>
            <div className='arrow-up' onClick={() => goToPageAndScroll(location, 'nav')}>
                <FaAngleUp size={50}/>
                <h4>Back To Top</h4>
            </div>
        </Element>
    )
}

export default Navbar