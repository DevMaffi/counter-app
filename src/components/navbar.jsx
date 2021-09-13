import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="https://google.com">
            Navbar{' '}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
