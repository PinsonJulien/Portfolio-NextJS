export function Moon (
  props : {
    className?: string;
  }
) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  )
}