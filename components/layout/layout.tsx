import Head from 'next/head'
import styles from './layout.module.scss'
import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import { NavLink } from './navbar/menu/navLink'
import { StateProps } from '../../pages/_app'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout(
  props: StateProps & {children: React.ReactNode }
) {
  const [open, setOpen] = React.useState<boolean>(false);

  // Liens:
  const links: NavLink[] = [
    {
      path: "/projects",
      name: "Projects"
    },
    {
      path: "/experiences",
      name: "Experiences"
    },
    {
      path: "/about",
      name: "About"
    },
    {
      path: "/cv",
      name: "CV"
    }
  ];

  return (
    <div 
      className={`
        ${(!props.lightMode) ? "dark" : null}
        max-w-full
        min-h-screen
        text-base
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

      <Navbar 
        open = {open}
        setOpen = {setOpen}
        links = {links}
        lightMode = {props.lightMode}
        switchLightMode = {props.switchLightMode}
      />

      <main
        className={`
          ${open ? 'hidden' : ''}
          grow
          bg-neutral-100
          dark:bg-neutral-800
          text-neutral-800
          dark:text-neutral-200
          transition-colors
          duration-1000
        `}
      >
        <div className='p-5 mx-auto container'>
          {props.children}
        </div>
      </main>

      <Footer 
        className={`
        bg-blue-900
        text-neutral-100
          ${open ? 'hidden' : ''}
        `}
      />
    </div>
  )
}