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
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </>
    );
  }
}

export default Counter;
