import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  formatCount = () => {
    const { count } = this.state;

    return count === 0 ? 'Zero' : count;
  };

  render() {
    return (
      <>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </>
    );
  }
}

export default Counter;
