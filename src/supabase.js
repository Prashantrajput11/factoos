
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wyrfopctrhnmdydhwwcw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5cmZvcGN0cmhubWR5ZGh3d2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzNjk2MzQsImV4cCI6MTk4Njk0NTYzNH0.-WljBkg7RpLjFsMjEF2SSq-a4iYDss7OA9vxcKQWSCM"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;