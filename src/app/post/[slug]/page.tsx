import { components } from "@/Components/MDXComponents/MDXComponents";
import PostNotFound from "./not-found";
import { getPostBySlug } from "@/services/PostsService";
import { MDXRemote } from "next-mdx-remote/rsc";
import Header from "@/Components/Header/Header";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const metadata = await getPostBySlug(slug);

  return (
    <>
      <Header />
      <article className="max-w-4xl mx-auto px-6 py-12">
        {metadata ? (
          <div className="prose prose-lg prose-gray max-w-none">
            <MDXRemote source={metadata.content} components={components} />
          </div>
        ) : (
          <PostNotFound />
        )}
      </article>
    </>
  );
}
