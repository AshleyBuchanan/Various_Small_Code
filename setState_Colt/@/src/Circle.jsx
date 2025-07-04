import React, {useState} from "react";
import './Circle.css';

const getRandom = (min=10,max=90) => {
    return Math.random()*(max-min)+min;
}

const Circle = ({color, idx}) => {
    const [pos, setPos] = useState({x: getRandom(), y: getRandom()})
    
    const moveCircle = () => {
        setPos({x:getRandom(), y:getRandom()})
    }

    return (
        <div
            onClick={() => moveCircle()}
            className="Circle"
            style={{
                backgroundColor: color,
                position: 'absolute',
                top: `${pos.y}vh`,
                left: `${pos.x}vw`
            }}
        >{idx + 1}
        </div>
    )
}

export default Circle;