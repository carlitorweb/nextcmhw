'use client';

import { useState } from 'react';
import { PlayCircleIcon, StopCircleIcon } from '@heroicons/react/24/solid';
import { Merriweather_Sans } from 'next/font/google';

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['600'],
});

export default function IcecastButton() {
  const [play, setPlay] = useState(false);

  /**
   * For joomla site use the follow html tag and from here using js I take the audio element:
   * <audio id='plyrStreaming' className='hidden' controls={false}>
   *    <source src='https://icecast.teveo.cu/TsxMM94R' type='audio/mpeg' />
   * </audio>
   */

  return (
    <button
      onClick={() => setPlay(!play)}
      type='button'
      className={`${merriweather.className} duration-300 ease-in-out tracking-wide inline-flex items-center gap-x-2 bg-cyan-700 border-t-[1px] border-x-[1px] border-cyan-800 px-2.5 md:px-3.5 py-1 md:py-1.5 text-xs md:text-sm font-semibold text-slate-100 shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700`}>
      {!play ? (
        <PlayCircleIcon className='size-5 md:size-7' />
      ) : (
        <StopCircleIcon className='size-5 md:size-7' />
      )}
      ¡Escuchar W en Vivo!
    </button>
  );
}
