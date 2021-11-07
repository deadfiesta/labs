import React from 'react'

const Hamburger = ({ open }) => {
    return (
        <svg className={open ? "hamburger open" : "hamburger"} width="48px" viewBox="0 0 100 100">
            <path className="line__sweep" d="M0 40h62c13 0 6 28-4 18L35 35"></path>
            <path className="line__middle" d="M0 50h70"></path>
            <path className="line__sweep" d="M0 60h62c13 0 6-28-4-18L35 65"></path>
        </svg>
    )
}

export default Hamburger

Hamburger.defaultProps = {
    open: false,
}
