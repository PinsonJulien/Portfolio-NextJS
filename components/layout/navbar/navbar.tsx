import Link from 'next/link';
import React from 'react';
import { BurgerButton } from '../../buttons/burger/burger';
import styles from './navbar.module.scss';

export default function Navbar({ 
  children
}: {
  children?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <nav 
      className={`${styles.container} flex items-center justify-between flex-wrap bg-teal-500 p-6`}
    >
      <div 
        className="flex items-center flex-shrink-0 text-white mr-6"
      >
        <p>lol </p>
        <p>lol</p>
      </div>
      <div 
        className="block lg:hidden"
      >
        <BurgerButton 
          get={open}
          set={setOpen}
          className=""
          childClassName=""
        />
      </div>

      <div 
        id="nav-content" 
        className={`
          w-full 
          block 
          flex-grow
          lg:flex
          lg:items-center 
          lg:w-auto
          ${!open ? "hidden" : ""}
        `}
      >
        <ul 
          className="text-sm lg:mx-auto"
        >
          <li className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <a href="#" className="text-teal-200 hover:text-white">
              Docs
            </a>
          </li>
          <li className="block mt-4 lg:inline-block lg:mt-0 mr-4 bg-black">
            <a href="#" className="text-teal-200 hover:text-white">
              Docs
            </a>
          </li>
        </ul>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div>
      </div>
    </nav>
  )
}