import React from 'react';
import './Die.css'

const Die = ({val, idx}) => {
    return (
        <div className="die" key={idx}>
            {val}
        </div>
    )
}

export default Die;//RRuVQbMPInM