import { Post } from '@/interfaces/post';
import { Merriweather_Sans } from 'next/font/google';
import CoverImage from '@/app/_components/post/cover-image';
import Link from 'next/link';

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
});

type Props = {
  posts: Post[];
};

export default function Radiodentro({ posts }: Props) {
  const mainPost = posts.shift()!;
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='flex flex-col gap-4'>
        {posts.slice(0, 3).map(post => (
          <article key={post.slug}>
            <Link
              as={`/posts/${post.slug}`}
              href='/posts/[slug]'
              className='group flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2 pt-2'>
              <div className='w-full md:max-w-44'>
                <CoverImage
                  title={post.title}
                  src={post.coverImage}
                  classN='w-full object-cover object-top duration-300 mix-blend-multiply opacity-90 aspect-[4/3] grayscale group-hover:grayscale-0'
                />
              </div>
              <div className='flex flex-col space-y-4'>
                <div
                  className={`${merriweather.className} text-sm tracking-wider font-semibold text-cyan-700`}>
                  {post.author.name}
                </div>
                <h2
                  className={`${merriweather.className} line-clamp-3 font-semibold text-slate-800 duration-300 group-hover:text-cyan-600 text-xl`}>
                  {post.title}
                </h2>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <article className='group flex flex-col space-y-2'>
        <CoverImage
          title={mainPost.title}
          src={mainPost.coverImage}
          classN='w-full object-cover object-top duration-300 mix-blend-multiply opacity-90 aspect-[16/9] grayscale group-hover:grayscale-0'
          slug={mainPost.slug}
        />

        <div className='p-2 flex flex-col space-y-4 mt-4'>
          <div
            className={`${merriweather.className} text-xs tracking-wider font-semibold text-cyan-700`}>
            {mainPost.author.name}
          </div>

          <div className='flex-1'>
            <h2
              className={`${merriweather.className} font-semibold text-slate-800 duration-300 group-hover:text-cyan-600 text-xl`}>
              <Link as={`/posts/${mainPost.slug}`} href='/posts/[slug]'>
                {mainPost.title}
              </Link>
            </h2>
          </div>
        </div>
      </article>
    </section>
  );
}
