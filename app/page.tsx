import Container from '@/app/_components/layouts/container';

import { Post } from '@/interfaces/post';
import { getAllPosts, getPostsByCategory } from '@/lib/api';
import FeaturedPosts from './_components/showcase/featured-posts';
import CategoryPosts from './_components/showcase/category-posts';
import Teveo from './_components/showcase/teveo-posts';
import Radiodentro from './_components/showcase/radio-dentro';

export default function Home() {
  const allPosts = getAllPosts();

  const featurePosts: Post[] = [];
  const normalPosts: Post[] = [];

  allPosts.forEach(post => {
    post.feature ? featurePosts.push(post) : normalPosts.push(post);
  });

  const villaClaraPosts = getPostsByCategory('villa-clara').slice(0, 2);
  const radioDentroPosts = getPostsByCategory('radio-adentro').slice(0, 4);

  return (
    <Container>
      <main className='space-y-16'>
        <FeaturedPosts posts={featurePosts} />
        <CategoryPosts posts={villaClaraPosts} />
        <Teveo posts={normalPosts} />
        <Radiodentro posts={radioDentroPosts} />
      </main>
    </Container>
  );
}
