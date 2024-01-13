import React from 'react';
import './about_review.scss'

const AboutReview = ({img_1, img_2, title, avatar, name, quote, flex, padding}) => {


    return (
        <div className='about_review_wrapper' style={{flexDirection: flex, padding: padding}}>
            <div className="about_review_images">
                <img src={img_1} alt="images"/>
                <img src={img_2} alt="images"/>
            </div>
            <div className="about_review">
                <p>{title}</p>
                <div className="about_review_profile">
                    <div className="profile_name">
                        <img src={avatar} alt="photo"/>
                        <div className="name_about">
                            <h6>{name}</h6>
                            <span>{quote}</span>
                        </div>
                    </div>
                    <button>Their story</button>
                </div>
            </div>
        </div>
    )
};

export default AboutReview;