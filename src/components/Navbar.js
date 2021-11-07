import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Arrow from './Arrow'
import Hamburger from './Hamburger'
import SeaLogo from './LogoSeaBranding'
import LogoProduct from './LogoProducts'
import NavbarSecondary from './NavbarSecondary'
import { nav, products } from './Data'

const Navbar = () => {

    const pathname = useLocation().pathname

    const [dropDown, setDropDown] = useState(false);

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function resizing() {
            setWidth(window.innerWidth)
            width >= 1100 && setHamburgerOpen(false)
        }
        window.addEventListener('resize', resizing)
    }, [width])

    let directory = []
    const menu = useRef([])
    nav.forEach((item) => item.link !== undefined && directory.push(item.link))
    const [hasSub, setHasSub] = useState(false)

    useEffect(() => {
        directory.forEach((direct) => {
            if (pathname.includes(direct)) {
                menu.current = nav.find(item => (item.link === direct)).subnav
                setHasSub(menu.current !== undefined ? true : false)
                // console.log(hasSub)
                // console.log(menu)
            }
        })
    })


    return (
        <nav>
            <div className="navbar__container primary">
                <div className="wrapper">
                    <div className="branding__container">
                        <SeaLogo />
                    </div>
                    <div className="menu__container">
                        <ul className={hamburgerOpen ? "menu open" : "menu"}>
                            {nav.map((menu, i) => (
                                <li onClick={() => setHamburgerOpen(false)} key={i} className={pathname.includes(menu.link) ? "active" : undefined} onMouseLeave={() => setDropDown(false)} onMouseEnter={menu.dropdown !== undefined ? () => setDropDown(true) : null}>
                                    {menu.dropdown === undefined
                                        ? <Link className={menu.subnav !== undefined ? "mobile__label" : undefined} to={menu.link}>{menu.name}</Link>
                                        : <span className="mobile__label inline">{menu.name}<Arrow direction="down" /></span>}
                                    {menu.subnav !== undefined &&
                                        <ul className="subpage__container">
                                            {menu.subnav.map((sub, i) => (
                                                <li className="subpage" key={i}><Link to={sub.link}>{sub.name}</Link></li>
                                            ))}
                                        </ul>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div onClick={() => setHamburgerOpen(prev => !prev)} className="hamburger__container">
                        <Hamburger open={hamburgerOpen} />
                    </div>
                </div>
            </div>
            <div className="navbar__container dropdown">
                <div className="wrapper">
                    <div className={dropDown ? "dropdown__container active" : "dropdown__container"}>
                        <ul className="products" onMouseLeave={() => setDropDown(false)} onMouseEnter={() => setDropDown(true)} >
                            {products.map((product, i) => (
                                <li key={i}>
                                    <LogoProduct brand={product.brand} subtitle={product.subtitle} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="nav__spacer"></div>
            {hamburgerOpen && <div className="scrium"></div>}
            {hasSub && <NavbarSecondary pathname={pathname} submenu={menu.current} />}
        </nav >
    )
}

export default Navbar