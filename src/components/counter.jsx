import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      tags: [],
    };
  }

  render() {
    const { tags } = this.state;

    return (
      <>
        {tags.length === 0 && <p>Please create a new tag!</p>}
        {this.renderTags()}
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
