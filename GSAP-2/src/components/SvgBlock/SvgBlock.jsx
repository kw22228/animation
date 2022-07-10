import React from 'react';
import * as s from './SvgBlock.style';

const SvgBlock = ({ svg, alt }) => {
    const SvgIcon = require(`../../assets/${svg}`).default;

    return (
        <s.RightBlock>
            <img src={SvgIcon} alt={alt} />
        </s.RightBlock>
    );
};

export default SvgBlock;
