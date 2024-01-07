import React from 'react';
import './about_advantage.scss'

const AboutAdvantage = ({image, title, about}) => {
    return (
        <div className="advantage_about_wrapper">
            <img src={image} alt="photo"/>
            <div className="advantage_about_title">
                <h5>{title}</h5>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default AboutAdvantage;