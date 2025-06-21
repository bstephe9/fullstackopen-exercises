import { useEffect, useState } from 'react'
import './App.css'
import Note from './components/Note'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:3001/notes")
      .then(response => setNotes(response.data))
  }, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  return (
    <>
      <h1>Notes</h1>
      <button
        onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note}></Note>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
    </>
  )
}

export default App
