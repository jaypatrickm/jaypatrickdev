import Layout from '../components/layout';
import Image from 'next/image';

export default function AboutPage() {
   const images = [
      {
         id: 1,
         url: '/assets/about/jaypatrickdev-hiking-malibu-with-dogs.jpg',
         alt: 'Jay hiking in malibu with siberian husky dogs',
         caption: 'Me and my dogs, Phoebe and Piper, hiking in Malibu.',
         width: 1500,
         height: 1125,
      },
      {
         id: 2,
         url: '/assets/about/jaypatrickdev-palm-springs-art-museum.jpg',
         alt: 'Jay selfie at Palm Springs Art Museum exhibit',
         caption: 'Selfie at a Palm Spring Art Museum Exhibit.',
         width: 1500,
         height: 1127,
      },
   ];
   const images2 = [
      {
         id: 3,
         url: '/assets/about/jaypatrickdev-lego-harry-potter-castle-decorated.jpg',
         alt: 'Lego Harry Potter Hogwarts Castle Decorated',
         caption: 'Our Lego Hogwarts castle decorated in snow for Christmas.',
         width: 1500,
         height: 1125,
      },
      {
         id: 5,
         url: '/assets/about/jaypatrickdev-japan-mt-fuji-self.jpg',
         alt: 'Jay selfie near Mt.Fuji in Japan',
         caption:
            'A selfie with Mt. Fuji in the background when I was in Japan.',
         width: 1500,
         height: 1997,
      },
   ];

   return (
      <Layout page='About' title='About'>
         <main>
            <section className='bg-light pt-20 pb-10'>
               <div className='mx-auto max-w-5xl lg:max-w-7xl lg:px-6'>
                  <h1 className='capitalize font-source-serif-pro-bold text-lg px-6 lg:px-0 md:text-2xl lg:text-3xl  text-blue-200'>
                     About Me
                  </h1>
               </div>
               <div className='mx-auto max-w-5xl lg:max-w-7xl lg:px-6 lg:py-3'>
                  <div className='bg-white rounded-lg py-6'>
                     <section className=' grid grid-cols-2 gap-2 max-w-sm lg:max-w-4xl mx-auto'>
                        {images.map((image) => (
                           <div key={image.id} className=''>
                              <Image
                                 alt={image.alt}
                                 height={image.height / 2}
                                 width={image.width / 2}
                                 src={image.url}
                                 className='w-full object-cover'
                              />
                           </div>
                        ))}
                     </section>
                     <section className='prose prose-xl font-source-serif-pro-regular mx-auto max-w-2xl px-6 pt-10 pb-14'>
                        <p>
                           I&apos;m Jay Manalansan, and I love developing
                           websites to help people do things.{' '}
                        </p>
                        <p>
                           I&apos;m currently living in Tulsa, Oklahoma, with my
                           partner and two awesome Siberian huskies.
                        </p>

                        <p>
                           I grew up playing video games with family and friends
                           and always use them as a time to wind down and have
                           fun.
                        </p>
                        <p>
                           I love building new lego sets and going on hikes in
                           beautiful natural places.
                        </p>
                        <p>
                           Traveling is one of my favorite things to do, and I
                           hope to be able to go somewhere fun on a plane again
                           soon.
                        </p>
                     </section>
                     <section className='grid grid-cols-2 gap-2 overflow-hidden max-w-sm lg:max-w-4xl mx-auto'>
                        {images2.map((image) => (
                           <div key={image.id}>
                              <Image
                                 alt={image.alt}
                                 height={image.height / 2}
                                 width={image.width / 2}
                                 src={image.url}
                                 className='w-full object-cover'
                              />
                           </div>
                        ))}
                     </section>
                  </div>
               </div>
            </section>
         </main>
      </Layout>
   );
}
