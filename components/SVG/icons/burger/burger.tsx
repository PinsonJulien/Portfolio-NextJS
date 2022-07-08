import styles from './burger.module.scss';

export function Burger(
  {get = false, className, lineClassName} : 
  {
    get?: boolean;
    className?: string;
    lineClassName?: string;
  }) {
  return (
    <span
      className={`
        ${className}
        group
        space-y-0.5
        items-center
      `}
    >
      <span
        className={`
          ${!get ? styles.fadeIn : styles.fadeOut}
          ${lineClassName} 
          block
          h-0.5 
          w-3 
        `}
      >
      </span>
      <span 
        className={`
          ${lineClassName}
          block
          h-0.5 
          w-3 
        `}
      >
      </span>
      <span 
        className={`
          ${!get ? styles.fadeIn : styles.fadeOut}
          ${lineClassName} 
          block
          h-0.5 
        `}
      >
      </span>
    </span>
  )
}