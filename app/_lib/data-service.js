import { supabase } from "./supabase";

export async function getAllBlogs() {
  let { data, error } = await supabase.from("blogs").select("*");
  if (error) console.log(error);
  return data;
}
export async function getBlogByID(id) {}
