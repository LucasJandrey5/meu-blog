"use client";

import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";

export default function PostBox({ post }: { post: Post }) {
  const imageUrl =
    process.env.NEXT_PUBLIC_AWS_BUCKET_URL! + "/" + post.image_url;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return date.replaceAll(" de ", " ").replace(".", ",");
  };

  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      <Link href={`/post/${post.slug}`}>
        <div className="flex flex-col">
          {/* Imagem do post */}
          <div className="relative w-full h-48 flex-shrink-0 bg-gray-100 flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, 192px"
              />
            ) : (
              <div className="animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
                  {post.title}
                </h2>

                {post.description && (
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {post.description}
                  </p>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Meta informações */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <time dateTime={post.date}>{formatDate(post.date)}</time>

                {post.reading_time && (
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {post.reading_time} min
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
