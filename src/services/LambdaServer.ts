import { PostLambda } from "@/types/postLambda";

export const handlePost = async (post: PostLambda) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_AWS_LAMBDA_API_URL || "",
    {
      method: "POST",
      body: JSON.stringify(post),
    }
  );

  return response.json();
};
