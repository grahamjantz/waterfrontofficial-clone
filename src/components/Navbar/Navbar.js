import React, {useState, useEffect} from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import * as Scroll from 'react-scroll';
import { Link as RSLink } from 'react-scroll'

import './Navbar.css'

import wfRedLogo from '../../images/textures/RA/wf-logo.1.png'
import blackRip from '../../images/textures/blackRipTransition.1.png'
import drumsBrewhouse from '../../images/photos/drumsBrewhouse.1.jpg'

import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaAngleDown, FaAngleUp, FaSpotify } from "react-icons/fa";

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
        text: 'MERCH',
        path: '/merch',
        offset: 0
    },
    {
        id: ranNum(),
        text: 'LISTEN',
        path: '/listen',
        offset: 0,
    },
    // {
    //     id: ranNum(),
    //     text: 'WHAT\'S NEXT',
    //     path: '/whats-next',
    //     offset: 0,
    // },
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

  const goBackToTop = (anchor) => {
    scroller.scrollTo(anchor, {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: 0
    })
  }

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
  const scrollToContent = () => {
    console.log(location)
    scroller.scrollTo(location.toUpperCase(), {
        duration: 1000,
        delay: 100,
        smooth: true,
        offset: -20
    })
  }

  const headerStyle = {
    backgroundImage: drumsBrewhouse
  }

  const [blackTear, setBlackTear] = useState(blackRip)

  useEffect(() => {
    const blackRipFromLocalStorage = localStorage.getItem('black-rip')


    if (blackRipFromLocalStorage) {
      setBlackTear(blackRipFromLocalStorage)
      console.log('got black-rip from local storage')
    } else {
      localStorage.setItem('black-rip', blackRip)
      console.log('set black-rip to local storage')
    }
  },[])

    return (
        <>
            <Element name='header' className='header' style={headerStyle}>
                <div className='header-div'>
                    <nav className='nav' style={{top: navTop}}>
                        <ul className='navbar'>
                            {
                                window.innerWidth > 750 ? renderDesktopNav() : renderMobileNav()
                            }
                        </ul>
                        <div className='subnav'>
                            <a href='https://open.spotify.com/artist/0iFZ2vkAsRYe3J1kE9XjSn?si=4L_8_0o0SCuH5Mi4cmWvjQ' target='_blank' rel="noreferrer" >
                                <FaSpotify size={size}/>
                            </a>
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
                    <Link to='/home' style={{ display: 'flex', justifyContent: 'center'}}>
                        <img src={wfRedLogo} alt='waterfront black logo' className='wf-red-logo' />
                    </Link>
                    <div className={`nav-menu`} onClick={handleClick}>
                        <span className={navMenuClass}></span>
                        <span className={navMenuClass}></span>
                        <span className={navMenuClass}></span>
                    </div>
                    <img src={blackRip} alt='' className='black-header-rip'/>
                </div>

                <img src={blackTear} alt='' className='black-header-rip-2'/>
            </Element>
            <div className='header-footer'>
                <FaAngleDown className='arrow' size={50} onClick={scrollToContent}/>
            </div>
            <div className='arrow-up' onClick={() => goBackToTop('header')}>
                <FaAngleUp size={50}/>
                <h4>Top</h4>
            </div>
        </>
    )
}

export default Navbar