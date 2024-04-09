import { Merriweather_Sans } from 'next/font/google';
import { Post } from '@/interfaces/post';
import CoverImage from '@/app/_components/post/cover-image';
import Link from 'next/link';

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
});

type Props = {
  posts: Post[];
};

export default function CategoryPosts({ posts }: Props) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-16'>
      {posts.length &&
        posts.map(post => (
          <article key={post.slug} className='group flex flex-col space-y-4'>
            <CoverImage
              title={post.title}
              src={post.coverImage}
              classN='w-full object-cover object-top duration-300 mix-blend-multiply opacity-90 aspect-[16/9] grayscale group-hover:grayscale-0'
              slug={post.slug}
            />

            <div className='p-2 flex flex-col space-y-4 mt-4'>
              <div
                className={`${merriweather.className} text-sm tracking-wider font-semibold text-cyan-500`}>
                Villa Clara
              </div>

              <div className='flex-1'>
                <h3
                  className={`${merriweather.className} font-bold text-slate-800 duration-300 group-hover:text-cyan-600 text-xl`}>
                  <Link as={`/posts/${post.slug}`} href='/posts/[slug]'>
                    {post.title}
                  </Link>
                </h3>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
}
