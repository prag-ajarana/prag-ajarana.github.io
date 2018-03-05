import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="bg-black nav-footer">
        <ul className="menu align-center">
          <li><a href="http://www.pragmatics.com" target="_blank">Pragmatics Home</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
