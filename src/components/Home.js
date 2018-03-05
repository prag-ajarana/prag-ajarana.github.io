import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="directory-container" className="padding-1">
        <p className="introductory-text">TSG brings innovation into the forefront and provides support for proposals and existing capabilities.</p>
        <div className="grid-x grid-padding-x grid-margin-y align-center align-top">
          <div className="cell small-12">
            <div className="card">
              <div className="card-section">
                <div className="centered-card-section">
                  <h4 className="card-headers">About</h4>
                  <p>Learn more about the TSG organization and team members.</p>
                  <ul>
                    <li><Link to={`/about/centers`}>Centers of Excellence</Link></li>
                    <li><Link to={`/about/people`}>People</Link></li>
                  </ul>
                </div>
              </div>
              <div className="half-background-wrapper">
                <div id="centers-background" className="card-divider card-background align-top"></div>
              </div>
            </div>
          </div>
          <div id="demoCell" className="cell small-12">
            <div className="card">
              <div className="card-section">
                <div className="centered-card-section">
                  <h4 className="card-headers">Demos</h4>
                  <p>Learn more about our capabilities through our interactive demos.</p>
                  <ul>
                    <li><Link to={`/demos`}>MDA</Link></li>
                  </ul>
                </div>
              </div>
              <div className="full-background-wrapper">
                <div id="mda-demo-background" className="card-divider card-background align-top"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
