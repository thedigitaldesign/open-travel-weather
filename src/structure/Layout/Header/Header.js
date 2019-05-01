import React, {  } from 'react'

// Components
import Logo from '../../UI/Logo/Logo'
import Navigation from './Navigation/Navigation'

const Header = (props) => (
    <nav className={`navbar navbar-expand-sm bg-dark navbar-dark mb-4 fixed-top`}>
        <Logo />
        {/* <button className="navbar-toggler" type="button" onClick={props.openMobileNav}>
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <Navigation />
    </nav>
)

export default Header
