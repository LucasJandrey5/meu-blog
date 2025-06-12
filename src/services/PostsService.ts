import { resolvePost } from "@/lib/mdx";
import { geFileFromS3, getIndexJson } from "@/services/S3Service";

export const getPosts = async () => {
  const indexFile = await getIndexJson();

  return indexFile;
};

export const getPostBySlug = async (slug: string) => {
  const file = await geFileFromS3(`posts/${slug}.mdx`);

  if (!file) {
    return null;
  }

  const resolvedPost = await resolvePost(file);

  return resolvedPost;
};
