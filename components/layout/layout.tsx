import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import Link from 'next/link'
import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({
  children,
  color, 
  home
}: {
  children: React.ReactNode;
  color?;
  home?: boolean;
}) {
  return (
    <div 
      className={`
        max-w-full
        min-h-screen
        bg-primary-900
        text-gray-500
        flex
        flex-col
      `}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />

      <main
        className={`
          container
          px-5
          mx-auto
          my-20
        `}
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}