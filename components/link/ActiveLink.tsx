import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ href, className, children, activeClassName, inactiveClassName, ...props }) => {
  const { asPath, isReady } = useRouter();

  const [childClassName, setClassName] = useState(className)

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route via as
      // Static route via href
      const linkPathname = new URL(props.as || href, location.href).pathname

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        (activePathname.includes(linkPathname))
        ? `${className} ${activeClassName}`.trim()
        : `${className} ${inactiveClassName}`.trim()

      if (newClassName !== childClassName) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    href,
    childClassName,
    activeClassName,
    inactiveClassName,
    setClassName,
    className,
  ])

  return (
    <Link passHref href={href} {...props}>
      <a 
        children = {children}
        className = {childClassName}  
      />
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink