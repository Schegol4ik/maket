import React from 'react';
import './header_bar.scss'
import main_image from '../../assets/images/Rectangle (2).svg'

const Header_bar = () => {
    return (
        <div className='container'>
            <div className='bar_wrapper'>
                <div className="bar_main">
                    <h1>Fast and easy custom boxes your customers will love</h1>
                    <p>Fastest turnaround. Best prices instantly. Dieline design help available.</p>
                    <button>Start your design</button>
                </div>
                <img src={main_image} alt="bar_image"/>
            </div>

        </div>
    );
};

export default Header_bar;