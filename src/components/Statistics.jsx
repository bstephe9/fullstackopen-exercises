import StatisticLine from "./StatisticLine"

function Statistics({ good, neutral, bad }) {
  let total = good + neutral + bad
  let average = (good - bad) / total
  let positive = (good / total) * 100

  if (good + neutral + bad == 0) {
    return <div>No feedback given</div>
  }

  return (
    <>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="all" value={total}></StatisticLine>
      <StatisticLine text="average" value={average}></StatisticLine>
      <StatisticLine text="positive" value={positive}></StatisticLine>
    </>
  )
}

export default Statistics