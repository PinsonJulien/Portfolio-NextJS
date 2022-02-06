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
      className={`
        w-screen
        ${!open ? "h-auto" : "h-screen"}
        lg:h-auto
        fixed
        top-0
        p-6
        bg-teal-500
        flex
        flex-col
        lg:flex-row
        lg:items-center
      `}
    >
      <div
        className={`
          flex
          items-center
        `}
      >
        <div>
          logo
        </div>
        <div
          className={`
            ml-auto
            lg:ml-0
            lg:hidden
          `}
        >
          <BurgerButton 
            get={open}
            set={setOpen}
            className=""
            childClassName=""
          />
        </div>
      </div>

      <div
        className={`
          grow
          flex 
          flex-col
          lg:flex-row
          lg:items-center
          mx-auto
          p-2
          lg:p-0
          ${!open ? "hidden" : ""}
        `}
      >
        <Menu
          links={links}
          className={`
          `}
        />
        <div
          className={`
            mt-auto
            lg:mt-0
            mx-auto
            lg:mx-0
          `}
        >
          <a 
            href="#" 
            className={`
              inline-block 
              text-sm 
              px-4 
              py-2 
              leading-none 
              border 
              rounded 
              text-white 
              border-white 
              hover:border-transparent 
              hover:text-teal-500 
              hover:bg-white 
            `}
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}