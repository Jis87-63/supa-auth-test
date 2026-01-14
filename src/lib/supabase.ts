import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pzsbixyxpzinnpegpnfg.supabase.co';
const supabaseAnonKey = 'sb_publishable_PDKkwkbD5gs97Uclpl_QgA_UoSeRn15';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
