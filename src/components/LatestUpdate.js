import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { updates } from './Data'
import Button from './Button'

const LatestUpdate = () => {

    return (
        <section id="latest-update">
            <div className="wrapper">
                <SectionTitle title={'Recent Updates'} />
                <ul className="col3">
                    {updates.slice(0, 6).map((update, i) => (
                        <Link key={i} to={`/media${update.link}`}>
                            <li>
                                <div className="thumbnail__container">
                                    <div className="bg__container" style={{ backgroundImage: `url(./img/thumbnails/articles/${update.thumbnail}.jpeg)` }}></div>
                                </div>
                                <div className="details__container">
                                    <div className="info__container">
                                        <div className="date__container">
                                            <p>{update.date}</p>
                                            <img src={`./img/svg/16px/${update.tag}.svg`} alt={`${update.tag}`} />
                                        </div>
                                        <h2>{update.title}</h2>
                                        <p>{update.paragraph}</p>
                                    </div>
                                </div>

                            </li>
                        </Link>
                    ))}
                </ul>
                <div className="button__container center">
                    <Link to="/media" >
                        <Button text={"See more"} />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LatestUpdate
