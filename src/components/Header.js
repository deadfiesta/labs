import React from 'react';
import Carousel from './Carousel'
import data from './Content.json'


const Header = () => {

    return (
        <header>
            <ul className="dots">
                {data.carousel.map((slide) => (
                    <li id={slide.id} key={slide.id}></li>
                ))}
            </ul>
            <Carousel slides={data.carousel} />
        </header>
    )
}

export default Header