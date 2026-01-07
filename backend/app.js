import express from "express"
import notesRouter from "./controllers/notes.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/notes", notesRouter)

export default app
