import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  // handlers

  handleIncrement = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  // methods

  formatCount = () => {
    const { count } = this.state;

    return count === 0 ? 'Zero' : count;
  };

  getBadgeClasses = () => {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';

    return classes;
  };

  renderTags = () => {
    const { tags } = this.state;

    if (tags.length === 0) {
      return <p>There are no tags!</p>;
    }

    return (
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };
}

export default Counter;
