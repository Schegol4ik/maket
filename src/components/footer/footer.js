import React from 'react';
import logo_footer from '../../assets/images/logo_footer.svg'
import inst from '../../assets/images/inst.svg'
import twitch from '../../assets/images/twitch.svg'
import facebook from '../../assets/images/facebook.svg'
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="app_container">
                <div className="footer_wrapper">
                    <img src={logo_footer} alt="logo_footer"/>
                    <ul>
                        <li><span>Custom Design</span></li>
                        <li><span>All Products</span></li>
                        <li><span>Inspiration</span></li>
                        <li><span>Sustainability</span></li>
                        <li><span>Affiliate Program</span></li>
                        <li><span>Request Custom Quote</span></li>
                        <li><span>Request Dieline</span></li>
                    </ul>
                    <ul>
                        <li><span>About Us</span></li>
                        <li><span>Blog</span></li>
                        <li><span>Partners</span></li>
                        <li><span>Contact Us</span></li>
                        <li><span>FAQ</span></li>
                        <li><span>Terms & Conditions</span></li>
                    </ul>
                    <ul>
                        <li><span>Shopify App</span></li>
                        <li><span>14 Day Free Shopify Trial</span></li>
                        <li><span>BigCommerce</span></li>
                        <li><img src={facebook} alt="facebook"/> <img src={twitch} alt="twitch"/> <img src={inst}
                                                                                                       alt="inst"/>
                        </li>
                    </ul>
                    <ul>
                        <li><span>Get exclusive offers and tips.</span></li>
                        <li><input type="text" placeholder='Your email'/></li>
                        <li>
                            <button>Join instantly</button>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;