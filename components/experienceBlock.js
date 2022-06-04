import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { classNames } from '../utils';

function createMarkup(html) {
   return { __html: html };
}

export default function ExperienceBlock({
   category,
   title,
   subtitle,
   body,
   technologies,
   gallery,
   links,
}) {
   return (
      <section className='mx-auto flex flex-col lg:flex-row bg-white snap-center snap-always rounded-lg'>
         <Tab.Group as='div' className='flex-col pt-6 px-6 lg:p-0 lg:w-2/3'>
            <Tab.Panels as='div' className='pt-4 pb-2 lg:pl-4'>
               {gallery.map((item) => (
                  <Tab.Panel key={item.alt}>
                     <Image
                        className='h-48 w-full object-cover top-2 object-top'
                        src={item.url}
                        alt=''
                        height='937'
                        width='1500'
                     />
                  </Tab.Panel>
               ))}
            </Tab.Panels>
            <Tab.List className='pb-4 pt-3 border-slate-100 border-t-2 grid grid-cols-4 gap-6 lg:pl-4'>
               {gallery.map((item) => (
                  <Tab
                     key={item.alt}
                     className='relative h-12 sm:h-16 md:h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-orange-200 focus:ring-opacity-50'
                  >
                     {({ selected }) => (
                        <>
                           <span className='absolute inset-0 rounded-md overflow-hidden border border-slate-200'>
                              <Image
                                 className='lg:h-48 w-full object-cover top-2 object-top'
                                 src={item.url}
                                 alt=''
                                 height='156'
                                 width='250'
                              />
                           </span>
                           <span
                              className={classNames(
                                 selected
                                    ? 'ring-orange-100'
                                    : 'ring-transparent',
                                 'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                              )}
                              aria-hidden='true'
                           />
                        </>
                     )}
                  </Tab>
               ))}
            </Tab.List>
         </Tab.Group>
         <div className='p-6 flex-grow lg:w-1/3 '>
            <p className='font-source-serif-pro-regular text-xs md:text-lg text-blue-200'>
               {category}
            </p>
            <div className='mt-2'>
               <p
                  className='font-source-serif-pro-semi-bold text-xl md:text-4xl lg:text-xl text-orange-100 pb-1 capitalize'
                  dangerouslySetInnerHTML={createMarkup(title)}
               ></p>
               <p className='font-source-serif-pro-italic text-slate-300 text-md md:text-lg lg:text-md pb-1'>
                  {subtitle}
               </p>
               <p
                  className='font-source-serif-pro-regular mt-3 text-base md:text-lg lg:text-base text-gray-500'
                  dangerouslySetInnerHTML={createMarkup(body)}
               ></p>
               {links.url.length ? (
                  <a
                     className='block font-source-serif-pro-regular text-orange-100 hover:underline'
                     href={links.url}
                     target='_blank'
                     rel='noreferrer'
                  >
                     Visit site
                  </a>
               ) : (
                  ''
               )}
               {links.github.length ? (
                  <a
                     className='block font-source-serif-pro-regular text-orange-100 hover:underline'
                     href={links.github}
                     target='_blank'
                     rel='noreferrer'
                  >
                     Github
                  </a>
               ) : (
                  ''
               )}
               <p className='font-source-serif-pro-bold pt-10 text-light-brown'>
                  Technologies
               </p>
               <p className='font-source-serif-pro-regular text-light-brown'>
                  {technologies}
               </p>
            </div>
         </div>
      </section>
   );
}
