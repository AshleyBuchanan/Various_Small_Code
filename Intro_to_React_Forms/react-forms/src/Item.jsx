import React from 'react';
import './Item.css';

const Item = ({id, name, qty}) => {
    return (
        <div className="Item">
            <span className="id">{id}</span>
            <span className="name">{name}</span>
            <span className="qty">qty:{qty}</span>
        </div>
    );
};

export default Item;