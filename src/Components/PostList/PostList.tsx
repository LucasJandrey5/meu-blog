import PostBox from "@/Components/PostBox/PostBox";
import { Post } from "@/types/post";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Últimos Posts</h2>
        <p className="text-gray-600 mb-8">Nenhum post encontrado ainda.</p>
        <div className="text-6xl mb-4">📝</div>
        <p className="text-gray-500 dark:text-gray-500">
          Em breve estaremos publicando conteúdo interessante!
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      {/* Header da seção */}
      <header className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Últimos Posts</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Artigos sobre tecnologia, programação e desenvolvimento
        </p>
      </header>

      {/* Lista de posts */}
      <div className="space-y-6">
        {posts.map(({ slug, metadata }) => (
          <PostBox key={slug} slug={slug} metadata={metadata} />
        ))}
      </div>

      {/* Indicador de mais posts */}
      {posts.length >= 5 && (
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400">
            Mostrando {posts.length} posts mais recentes
          </p>
        </div>
      )}
    </section>
  );
}
