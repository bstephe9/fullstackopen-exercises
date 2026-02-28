import express from "express"
import notesRouter from "./controllers/notes.js"
import cors from "cors"
import logger from "./utils/logger.js"
import config from "./utils/config.js"
import middleware from "./utils/middleware.js"

const app = express()

logger.info(`Connecting to ${config.SUPABASE_URL}`)

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use("/api/notes", notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app
