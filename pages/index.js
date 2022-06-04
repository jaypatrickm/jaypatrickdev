import Layout from '../components/layout';
import Image from 'next/image';
import { getAllPosts } from '../lib/api';
import { ParallaxBanner } from 'react-scroll-parallax';
import { MailIcon, DocumentDownloadIcon } from '@heroicons/react/outline';
import ExperienceBlock from '../components/experienceBlock';

export default function HomePage({ posts }) {
   return (
      <Layout page='Home' title='Home'>
         <main className='min-h-screen'>
            <div className='[min-height:1000px] md:[min-height:95vh] bg-[image:url("/assets/jaypatrickdev-gradient-bg-mobile.jpg")] md:bg-[image:url("/assets/jaypatrickdev-gradient-bg-desktop.jpg")] bg-cover'>
               <section className='flex flex-col lg:items-center py-20 lg:py-12 lg:flex-row lg:justify-center lg:mt-0 lg:max-w-5xl mx-auto absolute inset-0'>
                  <div className='flex flex-col px-6 pb-4 sm:pb-10 lg:pb-0'>
                     <div className='inline-flex justify-center align-middle flex-initial mb-2 lg:mb-0 lg:hidden'>
                        <Image
                           alt="Jaypatrickdev Jay's Avatar"
                           src='/assets/avatar-m.png'
                           width={168}
                           height={168}
                        />
                     </div>
                     <div className='align-middle hidden lg:inline-flex mb-4 justify-center'>
                        <div className='border-orange-100 border-6 [border-radius:155.5px] inline-flex justify-center'>
                           <Image
                              alt="Jaypatrickdev Jay's Avatar"
                              src='/assets/avatar.png'
                              width={311}
                              height={311}
                           />
                        </div>
                     </div>
                     <a
                        href='mailto:jaypatrickm@gmail.com?subject=Reaching out after visiting jaypatrick.dev'
                        className='font-source-serif-pro-bold text-center text-xl text-orange-100 hover:text-orange-200 hover:cursor-pointer lg:px-6 py-3 rounded-full w-full  items-center justify-center lg:w-auto inline-flex flex-grow-1'
                     >
                        <span>
                           <MailIcon
                              className='h-6 w-6 flex-1 mr-5'
                              aria-hidden='true'
                           />
                        </span>
                        <span className='lg:flex-1'>jaypatrickm@gmail.com</span>
                     </a>
                     <a
                        href='https://github.com/jaypatrickm'
                        target='_blank'
                        rel='noreferrer'
                        className='font-source-serif-pro-bold text-lg text-orange-100 hover:text-orange-200 hover:cursor-pointer text-center'
                     >
                        Github
                     </a>
                  </div>
                  <div className='px-6 md:mx-auto md:pt-3 text-left lg:px-9 lg:ml-6 max-w-2xl'>
                     <h1 className='font-source-serif-pro-bold text-3xl text-light sm:mb-2 lg:[font-size:2.9rem] pb-2'>
                        Jaypatrick Manalansan
                     </h1>
                     <h2 className='font-source-serif-pro-bold-italic text-2xl text-orange-100 mb-2 sm:[font-size:2.15rem]'>
                        Software Developer
                     </h2>
                     <p className='font-source-serif-pro-regular text-xl text-light mb-14 sm:text-lg sm:leading-10 pt-5'>
                        I have over 5 years of professional experience
                        developing for small and enterprise sized businesses.
                        I&apos;m most comfortable writing frontend code but
                        I&apos;m always learning different parts of software
                        development. I like working in tech focused teams and
                        believe in developing great soft skills along the way.
                     </p>
                     <div>
                        <a
                           href='/docs/JaypatrickManalansan_Resume_2022.pdf'
                           className='font-source-serif-pro-bold text-lg text-light bg-dark hover:bg-slate-400 px-6 py-3 border-transparent flex-inline items-center rounded-full inline-block'
                           target='_blank'
                           download
                        >
                           Download Resume
                           <DocumentDownloadIcon
                              className='h-5 ml-3 -mr-1 w-5 inline-block'
                              aria-hidden='true'
                           />
                        </a>
                     </div>
                  </div>
               </section>
            </div>
            <ParallaxBanner
               layers={[
                  {
                     image: '/assets/jaypatrickdev-frost-law-firm-screens-bg-desktop@2x.jpg',
                     speed: -15,
                  },
               ]}
               className='aspect-[2/1]'
            />
            <section className='bg-light'>
               <div className='grid gap-10 lg:gap-28 grid-cols-1 mx-auto max-w-5xl lg:max-w-7xl lg:px-6 lg:py-32 snap-y snap-mandatory'>
                  {posts.length > 0
                     ? posts.map((post) => (
                          <ExperienceBlock
                             key={post.title}
                             category={post.category}
                             title={post.title}
                             subtitle={post.subtitle}
                             body={post.excerpt}
                             technologies={post.technologies}
                             gallery={post.gallery}
                             links={post.links}
                          />
                       ))
                     : ''}
               </div>
            </section>
            <ParallaxBanner
               layers={[
                  {
                     image: '/assets/jaypatrickdev-iherb-screens-bg-desktop@2x.jpg',
                     speed: -15,
                  },
               ]}
               className='aspect-[2/1]'
            />
         </main>
      </Layout>
   );
}

export async function getStaticProps() {
   const posts = getAllPosts([
      'category',
      'title',
      'subtitle',
      'technologies',
      'gallery',
      'links',
      'date',
      'excerpt',
   ]);

   return {
      props: {
         posts,
      },
   };
}
