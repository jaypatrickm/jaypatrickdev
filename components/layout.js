import Head from 'next/head';
import Navbar from '../components/navbar';
import Link from 'next/link';

export default function Layout({ page, title, visibility, children }) {
   return (
      <>
         <Head>
            <title>{title} - Jaypatrick Dev</title>
         </Head>
         <header>
            <Navbar currentPage={page} visibility={visibility} />
         </header>
         {children}
         <footer className='bg-white py-8 px-5 text-left text-sm text-dark font-source-serif-pro-regular'>
            <section className='max-w-5xl lg:max-w-7xl mx-auto'>
               <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                  <div className='w-full py-2 text-center text-lg'>
                     <a
                        href='https://github.com/jaypatrickm'
                        target='_blank'
                        rel='noreferrer'
                        className='font-source-serif-pro-bold text-lg text-orange-100 hover:text-orange-200 hover:cursor-pointer text-center'
                     >
                        Github
                     </a>

                     <a
                        target='_blank'
                        rel='noreferrer'
                        className='font-source-serif-pro-bold text-lg block text-orange-100 hover:text-orange-200 hover:cursor-pointer text-center'
                        href='mailto:jaypatrickm@gmail.com?subject=Reaching out after visiting jaypatrick.dev'
                     >
                        jaypatrickm@gmail.com
                     </a>

                     <p>Thanks for stopping by, and let&apos;s get in touch!</p>
                     <p className='text-slate-400'>jaypatrick.dev 2022</p>
                  </div>
                  <div className='w-full justify-start'>
                     <ul className='font-source-serif-pro-bold text-orange-200 text-lg md:pl-6'>
                        <li className='py-2'>
                           <Link href='/'>
                              <a className='hover:underline'>Home</a>
                           </Link>
                        </li>
                        <li className='py-2'>
                           <Link href='/experience'>
                              <a className='hover:underline'>Experience</a>
                           </Link>
                        </li>
                        <li className='py-2'>
                           <Link href='/about'>
                              <a className='hover:underline'>About</a>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </section>
         </footer>
      </>
   );
}
