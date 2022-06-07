import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout/layout';
import { Tag } from '../components/tag/tag';
import { calculateAgeToday } from '../lib/date/age';
import utilStyles from '../styles/utils.module.scss';

export default function About() {
  const age = calculateAgeToday(new Date('1995-08-24'));
  const favoriteTech: string[] = [
    "NextJS",
    "Tailwind",
    "Angular",
    "NestJS",
    "Jest",
    "PostgreSQL",
    "Java"
  ];

  const learningTech: string[] = [
    "React Admin",
    "Three.js",
    "Socket.io",
    "MongoDB",
    "GraphQL",
    "Web design",
    "Strapi",
    "Rust",
    "Spring",
    "Hibernate",
    "Unity"
  ];

  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>

      <div className='container text-md mx-auto lg:w-9/12'>
        <h1 className='text-3xl mx-auto text-center'>
          About me
        </h1>

        <div 
          className={`
            mt-10
            container
            grid
            lg:grid-cols-2
          `}
        >
          <div className='flex flex-col gap-5'>
            <section className=''>
              <h2 className='text-2xl mb-2'>
                Who am I ?
              </h2>
              <p>
                Hi, I'm Julien Pinson, a { age } year old Belgian living in Huy. 
              </p>           
            </section>

            <section className=''>
              <h2 className='text-2xl mb-2'>
                What's my current situation
              </h2>
              <p>
                Currently unemployed, I'm working toward getting my degree in Business Computing at the IEPSCF Namur Cadets night school (2nd year out of 4).
              </p>
              
            </section>

            <section className=''>
              <h2 className='text-2xl mb-2'>
                When did I first got into coding
              </h2>
              <p>
                I have been coding web-based projects as a hobby since 2016, but I first learned about it in 2012.
                I'm someone very passionate that always dreamed about working in the field.
              </p>
              
            </section>

            <section className=''>
              <h2 className='text-2xl mb-2'>
                Front-end, Back-end, both ?
              </h2>
              <p>
                I would like to start my career as a Back-end developer as I have lot of affinities with databases.
                I do also enjoy Front-end when a design is provided.
              </p>
              
            </section>

            <section className=''>
              <h2 className='text-2xl mb-2'>
                What are my favorite technologies currently ?
              </h2>
              <ul className='flex gap-2 flex-wrap'>
                {
                  favoriteTech.map((e, key) => {
                    return (
                      <li key={key}>
                        <Tag
                          className={`
                            bg-primary-500
                          `}
                        >
                          {e}
                        </Tag>
                      </li>
                    )
                  })
                }
              </ul>
            </section>

            <section className=''>
              <h2 className='text-2xl mb-2'>
                What am I looking forward to learn ?
              </h2>
              <ul className='flex gap-2 flex-wrap'>
                {
                  learningTech.map((e, key) => {
                    return (
                      <li key={key}>
                        <Tag
                          className={`
                            bg-primary-500
                          `}
                        >
                          {e}
                        </Tag>
                      </li>
                    )
                  })
                }
              </ul>
            </section>
          </div>

          <div
            className={`
              mt-10
              lg:mt-0
              lg:col-start-2
              lg:row-span-full
              w-1/2
              mx-auto
            `}
          >
            <div className={`
              bg-secondary-900 
              bg-opacity-60 
              hover:bg-opacity-0 
              group 
              rounded-full 
              outline-dashed
              outline-secondary-900
              outline-offset-8
              hover:outline-offset-4
            `}>
              <Image 
                src={`/../public/images/me.jpg`} 
                layout="responsive"
                width="100%"
                height="100%"
                className='rounded-full object-cover object-top mix-blend-overlay group-hover:mix-blend-normal'
              />
            </div>

          </div>
        </div>
      </div>

    </Layout>
  )
}