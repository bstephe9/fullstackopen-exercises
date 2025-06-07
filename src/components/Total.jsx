function Total({ parts }) {
  const exerciseCount = parts.reduce(
    (total, part) => total + part.exercises, 0
  )

  return (
    <>
      <p><b>total of {exerciseCount} exercises</b></p>
    </>
  )
}

export default Total
