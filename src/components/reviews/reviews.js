import React from 'react';
import './reviews.scss'
import AboutReview from "../about_review/about_review";
import google from '../../assets/images/google.svg'
import shopify from '../../assets/images/shopify.svg'
import star from '../../assets/images/star.svg'
import polstar from '../../assets/images/polstar.svg'
import low_star from '../../assets/images/low_star.svg'
import low_polstar from '../../assets/images/low_polstar.svg'

const Reviews = ({reviews}) => {

    const repeatCount = 4;
    const repeatedArrayStar = Array(repeatCount).fill(star);
    const repeatedArrayPolStar = Array(repeatCount).fill(low_star);

    return (
        <div className='reviews'>
            <h3>Merchants love Arka</h3>
            <div className="app_container">
                <div className="reviews_wrapper">
                    <div className="reviews_header">
                        <div className="reviews_header_rating">
                            <img src={google} alt="logo"/>
                            <div className='rating_star'>
                                {
                                    repeatedArrayStar.map((item, index) => <img key={index} src={item} alt='star'/>)
                                }
                                <img src={polstar} alt='polstar'/>
                                <span>4.6</span>

                            </div>
                        </div>
                        <div className="reviews_header_rating">
                            <img src={shopify} alt="logo"/>
                            <div className='rating_star'>
                                {
                                    repeatedArrayPolStar.map((item, index) => <img key={index} src={item} alt='star'/>)
                                }
                                <img src={low_polstar} alt='polstar'/>
                                <span>4.6</span>
                            </div>
                        </div>
                    </div>
                    <div className="reviews_about">
                        {
                            reviews.map(({img_1, img_2, title, avatar, name, quote, flex, padding}) =>
                                <AboutReview title={title} avatar={avatar} img_1={img_1}
                                             img_2={img_2} name={name} quote={quote} key={name}
                                             flex={flex} padding={padding}
                                />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;