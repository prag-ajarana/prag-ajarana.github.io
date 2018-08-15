import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Demos from './Demos.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import '../scss/main.scss';
import { hot } from 'react-hot-loader';

class Application extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // $(document).foundation();
  }

  render() {
    return (
      <Router>
        <div id="container">
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/demos" component={Demos} />

          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('root'));

export default hot(module)(Application)
