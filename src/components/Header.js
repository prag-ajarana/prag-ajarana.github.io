import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="bg-white nav-header">
        <div className="grid-container top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu flex-center-small" data-dropdown-menu>
              <li className="menuitem"><span id="branding"><Link to={`/`}>Technology Solutions Group</Link></span></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu align-center">
              <li><span className="selected"><Link to={`/`}>Home</Link></span></li>
              <li><span><Link to={`/about/centers`}>About</Link></span></li>
              <li><span><Link to={`/demos`}>Demos</Link></span></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
