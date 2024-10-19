// src/components/Counter.js
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../features/exampleSlice"

const Counter = () => {
  const count = useSelector((state) => state.example.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
