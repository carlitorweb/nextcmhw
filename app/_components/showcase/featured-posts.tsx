import { Merriweather_Sans } from 'next/font/google';
import { Post } from '@/interfaces/post';
import HeroPost from './hero-post';
import VerticalPosts from './vertical-posts';
import ListPosts from './list-posts';

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

type Props = {
  posts: Post[];
};

export default function FeaturedPosts({ posts }: Props) {
  const heroPost = posts.shift();

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-5 gap-10'>
        <div className='md:col-span-3'>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              slug={heroPost.slug}
              author={heroPost.author.name}
            />
          )}
        </div>
        <div className='md:col-span-2 flex flex-col gap-1 border-t-2 lg:border-t-4 border-cyan-500'>
          <div
            className={`${merriweather.className} text-cyan-500 tracking-tight text-xl lg:text-2xl mt-2`}>
            Lo más reciente
          </div>
          <div className='flex flex-col space-y-2 divide-dashed divide-y divide-gray-900/10'>
            {posts.map(post => (
              <VerticalPosts key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16'>
        {posts.map(post => (
          <ListPosts key={post.slug} post={post} />
        ))}
      </section>
    </>
  );
}
