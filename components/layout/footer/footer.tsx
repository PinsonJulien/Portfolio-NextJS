import React from 'react';

export default function Footer({ 
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <footer 
      className={`
        ${className}
        w-full
        mt-auto
        p-6
        flex
        flex-col
      `}
    >
      <p
        className={`
          mx-auto
        `}
      >
        Built with ❤️ using NextJS and Tailwind 
      </p>
     
    </footer>
  )
}