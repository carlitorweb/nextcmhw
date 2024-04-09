import Link from 'next/link';
import { Merriweather_Sans } from 'next/font/google';
import { Post } from '@/interfaces/post';

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
});

type Props = {
  post: Post;
};

export default function ListPosts({ post }: Props) {
  return (
    <Link
      as={`/posts/${post.slug}`}
      href='/posts/[slug]'
      className='group pt-2 border-t-4 border-slate-900 duration-300 hover:border-cyan-600'>
      <h2
        className={`${merriweather.className} font-semibold text-slate-800 duration-300 group-hover:text-cyan-600 text-2xl`}>
        {post.title}
      </h2>

      <div className='flex justify-start items-center space-x-5 mt-5'>
        <div
          className={`${merriweather.className} text-xs tracking-wider font-semibold text-cyan-700`}>
          {post.author.name}
        </div>
        <div
          className={`${merriweather.className} text-[10px] tracking-wider font-light text-gray-500`}>
          hace 9h
        </div>
      </div>
    </Link>
  );
}
