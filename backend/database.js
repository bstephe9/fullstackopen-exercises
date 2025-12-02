import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"
import postgres from "postgres"

dotenv.config({ path: "../.env", quiet: true })

// const sql = postgres(process.env.DATABASE_URL)
// const databaseUrl = process.env.DATABASE_URL
// const supabaseKey = process.env.DATABASE_KEY

const databaseUrl = "https://wvmkzhwbancemazrvsnn.supabase.co"

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2bWt6aHdiYW5jZW1henJ2c25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNTExMDgsImV4cCI6MjA3OTgyNzEwOH0.ZmIligZWTqgyyy8K7C_eA30WQsFYs5RFKmRkCtcZXPI"

const supabase = createClient(databaseUrl, supabaseKey)

const names = ["meowth", "ash", "max", "james", "koffing"]

names.forEach(async (currentName) => {
  const { d, e } = await supabase.from("test").insert({ name: currentName })
  console.log(d, e)
})


// # TODO: index.js, make notes table
