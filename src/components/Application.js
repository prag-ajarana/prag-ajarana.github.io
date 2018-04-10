import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Centers from './Centers.js';
import Demos from './Demos.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Home from './Home.js';
import People from './People.js';
import '../scss/main.scss';
import { hot } from 'react-hot-loader';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about/centers" component={Centers} />
          <Route exact path="/about/people" component={People} />
          <Route path="/demos" component={Demos} />
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('container'));

export default hot(module)(Application)
