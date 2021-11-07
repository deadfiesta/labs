import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import { updates } from './Data'
import BackPage from './BackPage';
import ScrollToTop from './ScrollToTop';

const MediaArticlePage = ({ match }) => {

    let history = useHistory();

    const current = "/" + match.params.link;

    const article = updates.find(update => update.link === current)

    const where = updates.findIndex(update => update.link === current);

    function getEnd(where) {
        if (where + 3 > updates.length) {
            return updates.length
        } else return where + 3
    }

    function getStart(where) {
        if (where + 3 > updates.length) {
            return updates.length - 4
        } else return where
    }

    let a = getStart(where)
    let b = getEnd(where)

    const others = updates.filter(remove => remove.link !== current).slice(a, b)

    console.log(others)

    return (
        <>
            <ScrollToTop>
                <article>
                    <div className="wrapper">
                        <BackPage onclick={() => history.goBack()} />
                        <div className="content__container ">

                            <div className="main__container">

                                <div className="headline__container">
                                    <div className="date__container">
                                        <div className="date"><p>{article.date}</p></div>
                                        <div className="tag inline">Tag: <img src={`../img/svg/16px/${article.tag}.svg`} alt="" /></div>
                                    </div>
                                    <div className="title__container">
                                        <h1>{article.title}</h1>
                                    </div>
                                </div>

                                <div className="attachment__container">
                                    <ul className="attachments">
                                        {article.attachment.map((attach, i) => (
                                            <li key={i}><a href="https://example.com" target="_blank" rel="noreferrer" className="inline">
                                                <img src="../img/svg/32px/pdf.svg" alt="pdf" />
                                                {attach.file}
                                            </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="captions__container">
                                    {article.captions.map((caption, i) => (
                                        <p key={i}>{caption.title}</p>
                                    ))}
                                </div>

                                <div className="thumbnail__container">
                                    <div className="bg__container" style={{ backgroundImage: `url(../img/thumbnails/articles/${article.thumbnail}.jpeg)` }}></div>
                                </div>

                                <div className="text__container">
                                    <p>{article.paragraph}</p>
                                </div>

                            </div>
                            <div className="others__container">
                                <h2>You May Like</h2>
                                <ul className="others">
                                    {others.map((other, i) => (
                                        <Link key={i} to={`/media${other.link}`}>
                                            <li >
                                                <div className="thumbnail__container">
                                                    <div className="bg__container" style={{ backgroundImage: `url(../img/thumbnails/articles/${other.thumbnail}.jpeg)` }}></div>
                                                </div>
                                                <span>{other.date}</span>
                                                <h2>{other.title}</h2>
                                                <p>{other.paragraph}</p>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
            </ScrollToTop>
        </>
    )
}

export default MediaArticlePage
