import React from 'react';
import * as s from './Card.style';

const Card = ({ name, text, image }) => {
    const Avatar = require(`../../assets/${image}.jpg`).default;

    return (
        <s.Card>
            <s.Image img={Avatar} width="400" height="400" />
            <s.Text>{text}</s.Text>
            <s.Name>{name}</s.Name>
        </s.Card>
    );
};

export default Card;
