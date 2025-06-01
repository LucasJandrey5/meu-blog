import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Layout from "@/app/layout";
import PostHeader from "@/Components/PostHeader/PostHeader";
import { getStaticPaths, getStaticProps } from "@/lib/posts";
import { components } from "@/Components/MDXComponents/MDXComponents";

interface PostPageProps {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
  };
}

export { getStaticPaths, getStaticProps };

export default function PostPage({ source, frontMatter }: PostPageProps) {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 py-12">
        <PostHeader frontMatter={frontMatter} />

        {/* Conteúdo do post */}
        <div className="prose prose-lg prose-gray max-w-none">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
}
