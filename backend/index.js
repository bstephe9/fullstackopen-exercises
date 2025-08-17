const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const ID_MIN = 1
const ID_MAX = 1000000

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

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id
  numbers = numbers.filter((number) => id !== number.id)
  response.status(204).end()
})

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

app.post("/api/persons", (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    })
  }

  if (numbers.find((entry) => entry.name === body.name)) {
    return response.status(400).json({
      error: `name ${body.name} already exists`,
    })
  }

  const entry = {
    id: String(getRandomInt(ID_MIN, ID_MAX)),
    name: body.name,
    number: body.number,
  }

  numbers = numbers.concat(entry)

  response.json(entry)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
