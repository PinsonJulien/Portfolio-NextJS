import Link from 'next/link';
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
      path: "/projects",
      name: "Projects"
    },
    {
      path: "/about",
      name: "About"
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
        bg-primary-900
        ${!open ? "bg-opacity-80 backdrop-blur" : ""}
        h-min-screen
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
        <div
          className={`
          `}
        >
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
          lg:ml-28
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
            lg:ml-auto
            lg:mx-0
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
            <Link href={`/resume`}>
                <a>CV / Resume</a>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}