import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";

import { useSelector, useDispatch } from 'react-redux'
import { increment,reset,deleteCounter } from './features/counterSlice'

function App() {
  const dispatch = useDispatch()
  const counters = useSelector((state) => state.counters.value)
  const handleIncrement = (counter) => {
    dispatch(increment(counter.id))
  }

  const handleReset = () => {
    dispatch(reset())
  }

  const handleDelete = (counterId) => {
    dispatch(deleteCounter(counterId))
  }
  return (
    <>
      <Navbar
        totalCounters={counters.filter((c) => c.value > 0).length}
      ></Navbar>
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        ></Counters>
      </main>
    </>
  );
}

export default App;
