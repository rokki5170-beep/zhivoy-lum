import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pznotyzvugmmgzfrdjxz.supabase.co";
const supabaseKey = "sb_publishable_kBugCmE-L8it7TZMg5oeAw_DAcPF-qb";

export const supabase = createClient(supabaseUrl, supabaseKey);
