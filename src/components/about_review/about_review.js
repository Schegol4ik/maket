import React from 'react';
import './about_review.scss'

const AboutReview = ({images, review, names, text}) => {
    return (
        <div className='about_review_wrapper'>
            <div className="about_review_images">
                <img src="" alt="images"/>
                <img src="" alt="images"/>
            </div>
            <div className="about_review">
                <p>{review}</p>
                <div className="about_review_profile">
                    <img src="" alt="photo"/>
                    <div className="profile_name">
                        <h6>{names}</h6>
                        <span>{text}</span>
                    </div>
                    <button>Their story</button>
                </div>
            </div>
        </div>
    );
};

export default AboutReview;