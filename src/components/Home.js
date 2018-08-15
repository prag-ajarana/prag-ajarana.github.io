import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="directory-container" className="showcase padding-1">
        <p className="introductory-text responsive-padding">TSG provides machine learning solutions visualized through intuitive interfaces.</p>
        <div className="short-grid grid-x grid-padding-x grid-margin-y align-center">
          <section className="cell small-9 responsive-padding">
            <div className="card">
              <div className="card-section about-section">
                <div className="centered-card-section">
                  <h4 className="card-headers">About</h4>
                  <p>Learn more about the TSG organization and its team members.</p>
                  <ul className="fancy-list">
                    <li><Link to={`/about/centers`}>Centers of Excellence</Link></li>
                    <li><Link to={`/about/people`}>People</Link></li>
                  </ul>
                </div>
              </div>
          
              <div>
                <article className="centers-image-wrapper">
                  <section>Solution Center</section>
                  <div className="line"></div>
                  <section>Innovation Center</section>
                  <div className="line"></div>
                  <section>Service Center</section>
                </article> 
              </div>         
            </div>
          </section>

          <section id="demoCell" className="cell inverted-cell small-9 responsive-padding">
            <div className="card">
              <div className="card-section demo-section">
                <div className="centered-card-section">
                  <h4 className="card-headers">Demos</h4>
                  <p>Learn more about our capabilities through our interactive demos.</p>
                  <ul className="fancy-list">
                    <li><Link to={`/demos`}>Ship Risk Analytics</Link></li>
                    <li><Link to={`/demos`}>Bitcoin Visualizer</Link></li>
                    <li><Link to={`/demos`}>Harris Visualizer</Link></li>
                    <li><Link to={`/demos`}>GoArmyEd</Link></li>
                  </ul>
                </div>
              </div>
              <div className="full-background-wrapper">
                <div id="mda-demo-background" className="card-divider card-background align-top"></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Home;
