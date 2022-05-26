import styles from './button.module.scss';
import { ButtonSizes } from './buttonSizes';

export function Button(
  { onClick, className, children, size } : 
  {
    onClick?: () => any;
    className?: string;
    children?: any;
    size?: ButtonSizes
  }) {
  return (
    <button 
      onClick={onClick}  
      className={`
        items-center
        group
        border 
        rounded
        hover:bg-opacity-10
        ${className}
        ${setSize(size)}
      `}
    >
      {children}
    </button>
  )
}

function setSize(size: ButtonSizes): String {
  switch (size) {
    case "XL":
      return "px-6 py-5";

    case "LG":
      return "px-5 py-4";
    
    default:
    case "MD":
      return "px-4 py-3";

    case "SM":
      return "px-3 py-2";

    case "XS":
      return "px-2 py-1";
  }
}