import { Post } from "./post";

export interface IndexData {
  title: string;
  description: string;
  author: string;
  url: string;
  image: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
  };
  posts: Array<Post>;
}
