import React from 'react';
import Centers from './Centers.js';
import People from './People.js';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutDemos from './AboutDemos.js';

const InfoPanels = () => {
  return (
    <article id="infoPanelWrapper">
      <NavLink className="info-panel" exact to="/about/centers">
          <p>Centers of Excellence</p>
          <div id="centersIcon" className="panel-icon"></div>
      </NavLink>

      <NavLink className="info-panel" exact to="/about/people">
        <p>People</p>
        <div id="peopleIcon" className="panel-icon"></div>
      </NavLink>

      <NavLink className="info-panel" exact to="/about/demos">
        <p>Demos</p>
        <div id="demosIcon" className="panel-icon"></div>
      </NavLink>
    </article>
  )
}

class About extends React.Component {
  render() {
    console.log('About', this.props.match);
    return (
      // ABOUTPAGE DOESNT EXIST
      <main id="aboutPage">
        <Router>
          <div>
            <InfoPanels />
            <Route exact path={`${this.props.match.path}/centers`} component={Centers}/>
            <Route path={`${this.props.match.path}/people`} component={People} />
            <Route path={`${this.props.match.path}/demos`} component={AboutDemos} />
          </div>
        </Router>
      </main>
    );
  }
}

export default About;

{/* <Router>
  <div>
    <Route exact path="/about/centers" component={Centers}/>
    <Route exact path="/about/people" component={People} />
    <Route exact path="/about/demos" component={AboutDemos} />
  </div>
</Router> */}
