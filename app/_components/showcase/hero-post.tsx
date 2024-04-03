import { Merriweather_Sans } from 'next/font/google';
import Link from 'next/link';
import CoverImage from '@/app/_components/post/cover-image';

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

type Props = {
  title: string;
  coverImage: string;
  slug: string;
  author: string;
};

export default function HeroPost({ title, coverImage, slug, author }: Props) {
  return (
    <article className='group flex flex-col'>
      <div className='md:shrink-0'>
        <CoverImage
          title={title}
          src={coverImage}
          classN='w-full object-cover object-top duration-300 aspect-[16/9] grayscale group-hover:grayscale-0'
          slug={slug}
        />
      </div>

      <div className='p-2 flex flex-col space-y-4 mt-4'>
        <div
          className={`${merriweather.className} text-xs tracking-wider font-semibold text-cyan-700`}>
          {author}
        </div>

        <div className='flex-1'>
          <h2
            className={`${merriweather.className} font-semibold text-slate-900 duration-300 group-hover:text-cyan-600 text-2xl lg:text-3xl`}>
            <Link as={`/posts/${slug}`} href='/posts/[slug]'>
              {title}
            </Link>
          </h2>
        </div>
      </div>
    </article>
  );
}
