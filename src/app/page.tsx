"use client";

import PostBox from "@/Components/PostBox/PostBox";
import Header from "@/Components/Header/Header";
import { getPosts } from "@/services/PostsService";
import { IndexData } from "@/types";
import { Post } from "@/types/post";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [indexData, setIndexData] = useState<IndexData | null>(null);

  const getIndexFile = async () => {
    const indexData = await getPosts();
    console.log(indexData);
    setIndexData(indexData);
  };

  useEffect(() => {
    getIndexFile();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Últimos Posts
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore os artigos mais recentes sobre tecnologia, desenvolvimento e
            muito mais.
          </p>
        </div>

        {/* Grid de posts */}
        {indexData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indexData.posts.map((post: Post) => (
              <PostBox key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
