const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  let className = "error"
  if (message.includes("Added")) {
    className = "success"
  }

  return <div className={`notification ${className}`}>{message}</div>
}

export default Notification