import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

async function getAll() {
  const response = await axios.get(baseUrl)
  return response.data
}

async function create(newObject) {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

async function update(id, newObject) {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export default { getAll, create, update }
