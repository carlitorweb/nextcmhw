import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Topnabvar from '@/app/_components/header/topnabvar';
import Container from '@/app/_components/layouts/container';
import Image from 'next/image';
import Mainmenu from '@/app/_components/header/mainmenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CMHW',
  description: 'Prototype of the next template for CMHW',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} relative bg-[#efe9dc] dark:bg-slate-900`}>
        <header>
          <Topnabvar />
          <Container>
            <div className='flex justify-between items-center'>
              <Image
                src='/assets/logos/newbrand.png'
                alt='CMHW'
                className='w-auto max-h-16 md:max-h-24'
                width={3027}
                height={1176}
              />

              <Mainmenu />
            </div>
          </Container>
        </header>
        {children}
      </body>
    </html>
  );
}
