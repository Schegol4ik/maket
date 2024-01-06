import React, {useState} from 'react';
import Header from "./components/header/header";
import Certificates from "./components/certificates/certificates";
import Products from "./components/products/products";
import './App.scss'
import prod_1 from './assets/images/prod1.svg'
import prod_2 from './assets/images/prod2.svg'
import prod_3 from './assets/images/prod3.svg'
import prod_4 from './assets/images/prod4.svg'
import prod_5 from './assets/images/prod5.svg'
import prod_6 from './assets/images/prod6.svg'
import box1 from './assets/images/box1.svg'
import box2 from './assets/images/box2.svg'
import box3 from './assets/images/box3.svg'
import Boxes from "./components/boxes/boxes";

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
    const [box, setBox] = useState([
        {
            image: box1,
            title: 'You Order',
            about: 'Design and order boxes in a few clicks.'
        },
        {
            image: box2,
            title: 'We Proof',
            about: 'Approve your designs before production.'
        },
        {
            image: box3,
            title: 'We Print & Ship',
            about: 'Your order gets printed and shipped with tracking.'
        },
    ])
    return (
        <div className='app'>
            <Header/>
            <Certificates/>
            <Products product={product}/>
            <Boxes box={box}/>
        </div>
    );
};

export default App;