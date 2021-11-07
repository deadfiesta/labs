import React from 'react'
import Button from './Button'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { leaders } from './Data'

const PageNotFound = ({ link, what, button, size, icon }) => {

    let p = ''

    switch (what) {
        case 'page':
            p = "It looks like the page you're looking for doesn't exist. Please check the URL or click the button below to return to home."
            break;
        case 'profile':
            p = "It looks like the profile you're looking for doesn't exist. Please check the URL or click from a profile below"
            break;
        default:
            p = "It looks like the page you're looking for doesn't exist."
    }

    useEffect(() => {


        if (what === "page") {
            let box = document.querySelector(".box");
            let boxBoundingRect = box.getBoundingClientRect();
            let boxCenter = {
                x: boxBoundingRect.left + boxBoundingRect.width / 2,
                y: boxBoundingRect.top + boxBoundingRect.height / 2
            };

            document.addEventListener("mousemove", e => {
                let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y)) * (180 / Math.PI);
                box.style.transform = `rotate(${angle}deg)`;
            })
        }
    }, [what])


    return (
        <>
            <header className={`empty ${size}`}>
                <div className="wrapper">
                    <div className="content__container">
                        <div className="svg__container">
                            {what === "page" && <img className="box" src="../img/svg/96px/compass-needle.svg" alt="" />}
                            <img src={`/img/svg/96px/${icon}.svg`} alt="" />
                        </div>
                        <div className="title__container">
                            <h1>{what} Not Found</h1>
                            <p>{p}</p>
                        </div>
                    </div>
                    <div style={!button ? { display: "none" } : null} className="button__container">
                        <Link to={`/${link}`}>
                            <Button type="back" direction="left" text="Return to Home" />
                        </Link>
                    </div>
                </div>
            </header>
            {what !== "page" &&
                <article>
                    <div className="wrapper">
                        <div className="leader more__container">
                            <h1 style={{ textAlign: "center" }}>Our Management</h1>
                            <ul className="leaders__container">
                                {leaders.map((other, i) => (
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
            }
        </>
    )
}

PageNotFound.defaultProps = {
    icon: 'compass-default',
    size: '',
    what: 'page',
    link: 'home',
    button: true,
}

export default PageNotFound
