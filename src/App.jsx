import { useEffect, useState } from 'react'
import PeopleDisplay from './components/PeopleDisplay'
import LabeledInput from './components/LabeledInput'
import Form from './components/Form'
import numberService from './services/numbers'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    numberService.getAll().then(initialNumbers => {
      setPersons(initialNumbers)
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
    const existingPerson = persons.find(person => person.number === newNumber)
    if (existingPerson) {
      if (!window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
        return
      }
    }

    const personObject = { name: newName, number: newNumber }
    if (existingPerson) {
      numberService.update(existingPerson.id, personObject)
        .then(returnedNumber => {
          setPersons(persons.map(person => 
            person.id === existingPerson.id ? returnedNumber : person
          ))
        })
    } else {
      numberService.create(personObject).then(returnedNumber => {
        setPersons(persons.concat(returnedNumber))
      })
    }

    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      numberService.deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
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
      <PeopleDisplay
        people={personsToShow}
        deletePerson={deletePerson}>
      </PeopleDisplay>
    </>
  )
}

export default App