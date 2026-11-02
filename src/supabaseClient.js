import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || 'https://gyffgsbuejmaymlocacw.supabase.co';
const supabaseKey = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || 'sb_publishable_JXJNUfYi0QVxodWmNZRXOg_wx9deFXi';

export const supabase = createClient(supabaseUrl, supabaseKey);
