import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {

  render() {
    const {onReset, counters, onDelete, onIncrement} = this.props
    return (
      <div>
        <button onClick={() => onReset()} className="btn btn-primary btn-sm m-2">Reset All</button>
        {counters.map(counter => (
            <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter}/>
        ))}
      </div>
    )
  }
}
