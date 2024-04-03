import Link from 'next/link';
import { Bars4Icon } from '@heroicons/react/24/solid';
import { Merriweather_Sans } from 'next/font/google';

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Mainmenu() {
  const links = [
    { title: 'Villa Clara', url: '#' },
    { title: 'Nacionales', url: '#' },
    { title: 'Internacionales', url: '#' },
    { title: 'Cultura', url: '#' },
    { title: 'Deporte', url: '#' },
    { title: 'Ciencia', url: '#' },
  ];

  return (
    <>
      <div className='flex justify-between items-center space-x-10'>
        <div className='hidden md:flex justify-between items-center space-x-10'>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`${merriweather.className} text-normal font-normal text-gray-950 hover:text-sky-500 tracking-wider ease-in-out duration-500`}>
              {link.title}
            </Link>
          ))}
        </div>

        <button
          className={`${merriweather.className} duration-300 ease-in-out rounded-full border-2 border-cyan-700 hover:border-cyan-900 hover:bg-cyan-700 hover:text-slate-50 p-2 font-bold bg-transparent text-cyan-700`}>
          <Bars4Icon className='w-5 h5' />
        </button>
      </div>
    </>
  );
}
