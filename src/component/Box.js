import React from 'react';

const Box = (props) => {
    let resultClass = '';
    let resultText = '';

    if (props.title === "computer" && props.result !== "tie" && props.result !== "") {
        resultClass = props.result === "win" ? "lose" : "win";
        resultText = resultClass === "win" ? "lose" : "win";
    } else {
        resultClass = props.result;
        resultText = props.result;
    }

    return (
        <div className={`box ${resultClass}`}>
            <h1>{props.title}</h1>
            <h2>{props.item && props.item.name}</h2>
            <img className='item-img' src={props.item && props.item.img} alt={props.item && props.item.name} />
            <h2>{resultText}</h2>
        </div>
    );
};

export default Box;
