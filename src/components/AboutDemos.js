import React from 'react';
import { NavLink } from 'react-router-dom';

class AboutDemos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-container content-container">
        <div className="grid-x align-center-middle">
          <div className="cell medium-10 large-8">
            <ul className="tabs" data-deep-link="true" data-tabs id="example-tabs">
              <li className="tabs-title">
                <NavLink exact to="/about/centers">Centers of Excellence</NavLink>
              </li>
              <li className="tabs-title tabs-title-active">
                <NavLink exact to="/about/people">People</NavLink>
              </li>
            </ul>
            <div className="tabs-content" data-tabs-content="example-tabs">
              <div className="tabs-panel is-active" id="people">
                <h2>People</h2>
                <ul>
                  <li>
                    <p>Dr. Ben Nguyen, CMIO</p>
                  </li>
                  <li>
                    <p>Nicholas Sorenson, Lead Software Developer</p>
                  </li>
                  <li>
                    <p>Leigh Nowak, Principal IA Solution Architect</p>
                  </li>
                  <li>
                    <p>Kismet Al-Hussaini, Technical Writer</p>
                  </li>
                  <li>
                    <p>Andres Arana, UI Developer</p>
                  </li>
                  <li>
                    <p>Jeff Diederiks, Jr. Solution Architect</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutDemos;
