import React from 'react'
import { Link } from 'react-router-dom'
import ListRowQuarterlyResults from './ListRowQuarterlyResults'
import SectionTitle from './SectionTitle'
import { quarterly } from './Data'
import Button from './Button'

const QuarterlyResults = () => {
    const results = quarterly.slice(0, 4);
    return (
        <section id="quarterly-results">
            <div className="wrapper">
                <SectionTitle title="Quarterly Results" />
                <ul className="list__container">
                    {results.map((result, i) => (
                        <li className="listrow" key={i}>
                            <ListRowQuarterlyResults q={result.quarter} month={result.month} year={result.year} />
                        </li>
                    ))}
                </ul>
                <div className="button__container center">
                    <Link to="/investor/results">
                        <Button text="View more" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default QuarterlyResults
