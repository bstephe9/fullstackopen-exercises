function Statistics({ good, neutral, bad }) {
  let total = good + neutral + bad
  let average = (good - bad) / total
  let positive = (good / total) * 100

  if (good + neutral + bad == 0) {
    return <div>No feedback given</div>
  }

  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </>
  )
}

export default Statistics