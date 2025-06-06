import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    new Array(anecdotes.length).fill(0)
  )

  const setRandomAnecdote = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(newIndex)
  }

  const addVote = (selectedIndex) => {
    setVotes(prevArray =>
      prevArray.map((count, i) => (i == selectedIndex ? count + 1 : count))
    )
  }

  return (
    <div>
      <style>{` .anecdote { height: 4rem; overflow-y: auto; } `}</style>
      <p className="anecdote">{anecdotes[selected]}</p>
      <div>has {votes[selected]} votes</div>
      <button onClick={() => addVote(selected)}>vote</button>
      <button onClick={setRandomAnecdote}>next anecdote</button>
    </div>
  )
}

export default App