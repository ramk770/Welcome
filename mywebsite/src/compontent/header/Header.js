import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <h1>DEVELOP<span>ER</span></h1>
        </div>
        <div className='header_right'>
            <Link to="Abouts" smooth={true} duration={500} >
                <h4>About Me</h4>
            </Link>
            <Link to="Skill" smooth={true} duration={500} >
                <h4>Skills</h4>
            </Link>
            <Link to="Project" smooth={true} duration={500} >
                <h4>Project</h4>
            </Link>
            <Link to="exp" smooth={true} duration={500} >
                <h4>Experiences</h4>
            </Link>
            <Link to="contact" smooth={true} duration={500} >
                <h4>Contact</h4>
            </Link>
            <h4 className='header_btn'><a href='https://www.linkedin.com/in/ramanarayanan-k-it-83135626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>join link </a></h4>
        </div>
    </div>
  )
}

export default Header;