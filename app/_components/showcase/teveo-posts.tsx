'use client';

import { useState } from 'react';
import { Merriweather_Sans, Inter } from 'next/font/google';
import { Post } from '@/interfaces/post';
import Link from 'next/link';
import { PlayCircleIcon, StopCircleIcon } from '@heroicons/react/24/solid';

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['500'],
});

type Props = {
  posts: Post[];
};

export default function Teveo({ posts }: Props) {
  const [play, setPlay] = useState(false);

  return (
    <div className='border-t-2 lg:border-t-4 border-cyan-500'>
      <div
        className={`${merriweatherSans.className} text-cyan-500 tracking-tight text-xl lg:text-2xl mt-2 mb-4`}>
        Audios recientes
      </div>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {posts.length &&
          posts.slice(0, 3).map(post => (
            <article key={post.slug} className='flex flex-col space-y-4'>
              <div
                className={`${merriweatherSans.className} text-xs tracking-wider font-light text-gray-500`}>
                Abril 5, 2024
              </div>
              <h4 className='font-semibold text-slate-800 text-lg flex-1'>{post.title}</h4>
              <p className={`${inter.className} text-slate-900 line-clamp-3`}>
                {post.excerpt}
              </p>
              <div className='flex items-center space-x-5'>
                <button
                  onClick={() => setPlay(!play)}
                  className={`${merriweatherSans.className} inline-flex items-center duration-300 ease-in-out text-cyan-700 hover:text-cyan-950 text-sm`}>
                  {!play ? (
                    <PlayCircleIcon className='size-5 mr-2' />
                  ) : (
                    <StopCircleIcon className='size-5 mr-2' />
                  )}
                  Escuchar audio
                </button>

                <span aria-hidden='true' className='text-sm font-bold text-slate-400'>
                  /
                </span>

                <Link
                  as={`/posts/${post.slug}`}
                  href='/posts/[slug]'
                  className='text-sm duration-300 ease-in-out text-cyan-700 hover:text-cyan-950'>
                  Ver el artículo
                </Link>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}
