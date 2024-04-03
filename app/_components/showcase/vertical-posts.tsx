import Link from 'next/link';
import { Merriweather_Sans } from 'next/font/google';
import { Post } from '@/interfaces/post';
import CoverImage from '@/app/_components/post/cover-image';

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
});

type Props = {
  post: Post;
};

export default function VerticalPosts({ post }: Props) {
  return (
    <Link
      as={`/posts/${post.slug}`}
      href='/posts/[slug]'
      className='group flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2 pt-2'>
      <div className='w-full md:max-w-44'>
        <CoverImage
          title={post.title}
          src={post.coverImage}
          classN='w-full object-cover object-top duration-300 aspect-[16/9] grayscale group-hover:grayscale-0'
        />
      </div>
      <div className='flex flex-col space-y-1'>
        <h2
          className={`${merriweather.className} line-clamp-3 font-semibold text-slate-900 duration-300 group-hover:text-cyan-600 text-base`}>
          {post.title}
        </h2>
        <div
          className={`${merriweather.className} text-[10px] tracking-wider font-light text-gray-500`}>
          hace 9h
        </div>
      </div>
    </Link>
  );
}
