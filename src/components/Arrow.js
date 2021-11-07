import React from 'react'

const Arrow = ({ direction }) => {

    const path = (where) => {
        switch (where) {
            case 'left':
                return (
                    "M8 11L5 8L8 5"
                )
            case 'right':
                return (
                    "M8 5L11 8L8 11"
                )
            case 'down':
                return (
                    "M11 8L8 11L5 8"
                )
            case 'up':
                return (
                    "M5 8L8 5L11 8"
                )
            default:
                return (
                    "M8 11L5 8L8 5"
                )
        }
    }

    return (
        <svg className="arrow" width="16" height="16" viewBox="0 0 16 16">
            <path d={path(direction)} />
        </svg>
    )
}

export default Arrow

Arrow.defaultProps = {
    direction: 'default',
}
