import React from 'react';
import './about_box.scss'

const AboutBox = ({image, title, about }) => {
    return (
        <div className='box_wrapper'>
            <img src={image} alt="picture"/>
            <div className="about_box">
                <h4>{title}</h4>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default AboutBox;