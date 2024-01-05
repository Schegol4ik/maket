import React, {useState} from 'react';
import Header from "./components/header/header";
import Certificates from "./components/certificates/certificates";
import Products from "./components/products/products";
import './App.scss'
import prod_1 from './assets/images/Rectangle (1) (1).svg'
import prod_2 from './assets/images/Rectangle (2) (1).svg'
import prod_3 from './assets/images/Rectangle (3) (1).svg'
import prod_4 from './assets/images/Rectangle (4) (1).svg'
import prod_5 from './assets/images/Rectangle (5) (1).svg'
import prod_6 from './assets/images/Rectangle (6).svg'

const App = () => {

    const [product, setProduct] = useState([
        {
            img: prod_1,
            title: 'Custom Carton Boxes',
            about: 'Create a clean brand presentation with this custom carton box.',
            price: '10.44'
        },
        {
            img: prod_2,
            title: 'Custom Boxes',
            about: 'A stylish and strong corrugated cardboard box.',
            price: ''
        },
        {
            img: prod_3,
            title: 'Custom Poly Mailers',
            about: 'A fully custom high quality self sealing poly mailer.',
            price: ''
        },
        {
            img: prod_4,
            title: 'Custom Tape',
            about: 'High quality custom tape to seal your shipping boxes during delivery.',
            price: '12.16'
        },
        {
            img: prod_5,
            title: 'Custom Stickers',
            about: 'Add personality to your packages with custom stickers.',
            price: '0.41'
        },
        {
            img: prod_6,
            title: 'Custom Tissue Paper',
            about: 'The perfect addition to branding your package.',
            price: '6.54'
        },
    ])

    return (
        <div className='app'>
            <Header/>
                <Certificates/>
                <Products product={product}/>

        </div>
    );
};

export default App;