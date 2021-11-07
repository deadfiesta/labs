import React from 'react'
import Arrow from './Arrow'

const Button = ({ type, text, direction }) => {
    switch (direction) {
        case "left":
            return (
                <button className={type + " inline"}>
                    <div className="arrow__container center"><Arrow direction={direction} /></div>{text}
                </button>
            )
        default:
            return (
                <button className={type + " inline"}>
                    {text} <div className="arrow__container center"><Arrow direction={direction} /></div>
                </button>
            )
    }
}

export default Button

Button.defaultProps = {
    type: 'default',
    direction: 'right',
}