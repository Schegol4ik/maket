import React from 'react';
import './reviews.scss'
import AboutReview from "../about_review/about_review";

const Reviews = () => {
    return (
        <div className='reviews'>
            <div className="app_container">
                <h3>Merchants love Arka</h3>
                <div className="reviews_wrapper">
                    <div className="reviews_header">
                        <img src="" alt="logo"/>
                        star rating
                    </div>
                    <div className="reviews_about">
                        <AboutReview/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;