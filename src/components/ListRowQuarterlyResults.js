import React from 'react'
import MediaIcon from './MediaIcon'

const ListRowQuarterlyResults = ({ q, year, month}) => {
    return (
        <div>
            <div className="list quarterly flex__container">

                <div className="col quarter__container">
                    <div style={{textTransform: "capitalize"}} className="figure large">
                        {q}
                    </div>
                    <h3 className="figure small">{year}</h3>
                </div>

                <span className="divider vertical"></span>

                <div className="col multimedia__container">
                    {q === 'q4' ? <h2>{month} Quarterly and Full Year {year} Results</h2> : <h2>{month} Quarterly {year} Results</h2>}
                    <ul>
                        <li>
                            <a href="https://example.com" target="_blank" rel="noreferrer" className="inline">
                                <MediaIcon icon="press" />Press Release
                            </a>
                        </li>
                        <li>
                            <a href="https://example.com" target="_blank" rel="noreferrer" className="inline">
                                <MediaIcon icon="presentation" />Presentation
                            </a>
                        </li>
                        <li>
                            <a href="https://example.com" target="_blank" rel="noreferrer" className="inline">
                                <MediaIcon icon="graph" />Infographic
                            </a>
                        </li>
                        <li>
                            <a href="https://example.com" target="_blank" rel="noreferrer" className="inline">
                                <MediaIcon icon="play" />Webcast
                            </a>
                        </li>
                        <li>
                            <a href="https://example.com" target="_blank" rel="noreferrer" className="inline">
                                <MediaIcon icon="transcript" />Transcript
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ListRowQuarterlyResults
