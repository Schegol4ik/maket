import React from 'react';
import Header from "./components/header/header";
import Certificates from "./components/certificates/certificates";
import Products from "./components/products/products";
import './App.scss'
const App = () => {
    return (
        <div className='app'>
            <Header/>
            <div className="app_container">
                <Certificates/>
                <Products/>
            </div>

        </div>
    );
};

export default App;