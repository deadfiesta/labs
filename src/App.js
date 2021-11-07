import './scss/main.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home'
import MediaArticlePage from './components/MediaArticlePage';
import Footer from './components/Footer';
import OurValues from './components/OurValues';
import OurLeadership from './components/OurLeadership';
import Leader from './components/Leader';
import PageNotFound from './components/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import InvestorOverview from './components/InvestorOverview';

function App() {
  return (
    <>
      <Router basename={"/sea"}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} />
            <Route exact path="/about">
              <Redirect to="/about/ourvalues" />
            </Route>
            <Route exact path="/about/ourvalues" component={OurValues} />
            <Route exact path="/about/ourleadership" component={OurLeadership} />
            <Route exact path="/about/ourleadership/:leader" component={Leader} />
            <Route exact path="/media/:link" component={MediaArticlePage} />
            <Route exact path="/investor">
              <Redirect to="/investor/overview" />
            </Route>
            <Route exact path="/investor/overview" component={InvestorOverview} />
            <Route>
              <PageNotFound what="page" button="true" link="home" icon="compass" />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
