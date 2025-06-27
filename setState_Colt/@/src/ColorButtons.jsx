import React from "react";

const ColorButtons = ({addCircle}) => {
    return (
        <>
            <button onClick={() => addCircle('red')}        style={{backgroundColor: 'red'}}        >red  </button>
            <button onClick={() => addCircle('teal')}       style={{backgroundColor: 'teal'}}       >green</button>
            <button onClick={() => addCircle('dodgerblue')} style={{backgroundColor: 'dodgerblue'}} >blue </button>
        </>
    )
}

export default ColorButtons;