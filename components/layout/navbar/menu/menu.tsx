import Link from 'next/link';
import { NavLink } from './navLink';
import styles from './menu.module.scss';

export function Menu (
  {links, className} : 
  {
    links: NavLink[];
    className?: string;
  }) {
  return (
    <ul 
      className={`
        text-base
        lg:mx-auto
        flex
        flex-col
        gap-y-1
        lg:flex-row
        lg:gap-y-0
        lg:gap-x-5
        ${className}
      `}
    > 
      {
        links.map((data, key) =>
          ( 
            <li
              key={key}
              className={`
                block 
                mt-4 
                lg:inline-block 
                lg:mt-0 
                mr-4
              `}
            >
              <Link
                href={data.path}
              >
                <a
                  className = {`
                    text-teal-200 
                    hover:text-white
                    hover:no-underline
                    ${
                      data.active 
                      ? styles.active 
                      : styles.animated
                    }
                  `}
                >
                  {data.name}
                </a>
              </Link>
            </li>
          )
        )
      }
    </ul>
  )
}