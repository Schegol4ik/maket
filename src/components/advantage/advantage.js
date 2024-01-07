import React from 'react';
import './advantage.scss'
import About_advantage from "../about_advantage/about_advantage";
import adv_1 from '../../assets/images/adv1.svg'
import adv_2 from '../../assets/images/adv2.svg'
import adv_3 from '../../assets/images/adv3.svg'

const Advantage = () => {
    return (
        <div className='advantage'>
            <div className="app_container">
                <h3>The Arka advantage</h3>
                <div className="advantage_wrapper">
                    <About_advantage
                        title='Eco-Friendly Material'
                        image={adv_1}
                        about='Order as little as 10, giving you the lowest minimums in the industry at the best prices.'/>
                    <About_advantage
                        title='Full Outside Print'
                        about='Design what you want - no extra cost! Prices include 100% exterior print, change design whenever!'
                        image={adv_2}/>
                    <About_advantage
                        title='Proofing'
                        about='After you order, our internal designers help make sure your designs are 100% ready for printing!'
                        image={adv_3}/>
                </div>
            </div>
        </div>
    );
};

export default Advantage;