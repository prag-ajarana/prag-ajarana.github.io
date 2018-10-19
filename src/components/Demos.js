import React from 'react';

class Demos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="demosPage" className="showcase">
        <div className="short-grid grid-x grid-padding-x align-center">
          <div className="small-12 medium-10 large-7 responsive-padding">
            <h1>Demos</h1>
          </div>

          <div className="cell medium-10 large-7 responsive-padding">
            <div className="card">
              <div className="card-section">
                <div className="centered-card-section">
                  <h4 className="card-headers">Marine Domain Awareness</h4>
                  <p>Using the National Data Buoy Center's weather data and the Automatic Identification System, Pragmatics built a machine learning demo that automatically determines ship risk.</p>
                </div>
              </div>
          
              <div className="full-background-wrapper">
                <div id="mda-demo-background" className="card-divider card-background align-top"></div>
              </div>       
            </div>
          </div>

          <div className="cell medium-10 large-7 responsive-padding">
            <div className="card">
              <div className="card-section">
                <div className="centered-card-section">
                  <h4 className="card-headers">Bitcoin Visualizer</h4>
                  <p>In order to reduce data complexity for the Bitcoin network, Pragmatics built a clustering algorithm based off the Louvain Method for community detection and visualized it through a force-directed layout.</p>
                </div>
              </div>
              <div className="full-background-wrapper">
                <div id="bitcoin-demo-background" className="card-divider card-background align-top"></div>
              </div>
            </div>
          </div>

          <div className="cell medium-10 large-7 responsive-padding">
            <div className="card">
              <div className="card-section">
                <div className="centered-card-section">
                  <h4 className="card-headers">Harris Visualizer</h4>
                  <p>Taking in Automatic Dependent Surveillance - Broadcast data, Pragmatics used spatial visualization and interpolation tools to clearly view flight paths.</p>
                </div>
              </div>
              <div className="full-background-wrapper">
                <div id="harris-demo-background" className="card-divider card-background align-top"></div>
              </div>
            </div>
          </div>

          <div className="cell medium-10 large-7 responsive-padding">
            <div className="card">
              <div className="card-section">
                <div className="centered-card-section">
                  <h4 className="card-headers">Go Army Ed</h4>
                  <p>In the ever-evolving field of technology, special care must be taken to ensure everyone has equally convenient access to the same information. In that spirit, Pragmatics built a mobile-first prototype to demonstrate the tuition assistance from a soldier's point of view.</p>
                </div>
              </div>
              <div className="full-background-wrapper">
                <div id="gaed-demo-background" className="card-divider card-background align-top"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Demos;
