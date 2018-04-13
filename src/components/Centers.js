import React from 'react';
import { Link } from 'react-router-dom';

class Centers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-container">
        <div className="grid-x align-center-middle">
          <div className="cell medium-10 large-8">
            <ul className="tabs" data-deep-link="true" data-tabs id="example-tabs">
              <li className="tabs-title tabs-title-active"><Link to={`/about`} onClick={() => this.props.clickHandler(true)}>Centers of Excellence</Link></li>
              <li className="tabs-title"><Link to={`/about`} onClick={() => this.props.clickHandler(false)}>People</Link></li>
            </ul>
            <div className="tabs-content" data-tabs-content="example-tabs">
              <div className="tabs-panel is-active" id="centers">
                <section>
                  <h2>Centers of Excellence</h2>
                  <h3>Solution Center</h3>
                  <ul>
                    <li>Software Engineering
                      <ul>
                        <li>Agile</li>
                        <li>UCD</li>
                        <li>DevSecOps</li>
                        <li>Cloud Container Management</li>
                      </ul>
                    </li>
                    <li>Data
                      <ul>
                        <li>Data Analytics</li>
                        <li>Big Data</li>
                        <li>BI</li>
                        <li>MDM</li>
                        <li>Predictive Analytics</li>
                        <li>Machine Learning</li>
                      </ul>
                    </li>
                    <li>Cyber
                      <ul>
                        <li>NIST</li>
                        <li>RMF/DIACAP</li>
                      </ul>
                    </li>
                    <li>ITSM</li>
                    <li>Infrastructure Solutions
                      <ul>
                        <li>AV</li>
                        <li>Networking</li>
                        <li>Wireless</li>
                        <li>Build-out</li>
                      </ul>
                    </li>
                  </ul>
                </section>
                <section>
                  <h3>Innovation Center</h3>
                  <ul>
                    <li>R&amp;D
                      <ul>
                        <li>Capabilities</li>
                        <li>Products</li>
                        <li>Solutions</li>
                      </ul>
                    </li>
                    <li>White Papers</li>
                    <li>Prototypes / Demos</li>
                  </ul>
                </section>
                <section>
                  <h3>Service Center</h3>
                  <ul>
                    <li>Capture Support</li>
                    <li>Proposal Support</li>
                    <li>Intern Training Program</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Centers;
