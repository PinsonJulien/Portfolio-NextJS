import Link from 'next/link';
import React from 'react';
import { Button } from '../../button/button';
import { BurgerIcon } from '../../icons/burger/burger-icon';
import { Logo } from '../../icons/logo/logo';
import { Menu } from './menu/menu';
import { NavLink } from './menu/navLink';
import styles from './navbar.module.scss';

export default function Navbar({ 
  open, setOpen, links
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  links : NavLink[];
}) {
  return (
    <nav
      className={`
        w-full
        grid
        grid-cols-2
        lg:grid-cols-4
        grid-rows-10
        p-6
        z-50
        top-0
        ${!open ? "h-auto bg-opacity-80" : "h-screen" }
        sticky
        bg-primary-900
      `}
    >
      {/* Logo */}
      <div
        className={`
          order-1
          col-span-1
          row-span-1
          mr-auto
          ${!open ? "my-auto" : "" }
          lg:my-auto
        `}
      >
        <Link href={`/`} passHref>
            <a>
              <Logo className='fill-gray-500 hover:fill-secondary-900 w-10 h-10 '/>
            </a>
        </Link>
        
      </div>

      {/* Navigation */}
      <div
        className={`
          ${!open 
            ? `hidden` 
            : `flex`
          }
          lg:flex
          col-span-2
          row-span-6
          order-3
          lg:order-2
          mx-auto
          lg:my-auto
        `}
      >
        <Menu
          links={links}
          className={`
            
          `}
        />
      </div> 

      {/* right button */}
      <div 
        className={`
          ${!open 
            ? `hidden` 
            : `flex`
          }
          lg:flex
          col-span-2
          lg:col-span-1
          order-4
          lg:order-3
          mx-auto
          mt-auto
          lg:mt-0
          lg:mx-0
          lg:ml-auto
        `}
      >
        <Button
          size={"XS"}
          className={`
            border-secondary-900
            text-secondary-900
            hover:bg-secondary-900
          `}
        >
          <Link href={`/resume`} passHref>
              <a>CV / Resume</a>
          </Link>
        </Button>
      </div>

      {/* Burger */}
      <div
        className={`
          col-span-1
          order-2
          lg:hidden
          ml-auto
        `}
      >
        <Button
          onClick={() => setOpen(!open)}
          size={"MD"}
          className={`
          border-secondary-900
          hover:bg-secondary-900
          `}
        >
          <BurgerIcon
            get={open}
            lineClassName={`
              bg-secondary-900
              group-hover:bg-white
            `}
          />
        </Button>
      </div>
    </nav>
  )
}