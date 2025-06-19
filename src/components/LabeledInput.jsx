const LabeledInput = ({ text, value, setValue }) => {
  return (
    <div>
      {text}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default LabeledInput