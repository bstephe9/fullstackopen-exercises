const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

let numbers = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
]

app.get("/info", (request, response) => {
  let response_html = `
    <p>Phonebook has info for ${numbers.length} people</p>
    <p>${new Date()}</p>
  `
  response.send(response_html)
})

app.get("/api/persons", (request, response) => {
  response.json(numbers)
})

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id
  const entry = numbers.find((number) => id == number.id)
  entry ? response.json(entry) : response.status(404).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
