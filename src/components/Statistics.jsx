function Statistics(props) {
  let total = props.good + props.neutral + props.bad
  let average = (props.good - props.bad) / total
  let positive = (props.good / total) * 100

  return (
    <>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {total}</div>
      <div>average {average ? average : 0}</div>
      <div>positive {positive ? positive : 0} %</div>
    </>
  )
}

export default Statistics