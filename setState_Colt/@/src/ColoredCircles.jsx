import React, {useState}  from "react";
import ColorButtons from "./ColorButtons";
import Circle from "./Circle";

const ColoredCircles = () => {
    const [circles, setCircles] = useState([]);

    const addCircle = (color) => {
        setCircles(circles => [...circles, color])
    }

    return (
        <>
            <ColorButtons addCircle={addCircle}/>
            <div>
                {circles.map( (color, idx) => (
                    <Circle 
                        color={color} 
                        idx={idx} 
                        key={idx} 
                    />
                ))}

            </div>
        </>
    )
}

export default ColoredCircles;