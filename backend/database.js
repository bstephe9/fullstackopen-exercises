import { createClient } from "@supabase/supabase-js"
import config from "./utils/config.js"

const supabaseUrl = config.SUPABASE_URL
const supabaseKey = config.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
signInWithEnvCredentials(supabase)

async function signInWithEnvCredentials(supabase) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: config.SUPABASE_AUTH_EMAIL,
      password: config.SUPABASE_AUTH_PASSWORD,
    })

    if (error) throw error

    return data
  } catch (err) {
    throw err
  }
}

export default supabase
