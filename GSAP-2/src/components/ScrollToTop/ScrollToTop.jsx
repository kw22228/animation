import React from 'react';
import * as s from './ScrollToTop.style';
import handleScrollUp from '../../utils/handleScrollUp';

import Arrow from '../../assets/arrow-up.svg';

const ScrollToTop = () => {
    return (
        <s.Up onClick={() => handleScrollUp('#home')}>
            <img src={Arrow} alt="To top" />
        </s.Up>
    );
};

export default ScrollToTop;
