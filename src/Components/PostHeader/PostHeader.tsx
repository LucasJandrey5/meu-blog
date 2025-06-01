interface PostHeaderProps {
  frontMatter: {
    title: string;
    date: string;
    tags?: string[];
  };
}

export default function PostHeader({ frontMatter }: PostHeaderProps) {
  return (
    <div className="mb-12">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">
        {frontMatter.title}
      </h1>
      <div className="flex items-center gap-4 text-gray-600">
        <time className="text-sm">
          {new Date(frontMatter.date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {frontMatter.tags && (
          <div className="flex gap-2">
            {frontMatter.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
