import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-555-5555' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    // Error handling
    if (newName === '' || newNumber === '') {
      alert("All form values must be filled")
      return
    }
    const names = persons.map(person => person.name)
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = { name: newName, number: newNumber }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>
        )}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App