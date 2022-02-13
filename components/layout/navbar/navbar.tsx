import React from 'react';
import { Button } from '../../button/button';
import { BurgerIcon } from '../../icons/burger/burger-icon';
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
      path: "/posts",
      name: "patatezzzzzzzzzzzzzzzzz"
    },
    {
      path: "/patate",
      name: "patate 2"
    }
  ];

  return (
    <nav 
      className={`
        w-full
        ${!open ? "sticky" : "fixed" }
        lg:sticky
        top-0
        ${!open ? "h-auto" : "h-full"}
        lg:h-auto
        p-6
        bg-teal-500
        flex
        flex-col
        lg:flex-row
        lg:items-center
        z-50
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
          <Button
            onClick={() => setOpen(!open)}
            size={"MD"}
            className={`
            border-teal-400 
            hover:border-white
            `}
          >
            <BurgerIcon
              get={open}
              lineClassName={`
                bg-teal-200 
                group-hover:bg-white
              `}
            />
          </Button>
        </div>
      </div>

      <div
        className={`
          ${!open ? "hidden" : "flex"}
          lg:flex
          grow
          flex-col
          lg:flex-row
          lg:items-center
          mx-auto
          p-2
          lg:p-0
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