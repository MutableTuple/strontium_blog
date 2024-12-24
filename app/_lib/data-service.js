import { supabase } from "./supabase";

export async function getAllBlogs() {
  let { data, error } = await supabase
    .from("blogs")
    .select("*,users(name,image)")
    .order("created_at", { ascending: false });
  if (error) console.log(error);
  return data;
}
export async function getBlogByID(id) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*,users(name,image)")
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

// !Stories
export async function getAllStories() {
  let { data, error } = await supabase
    .from("stories")
    .select("*,users(name,image)");
  if (error) console.log(error);
  return data;
}

export async function getStoryByID(id) {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .eq("id", id)
    .single();
  if (error) console.log(error);
  return data;
}
