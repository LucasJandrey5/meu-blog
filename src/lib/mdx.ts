"use server";

import matter from "gray-matter";

export const resolvePost = async (file: string) => {
  const { data, content } = await matter(file.split("---")[2]);

  return { metadata: data, content };
};
