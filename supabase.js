import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"
//createClient (from supbase) - fn to connect app to the DB
//cdn - Content Delivery Network
//esm = ECMAScript Module tells jsDelivr to give the ES-module-compatible version
export const supabase = createClient( "https://lkxdhqylwhqhbebcinjl.supabase.co", "sb_publishable_hO0GkM9b4FbVtk1TPNyc7A_0U4P2n8l" );
//creates a connection using the supabase project URL(1st arg) & the public API key(2nd arg)


