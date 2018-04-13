import React from 'react';
import { Link } from 'react-router-dom';

class People extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-container">
        <div className="grid-x align-center-middle">
          <div className="cell medium-10 large-8">
            <ul className="tabs" data-deep-link="true" data-tabs id="example-tabs">
              <li className="tabs-title"><Link to={`/about`} onClick={() => this.props.clickHandler(true)}>Centers of Excellence</Link></li>
              <li className="tabs-title tabs-title-active"><Link to={`/about`} onClick={() => this.props.clickHandler(false)}>People</Link></li>
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

export default People;
