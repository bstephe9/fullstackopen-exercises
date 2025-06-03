import { useState } from 'react'
import History from './components/History'
import './App.css'

function App() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRight(right + 1)
  }

  return (
    <>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <br />
      {right}
      <button onClick={handleRightClick}>right</button>
      <br />
      <History allClicks={allClicks}></History>
    </>
  )
}

export default App
