import React from 'react';
import SearchGithub from './SearchGithub';
import { Link } from 'react-router';

const Main = ({children}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="col-xs-12 col-sm-8 col-sm-offset-1" style={{marginTop: '15px'}}>
          <SearchGithub />
        </div>
        <div className="col-xs-3">
          <ul className="nav navbar-nav hidden-xs" style={{marginTop: '5px'}}>
            <li>
              <Link activeClassName="active" to="/about"> About </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Main;

