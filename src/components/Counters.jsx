import React from 'react'
import Counter from './Counter'

export default function Counters({onReset, counters, onDelete, onIncrement}) {
  return (
    <div>
        <button onClick={() => onReset()} className="btn btn-primary btn-sm m-2">Reset All</button>
        {counters.map(counter => (
            <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter}/>
        ))}
      </div>
  )
}
