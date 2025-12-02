import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
signInWithEnvCredentials(supabase)

async function signInWithEnvCredentials(supabase) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: process.env.SUPABASE_AUTH_EMAIL,
      password: process.env.SUPABASE_AUTH_PASSWORD,
    })

    if (error) throw error

    return data
  } catch (err) {
    throw err
  }
}

export default supabase
