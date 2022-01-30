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
        text-sm 
        lg:mx-auto 
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
                mr-4`
              }>
              <Link
                href={data.path}
              >
                <a
                  className = {`
                    text-teal-200 
                    hover:text-white
                    ${
                      data.active 
                      ? "text-purple-500" 
                      : ""
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