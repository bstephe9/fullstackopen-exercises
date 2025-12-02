import express from "express"
import cors from "cors"
import supabase from "./database.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>")
})

app.get("/api/notes", async (request, response) => {
  const { data: notes, error } = await supabase.from("notes").select()

  if (error) {
    console.error("Supabase error:", error)
    return response.status(500).json({ error: "Failed to fetch notes" })
  }

  response.json(notes)
})

app.get("/api/notes/:id", async (request, response) => {
  const id = request.params.id

  let { data: notes, error } = await supabase
    .from("notes")
    .select()
    .eq("id", id)

  const note = notes[0]

  note ? response.json(note) : response.status(404).end()
})

app.delete("/api/notes/:id", async (request, response) => {
  const id = request.params.id
  const { data: notes, error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)
    .select()

  notes.length > 0 ? response.status(204).end() : response.status(404).end()
})

app.post("/api/notes", async (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    })
  }

  const { data: notes, error } = await supabase
    .from("notes")
    .insert([
      {
        content: body.content,
        important: body.important || false,
      },
    ])
    .select()

  if (error) {
    console.error("Supabase error:", error)
    return response.status(500).json({ error: "Failed to add note" })
  }

  response.json(notes[0])
})

app.put("/api/notes/:id", async (request, response) => {
  const id = request.params.id
  const body = request.body

  const { data: notes, error } = await supabase
    .from("notes")
    .update({
      content: body.content,
      important: body.important || false,
    })
    .eq("id", id)
    .select()

  if (error) {
    console.error("Supabase error:", error)
    return response.status(400).json({
      error: "note not found",
    })
  }

  response.json(notes[0])
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
