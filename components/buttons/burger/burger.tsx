import styles from './burger.module.scss';

export function BurgerButton(
  {get, set, className, childClassName} : 
  {
    get: boolean;
    set: (get: boolean) => void;
    className?: string;
    childClassName?: string;
  }) {
  return (
    <button 
      onClick={() => set(!get)}  
      className={`
        group
        space-y-0.5
        items-center
        px-3 
        py-2 
        border 
        rounded
        border-teal-400 
        hover:border-white
        ${className}
      `}
    >
      <div className={`${childClassName} h-0.5 w-3 bg-teal-200 group-hover:bg-white ${!get ? styles.fadeIn : styles.fadeOut}`}></div>
      <div className={`${childClassName} h-0.5 w-3 bg-teal-200 group-hover:bg-white`}></div>
      <div className={`${childClassName} h-0.5 w-3 bg-teal-200 group-hover:bg-white ${!get ? styles.fadeIn : styles.fadeOut}`}></div>
    </button>
  )
}