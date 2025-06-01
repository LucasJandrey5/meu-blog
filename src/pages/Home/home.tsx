import { getAllPosts } from "@/lib/mdx";
import PostList from "@/Components/PostList/PostList";
import { Post } from "@/types/post";

export default function HomePage() {
  const posts = getAllPosts() as Post[];

  return (
    <main className="min-h-screen">
      {/* Posts Section */}
      <PostList posts={posts} />
    </main>
  );
}
