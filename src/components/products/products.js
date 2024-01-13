import React from 'react'
import './products.scss'
import Product from "../product/product";


const Products = ({product}) => {
    return (
        <div className='products'>
            <div className='app_container'>
                <div className="products_wrapper">
                    <div className="products_header">
                        <h3>Products you can customize</h3>
                        <button>Browse all products</button>
                    </div>
                    <div className="products_about">
                        {product.map(({img, title, about, price}) => <Product key={title}
                                                                              img={img} title={title} about={about}
                                                                              price={price}/>)}
                    </div>
                    <div className="products_footer">
                        <span>Need unbranded stock items?</span>
                        <button>Shop stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;