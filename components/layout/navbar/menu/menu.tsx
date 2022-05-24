import { NavLink } from './navLink';
import styles from './menu.module.scss';
import { NextRouter, useRouter } from 'next/router';
import ActiveLink from '../../../link/ActiveLink';

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
        flex
        flex-col
        gap-y-1
        lg:flex-row
        lg:gap-y-0
        lg:gap-x-10
        ${className}
      `}
    > 
      {
        links.map((data, key) =>
          ( 
            <li
              key={key}
              className={`
                lg:mt-0 
              `}
            >
              <ActiveLink
                href={data.path}
                children = {data.name}
                className= {`
                  block
                  text-center
                  hover:text-secondary-900
                `}
                activeClassName= {`
                  ${styles.active} 
                  text-secondary-900`
                }
                inactiveClassName = {`
                  ${styles.animated} 
                  text-gray-500`
                }
              />
            </li>
          )
        )
      }
    </ul>
  )
}