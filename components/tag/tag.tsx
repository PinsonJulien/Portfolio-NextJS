import styles from './tag.module.scss';

export function Tag(
  { onClick, className, children, size } : 
  {
    onClick?: () => any;
    className?: string;
    children?: any;
    size?: any
  }) {
  return (
    <div
      onClick = {onClick}
      className={`
        select-none
        text-xs
        font-mono
        font-semibold 
        px-2.5
        py-0.5
        rounded-full
        w-max
        ${className}
        ${setSize(size)}
      `}
    >
      {children}
    </div>
  )
}

function setSize(size: any): String {
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