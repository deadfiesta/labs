import React from 'react'
import Subheader from './Subheader'
import CompanyProfile from './CompanyProfile'
import QuarterlyResults from './QuarterlyResults'
import Newsroom from './Newsroom'
import AnnualReports from './AnnualReports'

const InvestorOverview = () => {


    return (
        <>
            <Subheader title="Investor Relations" bg="investor-relations" />
            <main>
                <CompanyProfile />
                <QuarterlyResults />
                <Newsroom />
                <AnnualReports />
            </main>

        </>
    )
}

export default InvestorOverview
