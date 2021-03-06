import React, { Component } from 'react';

import Counter from './counter';

export class Counters extends Component {
  render() {
    const { counters, onReset, ...counterProps } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter key={counter.id} counter={counter} {...counterProps} />
        ))}
      </div>
    );
  }
}

export default Counters;
