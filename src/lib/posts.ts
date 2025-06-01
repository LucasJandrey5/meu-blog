import { GetStaticPaths, GetStaticProps } from "next";

import { serialize } from "next-mdx-remote/serialize";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPostSlugs } from "./mdx";

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs().map((slug) => slug.replace(/\.mdx$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeHighlight,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: post.metadata,
    },
  };
};
