import React from 'react';
import { useState } from 'react';

import './style.scss';
import { images } from '../../data';

const GalleryItem = ({ src, category, subtitle, title, updateActiveImage, index }) => {
    return (
        <div className="gallary-item-wrapper">
            <div />
            <div className="gallary-item">
                <div className="gallary-item-info">
                    <h1 className="gallary-info-title">{title}</h1>
                    <h6 className="gallary-info-subtitle">{subtitle}</h6>
                    <p className="gallary-info-category">{category}</p>
                </div>
                <div //
                    className="gallary-item-image"
                    style={{
                        backgroundImage: `url(${src})`,
                    }}
                ></div>
            </div>
            <div />
        </div>
    );
};

const Gallary = () => {
    const [activeImage, setActiveImage] = useState(1);

    return (
        <section className="section-wrapper gallary-wrap">
            <div className="gallary">
                <div className="gallary-counter">
                    <span>{activeImage}</span>
                    <span className="divider" />
                    <span>{images.length}</span>
                </div>

                {images.map((image, index) => {
                    return (
                        <GalleryItem //
                            key={image.src}
                            index={index}
                            {...image}
                            updateActiveImage={index => setActiveImage(index + 1)}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Gallary;
