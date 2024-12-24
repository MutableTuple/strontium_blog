"use server";

import { supabase } from "./supabase";

export async function upvoteItem(table, id) {
  try {
    // Fetch the current number of likes
    const { data: item, error: fetchError } = await supabase
      .from(table)
      .select("likes")
      .eq("id", id)
      .single();

    if (fetchError) throw fetchError;

    // Increment the likes count
    const updatedLikes = (item.likes || 0) + 1;

    // Update the database
    const { error: updateError } = await supabase
      .from(table)
      .update({ likes: updatedLikes })
      .eq("id", id);

    if (updateError) throw updateError;

    // Return the updated likes count
    return updatedLikes;
  } catch (error) {
    console.error(`Error in upvoteItem for ${table}:`, error);
    return null;
  }
}
