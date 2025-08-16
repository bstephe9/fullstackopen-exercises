const Form = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit">add</button>
    </form>
  )
}

export default Form