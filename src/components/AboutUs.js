import React from 'react'
import SectionTitle from './SectionTitle'
import { Link } from 'react-router-dom'
import { missions } from './Data'

const AboutUs = () => {
    return (
        <section id="about-us">
            <div className="wrapper">
                <SectionTitle title={'Our Mission'} p={'Our mission is to better the lives of consumers and small businesses with technology.'} />
                <ul className="col-about">
                    {missions.map((item, i) => (
                        <li key={i}>
                            <Link to={item.link}>
                                <div className="thumbnail__container">
                                    <div className="content__container">
                                        <img width='96' height='96' src={`./img/svg/96px/${item.icon}.svg`} alt={item.icon} />
                                        <h2>{item.title}</h2>
                                        <p>{item.subtitle}</p>
                                    </div>
                                    <div className="bg__container" style={{ backgroundImage: `url(./img/thumbnails/home/${item.thumbnail}.jpg)` }}></div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default AboutUs
