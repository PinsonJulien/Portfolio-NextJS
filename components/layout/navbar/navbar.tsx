import React from 'react';
import { BurgerButton } from '../../buttons/burger/burger';
import { Menu } from './menu/menu';
import { NavLink } from './menu/navLink';
import styles from './navbar.module.scss';

export default function Navbar({ 
  children
}: {
  children?: React.ReactNode;
}) {

  // Ouverture / fermeture du menu sur mobile.
  const [open, setOpen] = React.useState<boolean>(false);

  // Liens:
  const links: NavLink[] = [
    {
      path: "/404",
      name: "patatezzzzzzzzzzzzzzzzz",
      active: true
    },
    {
      path: "/patate",
      name: "patate 2"
    }
  ];

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
          mx-5
          lg:mx-0
          lg:flex
          lg:items-center 
          lg:w-auto
          ${!open ? "hidden" : ""}
        `}
      >
        <Menu
          links={links}
        />
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div>
      </div>
    </nav>
  )
}