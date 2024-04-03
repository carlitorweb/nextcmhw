import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  // Remove ".md" from file name to get the slug
  const realSlug = slug.replace(/\.md$/, '');

  // Read markdown file as string
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))

    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getPostsByCategory(category: string): Post[] {
  const slugs = getPostSlugs();
  const posts: Post[] = [];

  slugs.forEach(slug => {
    const post = getPostBySlug(slug);
    if (post.category === category) {
      posts.push(post);
    }
  });

  if (!posts.length) {
    posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  }

  return posts;
}
