import React from 'react'
import Arrow from './Arrow'

const BackPage = ({ onclick }) => {
    return (
        <div className="back__container" onClick={onclick}>
            <Arrow direction="left" />
            <h2>Back</h2>
        </div>

    )
}

export default BackPage
