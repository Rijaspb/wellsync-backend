import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if(!supabaseUrl || !supabaseKey){
    throw new Error('Supabase URL and API Key not available from .env')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
