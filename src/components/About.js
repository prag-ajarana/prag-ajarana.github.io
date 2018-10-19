import React from 'react';
import classNames from 'classnames/bind';

const Centers = () => {
  return (
    <div className="tabs-panel is-active responsive-padding" id="centers">
      <section>
        {/* <h2>Centers of Excellence</h2> */}
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
  )
}

const People = () => {
  return (
    <div className="tabs-panel is-active responsive-padding" id="people">
      <h3>Team</h3>
      <ul>
        <li>
          <p>Dr. Ben Nguyen, CMIO</p>
        </li>
        <li>
          <p>Nicholas Sorenson, Lead Software Developer</p>
        </li>
        <li>
          <p>Andres Arana, UI Architect</p>
        </li>
        <li>
          <p>Leigh Nowak, Principal IA Solution Architect</p>
        </li>
        <li>
          <p>Pyoung Kang Kim, Software Engineer</p>
        </li>
        <li>
          <p>Robin Luongo, Software Engineer</p>
        </li>
        <li>
          <p>Edwin Hsia, Jr. UI Developer</p>
        </li>
      </ul>
    </div>
  )
}

class About extends React.Component {
  constructor() {
    super();

    this.toggleTabs = this.toggleTabs.bind(this);

    this.state = {
      selectedTab: 'centers'
    }
  }

  toggleTabs(e) {
    console.log(e.target.id)
    if (e.target.id == 'centersTab') {
      this.setState({
        selectedTab: 'centers'
      })
    }
    else {
      this.setState({
        selectedTab: 'people'
      })
    }
  }

  render() {
    const tabContent = (this.state.selectedTab == 'centers') ? <Centers /> : <People />;

    let centersTabClasses = classNames({
      'tabs-title': true,
      'selected': this.state.selectedTab == 'centers'
    });

    let peopleTabClasses = classNames({
      'tabs-title': true,
      'selected': this.state.selectedTab == 'people'
    });

    return (
      <main id="aboutPage">
        <div className="grid-container content-container">
          <div className="grid-x align-center-middle">
            <div className="cell medium-8 large-6">
              <ul className="tabs" data-tabs id="example-tabs">
                <li id="centersTab" className={centersTabClasses} onClick={this.toggleTabs}>
                  Centers of Excellence
                </li>
                <li className={peopleTabClasses} onClick={this.toggleTabs}>
                  People
                </li>
              </ul>
              <div className="tabs-content" data-tabs-content="example-tabs">
                
                {tabContent}

              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
