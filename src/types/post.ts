export interface Post {
  title: string;
  description: string;
  date: string;
  slug: string;
  image_url: string;
  reading_time: number;
  tags: string[];
  active: boolean;
  content: string;
}
