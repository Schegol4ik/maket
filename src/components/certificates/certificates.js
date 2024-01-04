import React from 'react';
import './certificates.scss'
import shop from '../../assets/images/Rectangle (3).svg'
import amazon from '../../assets/images/Rectangle (4).svg'
import eco from '../../assets/images/Rectangle (5).svg'


const Certificates = () => {
    return (
            <div className="certif_wrapper">
                <div className="certif_about">
                    <img src={shop} alt="logo_sponsor"/>
                    <p>Shopify Integrated</p>
                </div>
                <div className="certif_about">
                    <img src={amazon} alt="logo_sponsor"/>
                    <p>Amazon Certified</p>
                </div>
                <div className="certif_about">
                    <img src={eco} alt="logo_sponsor"/>
                    <p>{'Eco-Frie' + '\n' + 'ndly'}</p>
                </div>
            </div>
    );
};

export default Certificates;