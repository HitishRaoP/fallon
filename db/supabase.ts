import "../envConfig"
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://vhgqbzfxaisrybuhindz.supabase.co',
    process.env.SUPABASE_KEY!)