import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Statistics from './components/Statistics'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"></Button>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"></Button>
      <Button onClick={() => setBad(bad + 1)} text="bad"></Button>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      ></Statistics>
    </>
  )
}

export default App
