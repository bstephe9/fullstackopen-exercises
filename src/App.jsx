import { useState } from 'react'
import './App.css'

function App() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <>
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <br />
      {right}
      <button onClick={() => setRight(right + 1)}>right</button>
    </>
  )
}

export default App
