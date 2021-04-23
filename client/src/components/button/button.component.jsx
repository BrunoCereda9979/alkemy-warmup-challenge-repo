import React from 'react';

// styles
import "./button.styles.css";

const Button = (props) => {
    return (
        <button className="button" style={{color: `${props.color}`, background: `${props.background}`}}>
            { props.text }
        </button>
    )
}

export default Button;