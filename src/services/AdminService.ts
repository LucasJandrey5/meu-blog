"use client";

import { Post } from "@/types/post";
import { handlePost } from "./LambdaServer";
import { PostLambda } from "@/types/postLambda";

// Função para criar um novo post
export async function createPost(
  postData: Post,
  authData: { username: string; password: string }
) {
  try {
    const frontMatter = `
  ---
  title: "${postData.title}"
  date: "${postData.date}"
  description: "${postData.description || ""}"
  image_url: "${postData.image_url || ""}"
  reading_time: ${postData.reading_time || 5}
  slug: "${postData.slug}"
  tags: [${postData.tags?.map((tag: string) => `"${tag}"`).join(", ") || ""}]
  active: true
  ---

  ${postData.content}
  `;

    const postDataLambda: PostLambda = {
      login: authData.username,
      password: authData.password,
      post: {
        title: postData.title,
        description: postData.description || "",
        date: postData.date,
        slug: postData.slug,
        image_url: postData.image_url || "",
        reading_time: postData.reading_time || 5,
        tags: postData.tags || [],
        content: frontMatter,
      },
    };

    await handlePost(postDataLambda);

    return { success: true, slug: postData.slug };
  } catch (error) {
    console.error("Erro ao criar post:", error);
    throw new Error("Falha ao criar o post");
  }
}
