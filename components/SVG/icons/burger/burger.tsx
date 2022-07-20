export interface BurgerProps {
  className?: string;
  firstBarClassName?: string;
  secondBarClassName?: string;
  thirdBarClassName?: string;
};

export function Burger (props : BurgerProps) {
  return (
    <svg
      className={props.className}
      width="32px" 
      height="32px"
      fill="none"
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
          className={props.firstBarClassName}
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M4 6h16M4 0"
        />

        <path
          className={props.secondBarClassName}
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M4 12h16M4 0"
        />

        <path
          className={props.thirdBarClassName}
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M4 18h16 0"
        />
    </svg>
  )
}