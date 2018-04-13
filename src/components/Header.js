import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import pathToRegexp from 'path-to-regexp';

const TopLeftBar = () => {
  return (
    <div className="top-bar-left">
      <ul className="dropdown menu flex-center-small" data-dropdown-menu>
        <li className="menuitem"><span id="branding"><NavLink to={`/`}>Technology Solutions Group</NavLink></span></li>
      </ul>
    </div>
  )
}

const TopRightBar = () => {
  // let currentPath = window.location.pathname;
  //
  // let deepSelectedAbout = classNames(
  //   {
  //     'selected' : currentPath == '/about/centers' || currentPath == '/about/people'
  //   }
  // );

  return (
    <div className="top-bar-right">
      <ul className="menu align-center" onClick={this.clickHandler}>
        <li><NavLink exact to={`/`} activeClassName="selected"><div className="menuLinkItem">Home</div></NavLink></li>
        <li><NavLink to="/about" activeClassName="selected"><div className="menuLinkItem">About</div></NavLink></li>
        <li><NavLink to={`/demos`} activeClassName="selected"><div className="menuLinkItem">Demos</div></NavLink></li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <header className="bg-white nav-header">
      <div className="grid-container top-bar">
        <TopLeftBar />
        <TopRightBar />
      </div>
    </header>
  );
}

export default Header;
