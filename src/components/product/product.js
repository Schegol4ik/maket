import React from 'react';
import './product.scss'

const Product = ({img, title, about, price}) => {
    return (
        <div className='product_wrapper'>
            <img src={img} alt="photo_product"/>
            <div className="product_about">
                <h5>{title}</h5>
                <div className="product_about_description">
                    <p>{about}</p>
                    {price ? <div className='description_price'>
                        <span>
                            Starting at:
                        </span>
                            <span>
                             ${price}/unit
                        </span>
                        </div>
                        : <span style={{display: "none"}}></span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;