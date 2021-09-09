import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { tags } = this.state;

    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </>
    );
  }

  formatCount = () => {
    const { count } = this.state;

    return count === 0 ? 'Zero' : count;
  };

  getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';

    return classes;
  };
}

export default Counter;
