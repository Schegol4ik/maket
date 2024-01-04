import React from 'react';
import Header_bar from '../header_bar/header_bar'
import './header.scss'
import logo from '../../assets/images/Rectangle.svg'
import frame from '../../assets/images/Frame.svg'
import basket from '../../assets/images/Rectangle (1).svg'

const Header = () => {
    return (
        <div>
            <div className='header_wrapper'>
                <img src={logo} alt="logo"/>
                <div className="header_navigation">
                    <a href="#"><img src={frame} alt="frame"/> Start your design</a>
                    <a href="#">All products</a>
                    <a href="#">Inspiration</a>
                    <a href="#">About</a>
                </div>
                <div className="header_basket">
                    <span>Account</span>
                    <img src={basket} alt="basket"/>
                </div>
            </div>
            <Header_bar/>
        </div>

    );
};

export default Header;