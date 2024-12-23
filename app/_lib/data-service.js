import { supabase } from "./supabase";

export async function getAllBlogs() {
  let { data, error } = await supabase.from("blogs").select("*");
  if (error) console.log(error);
  return data;
}
export async function getBlogByID(id) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) console.log(error);
  return data;
}

// ! get upvotes & submit
export async function incrementUpvoteById(id) {
  const { data, error } = await supabase
    .from("blogs")
    .select("likes")
    .eq("id", id)
    .single();
  if (error) console.log(error);
  return data;
}

// ! trending blogs
export async function getAllTrendingBlogs() {
  let { data, error } = await supabase
    .from("blogs")
    .select("*")
    .is("is_trending", true);
  if (error) console.log(error);
  return data;
}
