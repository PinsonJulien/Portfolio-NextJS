import React from 'react';

export default function Footer({ 
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <footer 
      className={`
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