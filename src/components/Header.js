import React from 'react';
import { NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader';

const TopLeftBar = () => {
  return (
    <div className="top-bar-left">
      <ul className="dropdown menu flex-center-small" data-dropdown-menu>
        <li className="menuitem">
          <div id="branding">
            <NavLink to={`/`}>Technology Solutions Group</NavLink>
          </div>
        </li>
      </ul>
    </div>
  )
}

const TopRightBar = () => {
  return (
    <div className="top-bar-right">
      <ul className="menu align-center">
        <li><NavLink exact to={`/`} activeClassName="selected"><div className="menuLinkItem">Home</div></NavLink></li>
        <li><NavLink to="/about" activeClassName="selected"><div className="menuLinkItem">About</div></NavLink></li>
        <li><NavLink to={`/demos`} activeClassName="selected"><div className="menuLinkItem">Demos</div></NavLink></li>
        {/* <li><NavLink to={`/demos`} activeClassName="selected"><div className="menuLinkItem">Live Demos</div></NavLink></li> */}
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <header className="bg-white nav-header">
      <div className="grid-container top-bar responsive-padding">
        <TopLeftBar />
        <TopRightBar />
      </div>
    </header>
  );
}

export default hot(module)(Header);
