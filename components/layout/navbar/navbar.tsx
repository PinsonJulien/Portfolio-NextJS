import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { Button } from '../../button/button';
import { Burger } from '../../SVG/icons/burger/burger';
import { Logo } from '../../SVG/icons/logo/logo';
import { Moon } from '../../SVG/icons/moon/moon';
import { Sun } from '../../SVG/icons/sun/sun';
import { Menu } from './menu/menu';
import { NavLink } from './menu/navLink';
import styles from './navbar.module.scss';

export default function Navbar({ 
  open, setOpen, lightMode, switchLightMode, links
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  lightMode: boolean;
  switchLightMode: any;
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
      
      {/* right side */}
      <div
        className={`
          flex
          ml-auto
          mb-auto
          lg:my-auto
          col-span-1
          order-2
          gap-5
        `}
      >
        <LightSwitch 
          value={lightMode}
          onClick={switchLightMode}
        />

        <BurgerButton 
          value={open}
          onClick={() => setOpen(!open)}
          className={`
            lg:hidden
          `}
        />
      </div>
    </nav>
  )
}

const LightSwitch = (
  props : {
    value: boolean;
    onClick: () => any;
  }
) => {
  return (
    <button
      onClick={props.onClick}
      className='my-auto'
    >
      {
        (!props.value) 
        ? (
          <Sun 
            className={`
            stroke-yellow-500
            `}
          />
        )
        : (
          <Moon 
            className={`
            stroke-yellow-500
            `}
          />
        )
      }
    </button>
  )
}

const BurgerButton = (
  props : {
    value: boolean;
    onClick: () => any;
    className?: string;
  }
) => {
  return (
    <button
      onClick={props.onClick}
      className={`
        ${props.className}
        my-auto
      `}
    >
      <Burger
        get={props.value}
        lineClassName={`
          bg-secondary-900
        `}
      />
    </button>
  );
}