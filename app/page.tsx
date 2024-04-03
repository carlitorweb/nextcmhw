import Container from '@/app/_components/layouts/container';

import { Post } from '@/interfaces/post';
import { getAllPosts, getPostsByCategory } from '@/lib/api';
import FeaturedPosts from './_components/showcase/featured-posts';
import CategoryPosts from './_components/showcase/category-posts';

export default function Home() {
  const allPosts = getAllPosts();

  const featurePosts: Post[] = [];
  const normalPosts: Post[] = [];

  allPosts.forEach(post => {
    post.feature ? featurePosts.push(post) : normalPosts.push(post);
  });

  const villaClaraPosts = getPostsByCategory('villa-clara').slice(0, 2);

  return (
    <Container>
      <main className='space-y-16'>
        <FeaturedPosts posts={featurePosts} />
        <CategoryPosts posts={villaClaraPosts} />
      </main>
    </Container>
  );
}
