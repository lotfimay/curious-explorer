"use server";
import { db } from "@/lib/db";

export const findPostBySlug = async (slug: string) => {
  try {
    const post = await db.post.findUnique({
      where: {
        slug: slug,
      },
    });
    return post;
  } catch (error) {
    throw error;
  }
};
