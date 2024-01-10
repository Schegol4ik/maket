import React from 'react';
import './size_box.scss'
import boxsize1 from '../../assets/images/boxSize1.svg'
import boxsize2 from '../../assets/images/boxSize2.svg'

const SizeBox = () => {
    return (
        <div>
            <div className="size_box">
                <div className="app_container">
                    <div className="size_box_wrapper">
                        <div className="size_box_choise">
                            <img src={boxsize1} alt="images"/>
                            <h3>Couldn't find a size you need?</h3>
                            <p>We’ll work directly with you to create a fully branded packaging system.</p>
                            <button>Request a quote</button>
                        </div>
                        <hr/>
                        <div className="size_box_choise">
                            <img src={boxsize2} alt="images"/>
                            <h3>Need a free dieline template?</h3>
                            <p>Let us know what size you need and we'll email an Adobe Illustrator dieline to you within 3-4 business days.</p>
                            <button>Request dieline</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SizeBox;