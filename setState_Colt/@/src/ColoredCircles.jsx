import React, {useState}  from "react";
import ColorButtons from "./ColorButtons";
import Circle from "./Circle";

const ColoredCircles = () => {
    const [circles, setCircles] = useState([]);
    const getRandom = (min=10,max=90) => {
        return Math.random()*(max-min)+min;
    }
    const addCircle = (color) => {
        setCircles(circles => [...circles, {color, x:getRandom(), y:getRandom()}])
    }
    const changePosition = idx => {
        setCircles(circles => {
            const copy = [...circles];
            copy[idx].x = getRandom();
            copy[idx].y = getRandom();
            return copy;
        });
    }
    return (
        <>
            <ColorButtons addCircle={addCircle}/>
            <div>
                {circles.map( ({color, x, y}, idx) => (
                    <Circle 
                        changePosition={changePosition}
                        color={color} 
                        idx={idx} 
                        key={idx} 
                        x={x} 
                        y={y}
                    />
                ))}
    
            </div>
        </>
    )
}

export default ColoredCircles;