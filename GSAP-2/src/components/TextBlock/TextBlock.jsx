import React from 'react';
import * as s from './TextBlock.style';
const TextBlock = ({ topic, title, subText, children }) => {
    return (
        <s.LeftBlock>
            <s.Topic>
                <s.Circle />
                <span>{topic}</span>
            </s.Topic>
            <s.Title>{title}</s.Title>
            <s.SubText>{subText}</s.SubText>
            {children}
        </s.LeftBlock>
    );
};

export default TextBlock;
