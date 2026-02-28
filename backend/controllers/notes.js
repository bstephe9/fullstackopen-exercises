import supabase from "../database.js"
import { Router } from "express"

const notesRouter = Router()

notesRouter.get("/", async (request, response, next) => {
  const { data: notes, error } = await supabase.from("notes").select()

  if (error) {
    return next(error)
  }

  response.json(notes)
})

notesRouter.get("/:id", async (request, response, next) => {
  const id = request.params.id

  let { data: notes, error } = await supabase
    .from("notes")
    .select()
    .eq("id", id)

  if (error) {
    return next(error)
  }

  const note = notes[0]

  note ? response.json(note) : response.status(404).end()
})

notesRouter.post("/", async (request, response, next) => {
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
    return next(error)
  }

  response.json(notes[0])
})

notesRouter.delete("/:id", async (request, response, next) => {
  const id = request.params.id
  const { data: notes, error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)
    .select()

  if (error) {
    return next(error)
  }

  notes.length > 0 ? response.status(204).end() : response.status(404).end()
})

notesRouter.put("/:id", async (request, response) => {
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
    return next(error)
  }

  response.json(notes[0])
})

export default notesRouter
