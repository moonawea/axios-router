import React from "react";
import {Link} from "react-router-dom";
import img from "../assets/logo-small.png"

const Header = () => {
    return (
        <header className={'header-title'}>
            <div className={'logo'}>
                <img src={img} alt=""/>
            </div>
            <div className={'nav-link'}>
                <Link className={'link'} to={'/'}>Home<i className='bx bx-home'></i></Link>
                <Link className={'link'} to={'/search'}>Search <i className='bx bx-search-alt-2'></i></Link>
            </div>
        </header>
    )
}

export default Header;