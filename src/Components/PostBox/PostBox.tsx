import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/post";

export default function PostBox({ slug, metadata }: Omit<Post, "content">) {
  const imageUrl = metadata.image_url
    ? `/post-images/${metadata.image_url}`
    : "/post-images/default.jpg";

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      <Link href={`/posts/${slug}`}>
        <div className="flex flex-col sm:flex-row">
          {/* Imagem do post */}
          <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={metadata.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, 192px"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-2">
                  {metadata.title}
                </h2>

                {metadata.description && (
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {metadata.description}
                  </p>
                )}

                {/* Tags */}
                {metadata.tags && metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {metadata.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {metadata.tags.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{metadata.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Meta informações */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <time dateTime={metadata.date}>
                  {formatDate(metadata.date)}
                </time>

                {metadata.reading_time && (
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
                    {metadata.reading_time} min
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
