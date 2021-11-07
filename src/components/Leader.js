import React from 'react'
import { Link } from 'react-router-dom'
import BackPage from './BackPage'
import { leaders } from './Data'

const Leader = ({ match }) => {

    const leader = leaders.find(leader => leader.link === "/" + match.params.leader)
    let others = []

    if (leader !== undefined) {
        leaders.forEach(entry => {
            if (entry.link !== leader.link)
                others.push(entry)
        })
    } else others = leaders
    return (
        <>
            {leader !== undefined
                ? <article className="leaders">
                    <div className="wrapper">
                        <Link to='/about/ourleadership'>
                            <BackPage />
                        </Link>
                        <div className="leader content__container">

                            <div className="main__container">
                                <div className="title__container">
                                    <h1>{leader.name}</h1>
                                    <h2>{leader.role}</h2>
                                </div>
                                <div className="text__container">
                                    <p>{leader.paragraph}</p>
                                </div>
                            </div>

                            <div className="thumbnail__container">
                                <div className="bg__container" style={{ backgroundImage: `url(/img/people${leader.link}.jpg)` }}></div>
                            </div>
                        </div>
                    </div>
                </article>
                : <header className={`empty subheader`}>
                <div className="wrapper">
                    <div className="content__container">
                        <div className="svg__container">
                            <img src={`/img/svg/96px/profile.svg`} alt="" />
                        </div>
                        <div className="title__container">
                            <h1>Profile Not Found</h1>
                            <p>It looks like the profile you're looking for doesn't exist. Please check the URL or click from a profile below.</p>
                        </div>
                    </div>
                </div>
            </header>
            }
            <article>
                <div className="wrapper">
                    <div className="leader more__container">
                        <h1 style={leader === undefined ? {textAlign: "center"} : null}>Our Management</h1>
                        <ul className="leaders__container">
                            {others.map((other, i) => (
                                <Link key={i} to={`/about/ourleadership${other.link}`}>
                                    <li >
                                        <div className="thumbnail__container">
                                            <div className="bg__container" style={{ backgroundImage: `url(/img/people${other.link}.jpg)` }}></div>
                                        </div>
                                        <div className="profile__container">
                                            <h2>{other.name}</h2>
                                            <p>{other.role}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>

                    </div>
                </div>
            </article>

        </>
    )
}

export default Leader
