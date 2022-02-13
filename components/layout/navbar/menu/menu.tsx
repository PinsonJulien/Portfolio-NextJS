import Link from 'next/link';
import { NavLink } from './navLink';
import styles from './menu.module.scss';
import { NextRouter, useRouter } from 'next/router';

export function Menu (
  {links, className} : 
  {
    links: NavLink[];
    className?: string;
  }) {

  const router: NextRouter = useRouter();
  const pathname: String = router.pathname;

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
        lg:gap-x-6
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
              <Link
                href={data.path}
                passHref
              >
                <a
                  className={`
                    block
                    text-teal-200
                    text-center
                    hover:text-white
                    ${
                      pathname.includes(data.path)
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