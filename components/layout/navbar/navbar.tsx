import Link from 'next/link'
import React from 'react'

export default function Navbar({ 
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <nav className="">
      <ul className="flex">
        <li className="mr-6">
          <a href="" className="text-blue-500 hover:text-blue-800">haha </a>
        </li>
        <li className="mr-6">
          <a href="" className="text-blue-500 hover:text-blue-800">haha </a>
        </li>
        <li className="mr-6">
          <a href="" className="text-blue-500 hover:text-blue-800">haha </a>
        </li>
      </ul>
    </nav>
  )
}