import { Github } from "../SVG/icons/github/github";

export default function Switch({
  value,
  onClick,
  onSwitchStyle,
  onCircleStyle,
  offSwitchStyle,
  offCircleStyle
} : {
  value: boolean;
  onClick?: () => any;
  onSwitchStyle: string;
  onCircleStyle: string;
  offSwitchStyle: string;
  offCircleStyle: string;
}) {
  return (
    <label 
      className={`
        w-2/3
        h-5
        relative
      `}
    >
      <input
        className={`
          peer
          sr-only
        `}
        type="checkbox" 
        role="switch"
        defaultChecked={value}
        onClick={onClick}
      />
      {/* background */}
      <span 
        className={`
          absolute
          inset-0
          rounded-full
          ${ 
            (value)
              ? onSwitchStyle
              : offSwitchStyle
          }
        `}
      />
      {/* circle */}
      <Circle 
        className={`
          top-1/2
          left-1/4
          peer-checked:left-3/4
          -translate-x-1/2
          -translate-y-1/2
          ${ 
            (value)
              ? onCircleStyle
              : offCircleStyle
          }
        `}
      />
    </label>
  );

} 

const Circle = (props) => {
  return (
    <span 
      className={`
        ${props.className}
        transition
        duration-500
        absolute
        h-2
        w-2
        rounded-full
      `}
    />
  )
}
