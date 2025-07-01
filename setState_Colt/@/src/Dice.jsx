import React, {useState} from "react";
import Die from "./Die";
import Title from "./Title"
import './Dice.css';

const Dice = ({ numDice=6, title='Main Game', maxVal=6 }) => {
    const [numbers, setNumbers] = useState([])
    
    const rollDice = () => {
        setNumbers(Array.from({ length:numDice }))
        setNumbers(numbers => (
            numbers.map(n => Math.floor(Math.random()*maxVal)+1 )
        ))
    }
    return (
        <>
            <div>
                <Title title={title}></Title>
                <div className="dice">
                    {numbers ? numbers.map((num, idx) => <Die val={num} key={idx}></Die>) : ''}
                </div>
                <div className="btn-div">
                    <button className="btn" onClick={rollDice}>Roll</button>
                </div>
            </div>
        </>

    )
}

export default Dice;