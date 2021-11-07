import React from 'react'

const Subheader = ({ title, bg }) => {
    const background = {
        backgroundImage: `url(../img/banners/${bg}.jpg)`
    }
    return (
        <header className="subheader" style={background}>
            <div className="title__container">
            <h1 className="subtitle">{title}</h1>
            </div>
        </header>
    )
}

export default Subheader
