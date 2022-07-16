import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../components/button/button';
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
          bg-blue-500
          dark:bg-red-500
        `}
      >
        <h1
          className={`
            text-gray-500
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
              bg-secondary-900
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
            `}
          >
            <Button
              size={"MD"}
              className={`
                border-secondary-900
                text-secondary-900
                hover:bg-secondary-900
              `}
            >
              <Link href={`/contact`} passHref>
                  <a>Be the first</a>
              </Link>
            </Button>
          </div>

        </div>



      </section>
    </Layout>
  )
}