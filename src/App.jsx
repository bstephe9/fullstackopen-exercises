import { useState } from 'react'
import PeopleDisplay from './components/PeopleDisplay'
import LabeledInput from './components/LabeledInput'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '555-555-5555' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')

  const personsToShow = (filterString === '')
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase()
        .includes(filterString.toLowerCase())
    )

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
    <>
      <h2>Phonebook</h2>
      <LabeledInput text="filter shown with:" value={filterString} setValue={setFilterString} />

      <h2>add a new</h2>
      <Form handleSubmit={addPerson}>
        <LabeledInput text="name:" value={newName} setValue={setNewName} />
        <LabeledInput text="number:" value={newNumber} setValue={setNewNumber} />
      </Form>

      <h2>Numbers</h2>
      <PeopleDisplay people={personsToShow}></PeopleDisplay>
    </>
  )
}

export default App