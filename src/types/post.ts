export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

export interface PostMetadata {
  title: string;
  date: string;
  description?: string;
  image_url?: string;
  reading_time?: number;
  tags?: string[];
}
