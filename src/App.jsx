import { useEffect, useState } from 'react'
import PeopleDisplay from './components/PeopleDisplay'
import LabeledInput from './components/LabeledInput'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        console.log(response.data)
      })
  }, [])

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