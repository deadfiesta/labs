import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import ListRowDocument from './ListRowDocument'
import { reports } from './Data'
import Button from './Button'


const AnnualReports = () => {
    return (
        <section id="annual-reports">
            <div className="wrapper">
                <SectionTitle title="Annual Reports" />
                <ul className="list__container">
                    {reports.map((report, i) => (
                        <li key={i} className="listrow">
                            <a href="https://example.com/" target="_blank" rel="noreferrer">
                                <ListRowDocument title={report.title} />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="button__container center">
                    <Link to="/investor/report">
                        <Button text="View more" />
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default AnnualReports
