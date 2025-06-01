import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug: realSlug, metadata: data, content };
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    );
}
