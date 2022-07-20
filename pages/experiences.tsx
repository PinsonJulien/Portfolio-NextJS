import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.scss';
import { StateProps } from './_app';

export default function Experiences(props: StateProps) {
  return (
    <Layout
      {...props}
    >
      <Head>
        <title>Work experiences - {siteTitle}</title>
      </Head>
      
      <section
        className={`
          container
          flex
          flex-col
          text-neutral-900
          dark:text-neutral-100
        `}
      >
        <h1
          className={`
            text-2xl
            mx-auto
          `}
        >
          Work experiences
        </h1>

        <div
          className={`
            flex
            flex-col
            gap-10
            w-3/4
            lg:w-1/3
            mt-12
            mx-auto
          `}
        >
          <div
            className={`
              bg-teal-600
              dark:bg-teal-500
              bg-opacity-50
              overflow-hidden
              rounded-xl
            `}
          >
            <Image 
              src={`/../public/gifs/confused.gif`} 
              alt="Confused John Travolta"
              layout="responsive"
              width="100%"
              height="100%"
              className='mix-blend-overlay select-none'
            />
          </div>

          <div
            className={`
              mx-auto
              flex
              gap-x-2
              text-lg
            `}
          >
            <p>
              Want to be the first ?
            </p>
            <Link href={`/contact`} passHref>
              <a
                className={`
                  text-orange-600
                  dark:text-orange-500
                  hover:underline
                `}
              >
                Contact me !
              </a>
            </Link>
          </div>

        </div>



      </section>
    </Layout>
  )
}