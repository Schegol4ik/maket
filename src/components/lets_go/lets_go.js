import React from 'react';
import './lets_go.scss'

const LetsGo = () => {
    return (
        <div className='lets_go'>
            <h3>Let`s get to it</h3>
            <div className="lets_go_buttons">
                <button className='btn1'>Start your design</button>
                <button className='btn2'>Browse all products</button>
            </div>
        </div>
    );
};

export default LetsGo;