import React from 'react';
import Product from "../product/product";

const Products = () => {
    return (
            <div className="products_wrapper">
                <div className="products_header">
                    <h3>Products you can customize</h3>
                    <button>Browse all products</button>
                </div>
                <div className="about_products">
                    <Product/>
                </div>
            </div>
    );
};

export default Products;