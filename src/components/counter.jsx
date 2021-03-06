import React, { Component } from 'react';

export class Counter extends Component {
  // methods

  formatCount = () => {
    const { value } = this.props.counter;

    return value === 0 ? 'Zero' : value;
  };

  getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';

    return classes;
  };

  render() {
    const { props } = this;

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => props.onIncrement(props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => props.onDecrement(props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => props.onDelete(props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
