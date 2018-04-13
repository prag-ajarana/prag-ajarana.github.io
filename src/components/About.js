import React from 'react';
import Centers from './Centers.js';
import People from './People.js';

const Details = (props) => {
  if (props.isCentersSelected) {
    return <Centers clickHandler={props.clickHandler} />
  }
  else {
    return <People clickHandler={props.clickHandler} />
  }
}

const InfoPanels = () => {
  return (
    <article id="infoPanelWrapper">
      <section id="centersPanel" className="info-panel">
        Centers of Excellence
      </section>

      <section id="peoplePanel" className="info-panel">
        People
      </section>

      <section id="experiencePanel" className="info-panel">
        Relevant Experience
      </section>
    </article>
  )
}

class About extends React.Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      isCentersSelected: true
    }
  }

  clickHandler(isCentersSelected) {
    this.setState( {isCentersSelected} )
  }

  render() {
    return (
      <main id="aboutPage">
        {/* <Details clickHandler={this.clickHandler} isCentersSelected={this.state.isCentersSelected} /> */}
        <InfoPanels />
      </main>
    );
  }
}

export default About;
