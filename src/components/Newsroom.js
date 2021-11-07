import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { news } from './Data'
import SectionTitle from './SectionTitle'


const Newsroom = () => {
    return (
        <section id="newsroom">
            <div className="wrapper">
                <SectionTitle title="Newsroom" />
                <ul className="col3">
                    {news.slice(0, 6).map((n, i) => (
                        <a key={i} href="https://example.com" target="_blank" rel="noreferrer">
                            <li>
                                <div className="details__container">
                                    <span>{n.date}</span>
                                    <h2>{n.title}</h2>
                                    <p>{n.paragraph}</p>
                                </div>
                            </li>
                        </a>
                    ))}
                </ul>
                <div className="button__container center">
                    <Link to="/investor/newsroom">
                        <Button text="View more" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Newsroom
