/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { classNames } from '../utils';

export default function Navbar({ currentPage }) {
   const navigation = [
      { name: 'Home', href: '/', current: currentPage === 'Home' },
      {
         name: 'Experience',
         href: '/experience',
         current: currentPage === 'Experience',
      },
      { name: 'About', href: '/about', current: currentPage === 'About' },
      // { name: 'Contact', href: '/contact', current: currentPage === 'Contact' },
   ];

   return (
      <Disclosure
         id='MainNav'
         as='nav'
         className='bg-white/60 font-source-serif-pro-regular fixed min-w-full z-10 backdrop-blur-sm'
      >
         {({ open }) => (
            <>
               <div className='max-w-5xl mx-auto py-2'>
                  <div className='relative flex items-center justify-between h-10'>
                     <div className='absolute inset-y-0 left-2 flex items-center sm:hidden'>
                        {/* Mobile menu button*/}
                        <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-white hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                           <span className='sr-only'>Open main menu</span>
                           {open ? (
                              <XIcon
                                 className='block h-6 w-6'
                                 aria-hidden='true'
                              />
                           ) : (
                              <MenuIcon
                                 className='block h-6 w-6'
                                 aria-hidden='true'
                              />
                           )}
                        </Disclosure.Button>
                     </div>
                     <div className='flex-1 flex items-center justify-center'>
                        <div className='flex-shrink-0 flex items-center'></div>
                        <div className='hidden sm:block sm:ml-6'>
                           <div className='flex space-x-4'>
                              {navigation.map((item) => (
                                 <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                       item.current
                                          ? 'border-slate-400 border-b-2'
                                          : 'hover:border-orange-200 hover:border-b-2',
                                       'px-3 py-1 text-md text-dark'
                                    )}
                                    aria-current={
                                       item.current ? 'page' : undefined
                                    }
                                 >
                                    {item.name}
                                 </a>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <Disclosure.Panel className='sm:hidden'>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                     {navigation.map((item) => (
                        <Disclosure.Button
                           key={item.name}
                           as='a'
                           href={item.href}
                           className={classNames(
                              item.current
                                 ? 'bg-slate-400 text-dark'
                                 : 'text-dark hover:bg-orange-200 hover:text-white',
                              'block px-3 py-2 rounded-md text-base font-medium'
                           )}
                           aria-current={item.current ? 'page' : undefined}
                        >
                           {item.name}
                        </Disclosure.Button>
                     ))}
                  </div>
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   );
}
