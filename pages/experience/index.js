import Layout from '../../components/layout';
import ExperienceBlock from '../../components/experienceBlock';
import { getAllPosts } from '../../lib/api';

export default function ExperiencePage({ posts }) {
   console.log(posts);
   return (
      <Layout page='Experience' title='Experience'>
         <main>
            <section className='bg-light pt-20 pb-10'>
               <div className='mx-auto max-w-5xl lg:max-w-7xl lg:px-6'>
                  <h1 className='capitalize font-source-serif-pro-bold text-lg px-6 lg:px-0 md:text-2xl lg:text-3xl  text-blue-200'>
                     Work Experiences
                  </h1>
               </div>
               <div className='grid gap-10 lg:gap-14 grid-cols-1 mx-auto max-w-5xl lg:max-w-7xl lg:px-6 lg:py-3 snap-y snap-mandatory'>
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
         </main>
      </Layout>
   );
}

export async function getStaticProps({ params }) {
   const posts = getAllPosts([
      'category',
      'title',
      'subtitle',
      'body',
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
