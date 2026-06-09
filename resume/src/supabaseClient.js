import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://evvcdwpfdztpsrkzhnjr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2dmNkd3BmZHp0cHNya3pobmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyODgxNjgsImV4cCI6MjA5NTg2NDE2OH0.j2zSPqQONqiMLgIrDVWh8yRCs0skBs74G6xT9xiRBlg"

export const supabase = createClient(supabaseUrl, supabaseKey)