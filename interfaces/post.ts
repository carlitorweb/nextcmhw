import { type Author } from './author';

export type Post = {
  title: string;
  slug: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  content: string;
  feature: boolean;
  category: string;
};
