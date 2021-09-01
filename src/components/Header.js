import React from 'react'
import '../styles/Header.css'
function Header() {
    return (
        <div className='header'>
            <nav className='nav-bar'>
                <a href="#index.html">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix-Logo" className='netflix-logo' />
                </a>
               
                <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="netflix-avatar" className="netflix-avatar"/>
            </nav>
        </div>
    )
}

export default Header
