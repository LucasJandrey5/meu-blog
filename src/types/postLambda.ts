export type PostLambda = {
  login: string;
  password: string;
  post: {
    title: string;
    description: string;
    date: string;
    slug: string;
    image_url: string;
    reading_time: number;
    tags: string[];
    content: string;
  };
};
