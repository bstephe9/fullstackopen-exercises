function Total({ parts }) {
  const exerciseCount = parts.reduce(
    (total, part) => total + part.exercises, 0
  )

  return (
    <>
      <p><b>Number of exercises {exerciseCount}</b></p>
    </>
  )
}

export default Total
