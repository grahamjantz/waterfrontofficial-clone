import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import wfBlackLogo from '../../images/textures/Waterfront-logo-black-texture.png'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaShoppingCart } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";



const ranNum = () => {
    return Math.floor(Math.random() * 10000)
}

const navArr = [
    {
        id: ranNum(),
        text: 'HOME',
        path: '/home'
    },
    {
        id: ranNum(),
        text: 'MERCH',
        path: '/merch'
    },
    {
        id: ranNum(),
        text: 'ABOUT',
        path: '/about'
    },
    {
        id: ranNum(),
        text: 'LISTEN',
        path: '/listen'
    },
    {
        id: ranNum(),
        text: 'WHAT\'S NEXT',
        path: '/whats-next'
    },
    {
        id: ranNum(),
        text: 'PRESS',
        path: '/press'
    },
    {
        id: ranNum(),
        text: 'EPK',
        path: '/epk'
    },
]

const navMap = navArr.map((item) => {
    return (
        <li key={item.id}>
            <NavLink to={`${item.path}`} className='nav-btn'>
                {item.text}
            </NavLink>
        </li>
    )
})

const size = 25;

const Navbar = () => {
    return (
        <div className='header'>
            <Link to='/home'><img src={wfBlackLogo} alt='waterfront black logo' className='wf-black-logo' /></Link>
            <nav className='nav'>
                <ul className='navbar'>
                    {navMap}
                </ul>
            </nav>
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
                <button>
                    <FaShoppingCart size={size} />
                </button>
                <button>
                    <BiLogInCircle size={size} />
                </button>
            </div>
        </div>
    )
}

export default Navbar