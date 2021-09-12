import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  // event handlers

  handleIncrement = () => {
    this.setState(state => ({ value: state.value + 1 }));
  };

  // methods

  formatCount = () => {
    const { value } = this.state;

    return value === 0 ? 'Zero' : value;
  };

  getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';

    return classes;
  };

  render() {
    const { props } = this;

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => props.onDelete(props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
