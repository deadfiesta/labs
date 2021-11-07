import React from 'react'
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import OurValues from './OurValues'
import OurLeadership from './OurLeadership'
import ScrollToTop from './ScrollToTop'
import Leader from './Leader'

const About = ({ match }) => {

    // const menu = nav.find(item => (item.link === "/about")).subnav
    return (
        <><Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path={`${match.path}/ourvalues`} component={OurValues} />
                    <Route exact path={`${match.path}/ourleadership`} component={OurLeadership} />
                    <Route exact path={`${match.path}/ourleadership/:leader`} component={Leader} />
                    <Redirect to={`${match.path}/ourvalues`} />
                </Switch>
            </ScrollToTop>
        </Router>
        </>
    )
}

export default About