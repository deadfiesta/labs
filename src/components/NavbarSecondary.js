import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useScrollPosition from '@react-hook/window-scroll'

const NavbarSecondary = ({ submenu, pathname }) => {

    const scrollY = useScrollPosition(60)

    const [activeWidth, setActiveWidth] = useState(0)
    const [activeLeft, setActiveLeft] = useState(0)

    useEffect(() => {

        const active = document.querySelector('.sub.active')
        if (active !== null) {
            setActiveLeft(active.offsetLeft)
            setActiveWidth(active.clientWidth)
        }

    },[pathname])

    return (
        <>
            <div className="navbar__container secondary">
                <div className="wrapper" >
                    {scrollY > 64 && <div className="spacer"></div>}
                    <div className={scrollY > 64 ? "submenu__container sticky" : "submenu__container"}>
                        <ul className="submenu">
                            {submenu.map((item, i) => (
                                <Link key={i} to={item.link}>
                                    <li className={pathname.includes(item.link) ? "sub active" : undefined}>{item.name}</li>
                                </Link>
                            ))}
                            <span style={
                                {
                                    width: activeWidth,
                                    left: activeLeft
                                }
                            }></span>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarSecondary
