import React from 'react';
import About_box from "../about_box/about_box";
import './boxes.scss'

const Boxes = ({box}) => {
    return (
        <div className='boxes'>
            <div className='app_container'>
                <div className="boxes_wrapper">
                    <h3>Fast and easy custom boxes your customers will love</h3>
                    <div className="box_wrap">
                        {box.map(({image, title, about}) => <About_box about={about} title={title} image={image}
                                                                       key={title}/>)}
                    </div>
                    <button>Start your design</button>
                </div>
            </div>
        </div>
    );
};

export default Boxes;