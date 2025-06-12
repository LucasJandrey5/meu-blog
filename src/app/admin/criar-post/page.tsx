"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { createPost } from "@/services/AdminService";
import { Post } from "@/types/post";
import { PostForm } from "@/Components/PostForm";
import { AuthContext } from "@/Contexts/AuthContext";

export default function CriarPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { getData } = useContext(AuthContext);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  // Função para processar o submit após autenticação
  const processSubmit = async (formData: Post) => {
    if (!formData.title.trim() || !formData.content.trim()) {
      setError("Título e conteúdo são obrigatórios");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const slug = generateSlug(formData.title);

      const postData = {
        ...formData,
        slug,
        readingTime: formData.reading_time || 5,
        image: formData.image_url || "default.jpg",
      };

      await createPost(postData, getData());
      router.push("/admin");
    } catch (err) {
      setError("Erro ao criar post. Tente novamente.");
      console.error("Erro ao criar post:", err);
    } finally {
      setLoading(false);
    }
  };

  // handleSubmit modificado para abrir o modal primeiro
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = (e.target as HTMLFormElement).formData as Post;

    await processSubmit(formData);
  };

  return (
    <>
      {/* Formulário de Post */}
      <PostForm
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        isAuthenticated={getData().username !== "" && getData().password !== ""}
      />
    </>
  );
}
