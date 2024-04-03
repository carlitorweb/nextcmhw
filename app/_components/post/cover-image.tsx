import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  classN: string;
  slug?: string;
};

export default function CoverImage({ title, src, classN, slug }: Props) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={classN}
      width={700}
      height={466}
    />
  );
  return (
    <figure>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]' aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </figure>
  );
}
