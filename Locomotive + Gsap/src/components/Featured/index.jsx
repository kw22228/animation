import React from 'react';
import './style.scss';

import photos from '../../data';
const Featured = () => {
    const [firstUrl, secondUrl] = photos;
    return (
        <section className="featured-section">
            <div className="featured-row-layout">
                <h6>green</h6>
                <img src={firstUrl} />
            </div>
            <div className="featured-column-layout">
                <h6>lily</h6>
                <img src={secondUrl} />
            </div>
        </section>
    );
};

export default Featured;
