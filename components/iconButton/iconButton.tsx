import { ExternalLink } from "../icons/externalLink/external-link";
import { Github } from "../icons/github/github";

export function IconButton(
  { onClick, href, className, icon } : 
  {
    onClick?: () => any;
    href?: string;
    icon?: string;
    className?: string;
    children?: any;
  }) {
  return (
    <button 
      onClick={onClick}  
      className={`
        select-none
        ${className}
      `}
    >
      <a
        href={href}
        className={`
          my-auto
          fill-gray-500
          hover:fill-secondary-900
        `}
      >
        {
          (() => {
            switch(icon) {
              case 'github': 
                return <Github />
              case 'externalLink':
                return <ExternalLink />
            }
          })()
        }
      </a>
    </button>
  )
}