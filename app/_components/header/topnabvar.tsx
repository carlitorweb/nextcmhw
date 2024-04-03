import IcecastButton from './icecast-button';

export default function Topnabvar() {
  return (
    <div className='border-b border-cyan-800 flex justify-end space-x-5 items-center'>
      <a
        href='https://www.facebook.com/radiocmhw'
        target='_blanck'
        className='flex text-gray-300 hover:text-white'>
        <span className='sr-only'>Facebook</span>
        <svg
          className='size-5 md:size-7 text-cyan-700 hover:text-cyan-600'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      </a>

      <a
        href='https://www.twitter.com/radiocmhw'
        target='_blanck'
        className='flex text-gray-300 hover:text-white ml-4'>
        <span className='sr-only'>Twitter - X</span>
        <svg
          className='size-5 md:size-7 text-cyan-700 hover:text-cyan-600'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'>
          <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
        </svg>
      </a>

      <a
        href='https://www.youtube.com/channel/UC1xub6ZuQ4otOj0Dvq24YdQ#'
        target='_blanck'
        className='flex text-gray-300 hover:text-white ml-4'>
        <span className='sr-only'>YouTube</span>
        <svg
          className='size-5 md:size-7 text-cyan-700 hover:text-cyan-600'
          fill='currentColor'
          viewBox='0 0 24 24'
          aria-hidden='true'>
          <path
            fillRule='evenodd'
            d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
            clipRule='evenodd'
          />
        </svg>
      </a>
      <IcecastButton />
    </div>
  );
}
