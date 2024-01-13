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
import img1 from './assets/images/image1_1.svg'
import img1_2 from './assets/images/image1_2.svg'
import img2 from './assets/images/image2_1.svg'
import img2_2 from './assets/images/image2_2.svg'
import img3 from './assets/images/image3_1.svg'
import img3_2 from './assets/images/image3_2.svg'
import avatar1 from './assets/images/Jesse.svg'
import avatar2 from './assets/images/Leslie.svg'
import avatar3 from './assets/images/Anthony.svg'
import Boxes from "./components/boxes/boxes";
import Advantage from "./components/advantage/advantage";
import SizeBox from "./components/size_box/size_box";
import Reviews from "./components/reviews/reviews";
import LetsGo from "./components/lets_go/lets_go";
import Footer from "./components/footer/footer";

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
    const [review, setReview] = useState([
        {
            img_1: img1,
            img_2: img1_2,
            title: '“Arka’s team is super fast, knowledgeable, and easy to work with - highly recommended!”',
            avatar: avatar1,
            name: 'Jesse',
            quote: 'Subscription Catalyst',
        },
        {
            img_1: img2,
            img_2: img2_2,
            title: '“I really like Arka because it’s a really nice box, I’ve gotten a lot of compliments on&nbsp;it.”',
            avatar: avatar2,
            name: 'Leslie',
            quote: 'Burgundy Fox',
            flex: 'row-reverse',
            padding: '55px 0'
        },
        {
            img_1: img3,
            img_2: img3_2,
            title: '“I love how easily it was to customize the box, and you guys were more affordable.”',
            avatar: avatar3,
            name: 'Anthony',
            quote: 'Lipstick Junkie',
        },
    ])


    return (
        <div className='app'>
            <Header/>
            <Certificates/>
            <Products product={product}/>
            <Boxes box={box}/>
            <Advantage/>
            <SizeBox/>
            <Reviews reviews={review}/>
            <LetsGo/>
            <Footer/>
        </div>
    );
};

export default App;