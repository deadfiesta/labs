import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import Subheader from './Subheader'
import { leaders } from './Data'

const OurLeadership = () => {

    const pathname = useLocation().pathname;

    return (
        <>
            <Subheader title="Our Leadership" bg="corporate-governance" />
            <main>
                <section id="leadership">
                    <div className="wrapper">
                        <ul className="leaders__container">
                            {leaders.map((leader, i) => (
                                <Link to={pathname + leader.link} key={i}>
                                    <li className="leader" >
                                        <div className="thumbnail__container" >
                                            <div className="bg__container" style={{ backgroundImage: `url(../img/people${leader.link}.jpg)` }}></div>
                                        </div>
                                        <div className="name__container">
                                            <h2>{leader.name}</h2>
                                            <p>{leader.role}</p>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

export default OurLeadership
