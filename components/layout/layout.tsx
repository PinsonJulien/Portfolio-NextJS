import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import Link from 'next/link'
import React from 'react'
import Navbar from './navbar/navbar'

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
        w-screen
        h-screen
        bg-slate-700
        text-white
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
        `}
      >
        {children}
      </main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}