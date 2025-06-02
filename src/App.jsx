import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <>
      <Display counter={counter}></Display>
      <Button
        onClick={increaseByOne}
        text="plus"
      />
      <Button
        onClick={decreaseByOne}
        text="minus"
      />
      <Button
        onClick={setToZero}
        text="reset"
      />
    </>
  )
}

export default App